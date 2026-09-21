"""Build bounded QT25 teaching exports from the canonical entry after compilation."""
from pathlib import Path
import copy, json, re

def prepare(root):
    source=root/'notebook/entries/zh-qt25.json'
    if not source.exists():return
    e=json.loads(source.read_text(encoding='utf-8'))
    directory=root/'static/notebook/labs/qt-ghi/agent'
    directory.mkdir(parents=True,exist_ok=True)
    url='/notebook/labs/qt-ghi/agent/'
    exports={}
    for branch in ('A','B'):
        packet=copy.deepcopy(e['agent_packet'])
        packet['required_readings']=packet.pop('required_readings_by_branch')[branch]
        packet['required_competence']=packet.pop('required_competence_by_branch')[branch]
        packet['selected_branch']=branch
        packet['selection']='共同部分与已选择的 '+branch+' 分支；先读此范围的指定原文。'
        packet['optional_readings']=[x for x in packet['optional_readings'] if x.get('branch',branch)==branch]
        inputs=packet['supplied_inputs'];inputs['branches']={branch:inputs['branches'][branch]}
        inputs['competence']=packet['required_competence']
        inputs['attachments']=[]
        inputs['static_equivalent']='本包所选分支正文、静态表与完整题解；输入和结果保留在 branches。'
        packet['runtime_reading_log']=[]
        body=re.sub(r'<div data-reading-branch-controls>[\s\S]*?</div>','',e['body_markdown'])
        body=re.sub(r'<section data-reading-branch="([AB])">([\s\S]*?)</section>',lambda m:m[2] if m[1]==branch else '',body)
        body=re.sub(r'<script\b[\s\S]*?</script>','',body)
        definitions=dict(re.findall(r'^\[\^([^\]]+)\]: (.+)$',body,re.M))
        content=re.sub(r'^\[\^[^\]]+\]: .+$','',body,flags=re.M)
        used=set(re.findall(r'\[\^([^\]]+)\]',content))
        body=content.rstrip()+'\n\n'+'\n'.join('[^'+k+']: '+v for k,v in definitions.items()if k in used)
        prompt='当前只教 '+branch+' 分支。先实际读取下列必读文献，记录版本与所读章节，再做本分支的推演、核算和迁移题。未选分支不进入本次教学。\n\n'+e['prompt']
        md='# '+e['title']+'\n\n所选范围：共同部分 + '+branch+'\n\n## Teaching instructions\n'+prompt+'\n\n## Required readings and runtime protocol\n```json\n'+json.dumps(packet,ensure_ascii=False,indent=2)+'\n```\n\n## Supplied entry\n'+body+'\n'
        name='QT25-'+branch+'.md'
        (directory/name).write_text(md,encoding='utf-8')
        (directory/('QT25-'+branch+'.json')).write_text(json.dumps(packet,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
        exports[branch]={'url':url+name,'markdown':md}
    (directory/'branches.json').write_text(json.dumps(exports,ensure_ascii=False),encoding='utf-8')

if __name__=='__main__':prepare(Path(__file__).resolve().parents[1])
