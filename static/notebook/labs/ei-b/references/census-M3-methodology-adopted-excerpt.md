# Census M3 Methodology — actual adopted source excerpt

Source: U.S. Census Bureau, *Methodology* for Manufacturers’ Shipments, Inventories, and Orders.

Official PDF: https://www.census.gov/manufacturing/m3/Web_Methodology.pdf

Official landing page: https://www.census.gov/manufacturing/m3/how_the_data_are_collected/index.html

Accessed: 2026-09-21. The web tool opened the actual 6-page official PDF and returned its full text. A separate ordinary download returned HTTP 403; this file preserves the actual returned source text below, not a locally downloaded PDF. Paragraph line wraps are joined. Text is not an editorial reconstruction. No publication/revision date was displayed in the adopted unit; access date is not presented as publication date.

Adopted purpose: determine how the published new-orders estimates and their seasonal adjustment relate to shipments and unfilled orders. This is an addition for EI09-01 in `receipts/ei-b-independent-draft-review.md`; it does not change the frozen May 2026 table values.

## Estimation — PDF pp.2–3

A link relative procedure derives the monthly universe estimates of shipments, unfilled orders, and total inventories for each industry category. The universe estimate for the previous month is multiplied by the monthly ratio of change to arrive at a universe estimate for current month. The company must be present in both the prior and current month to be included in the ratio of change calculation. When an individual company reports unusually large changes from the previous month, or when a particular company has unique data patterns differing substantially from the movement shown by the rest of the reporting panel in a particular industry category, the company is excluded from the ratio of change calculation but included in the universe estimate of level. The effect of this procedure is to restrict the estimation for nonrespondents and firms not in the survey panel to the general trend of the industry.

The universe estimate of new orders is derived from the monthly estimate of shipments plus the change in unfilled orders between the current and prior period. The estimate includes orders that are received and filled in the same month as well as orders that have not yet been filled. It also includes the effects of cancellations and modifications of previously reported orders. The standard ratio estimate procedure is not followed for new orders because not all companies report new orders, and some that do report this item limit their reporting to specific products for which long lead times are required in the production cycle. These companies, in effect, exclude new orders received for products that are shipped from inventory.

A modified procedure also is used to estimate the stage of fabrication inventory data. In this procedure, the total inventory data estimated for each tabulated industry category are retabulated to the appropriate three-digit NAICS subsector levels and serve as control totals for the stage of fabrication data. Initial estimates are made for each of the stages of fabrication at the three-digit NAICS level using the ratio estimation procedure. The differences between the sum of the stage of fabrication detail and total inventories at the three-digit NAICS level are then allocated proportionally to the stage of fabrication figures to form the estimates. The reason behind this procedure is that a significant number of companies report total inventories but cannot report inventories by stage of fabrication.

## Benchmarking — PDF p.3, intervening source paragraph

The M3 survey data are benchmarked to reduce both sampling and nonsampling errors. The relatively small monthly sample size as well as the differences that result from collecting the monthly data on a divisional basis as compared to the benchmark data on an establishment basis account for most of the revision. Also, some monthly reports received too late to be included in the monthly publications are added to improve the revised estimates of change of the historical monthly data.

## Seasonal Adjustment Methodology — PDF pp.3–4

Seasonal modeling for the M3 survey uses the Census Bureau’s X-13ARIMA-SEATS program to remove predictable calendar-related patterns and highlight underlying economic trends. Monthly data for shipments, unfilled orders, and total inventories are seasonally adjusted at the most detailed industry level by dividing unadjusted values by factors computed through X-13ARIMA-SEATS. Seasonally adjusted new orders are then derived by combining seasonally adjusted shipments with the period-to-period change in seasonally adjusted unfilled orders.

Inventory by stage of fabrication is adjusted at the three-digit NAICS subsector level. When the sum of stage-level adjustments does not align with the seasonally adjusted major-group totals, the discrepancy is proportionally distributed across the stage-of-fabrication categories to maintain consistency. Seasonal factors are calculated concurrently, meaning each month’s factor incorporates the current observation.

Trading day adjustments are also applied to account for irregular month-to-month fluctuations caused by differing numbers of working days and varying month lengths. These calendar effects can obscure underlying manufacturing activity, particularly in shipments series. Except for Tobacco Manufacturing and Turbine and Generator Manufacturing, all M3 shipment series are adjusted for both month length and trading day variation.

X-13ARIMA-SEATS regression and spectral diagnostics guide the selection of daily weights, aiming to reduce peaks at calendar frequencies and decrease the magnitude of residual irregular movements.

Stock variables such as inventories and unfilled orders may also exhibit trading day effects because they represent accumulations of monthly flows. Diagnostics like those used for shipments determine when trading day adjustments are appropriate for total inventories, stage-of-fabrication inventories, and unfilled orders. New orders are implicitly trading-day-adjusted since they are derived using trading-day-adjusted shipments, although changes in unfilled orders are typically not adjusted for trading day effects.

## Reliability of the Data — PDF p.4

The monthly data presented in this publication are subject to both sampling and nonsampling errors. Sampling errors occur because reports are received from a sample rather than the complete universe of manufacturing companies. Because the present composition of the panel is not based on a probability sample, the amount of sampling error cannot be quantified. Nonsampling errors, on the other hand, are attributable to many sources. The use of company or divisional reports to estimate the monthly change for establishments is one source of nonsampling error. The use primarily of large companies to represent the month-to-month movement of all companies is another potential source. In addition, response and processing errors may be present, although computer edits and analytical reviews of the data detect the most significant errors of this kind prior to tabulation.
