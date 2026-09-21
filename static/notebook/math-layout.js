// MathJax 4 breaks at mathematical operators, not arbitrary character boundaries.
// Inline pieces reflow natively; displayed equations need new container measurements.
(() => {
  let timer, lastWidth = document.querySelector('#main')?.clientWidth;
  function reflow() {
    clearTimeout(timer);
    timer=setTimeout(async () => {
      const mj=window.MathJax;
      if(!mj?.whenReady)return;
      try {
        await mj.whenReady(() => {
          mj.startup.document.state(0);
          mj.texReset();
        });
        await mj.typesetPromise();
      } catch(error) { console.warn('Math layout could not refresh',error); }
    },250);
  }
  window.addEventListener('resize',()=>{
    const width=document.querySelector('#main')?.clientWidth;
    if(width!==lastWidth){lastWidth=width;reflow();}
  });
  document.addEventListener('toggle',event=>{
    if(event.target instanceof HTMLDetailsElement && event.target.open)reflow();
  },true);
})();
