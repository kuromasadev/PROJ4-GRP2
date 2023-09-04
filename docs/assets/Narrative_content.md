# Food Supply Chain Sustainability 



## Synopsis

Investigate the social impacts of different stages of the food supply chain, from production to distribution; of red meat from a cow and tofu from soybean. The metric will be the cost of the unit per pound in each stage of the supply chain and its impact on the social environment with respect to Downtown Houston in 2022. 

## Data Sources 

Typical stages of food supply chain condensed into five parts. Project team generated databases based on the following:
1. ***agriculture*** (raw material supplier) 
2. ***supplier*** (storing, raw material distributor)
3. ***production*** (packaging, processing from raw)
4. ***transport*** (LTL, distribution centers)
5. ***consumer*** (retail stores)

To maximize efficiency during the data collection phase, the following SMART goals were implemented: 

- **Specific:** meat (beef) vs tofu (soybean)
- **Measurable:** as it relates to Downtown Houston
- **Achievable:** through the metric of unit price ($ per lb)
- **Relevant:** define impact of cost to environmental justice (affordability of beef/soybeans)
- **Time-based:** 2022 or best available data



## Pricing Database 

#### *agriculture* 

- For soybeans, pricing models were developed from a per bushel per acre perspective. A bushel is approximately 60lbs and an acre generates about 3,100lbs of soybeans. 
- For beef, pricing models were developed from a hundredweight (CWT) per acre. A hundredweight is about 100lbs. Depending on the quality of cattle destined for slaughter, an acre generates anywhere between 160-180lbs of cattle.

Due to the lack of information on Harris County cattle farmland, the pricing model assumed that the county would follow the state's market tendency, and for any null values, it would follow the national market tendency. 

#### *supplier* 

- Due to the nature of soy products, where 68% of the market goes into agricultural feed uses, the pricing  was consistent between national and state markets. 
- Due to the customized nature of beef selections (Choice, Select, Specialty), the pricing model at the supplier stage was set by following USDA Wholesale beef prices with best available data (last five months)

#### *production - transport - consumer *

- The pricing model for beef at the production stage forward was set by following the Cattlemen's Beef Board and National Cattlemen's Beef Association Wholesale and retail pricing guides with best available data (year to date)
- The pricing model for specific manufactured soy products were set by following the retail prices at local big box shops (HEB, Walmart, Target, Kroger)



## Variable Database 

#### *agriculture* 

- For both beef and soy agricultural source locations, there was not enough data to include in the model. References to the assumed quantity of farmland that might be producing soy was baked into the local market share of that product. 

#### *supplier*

- For both beef and soy suppliers, the agricultural commodity websites were scraped and market research took place to find a short list of distributors that would be reasonably plausible to say they serve Downtown Houston. 

#### *transport*

- For both beef and soy products, there was not enough data to include transport companies in the model. Research showed that any licensed transport company could potentially hire a commercial driver to bring a shipment in, or provide less-than-truckload (LTL) services at short notice. 

#### *consumer*

- Building footprints were lifted from Microsoft's Footprint GIS layer, and matched against Harris County Appraisal District's State Class code which inform building use. 
- Business Point of Interest information was brought into the model. 



## Modeling Approach 

Leaning into this data, the team was attracted to use machine learning to help fill in the gaps in volume and pricing that became apparent during the data collection phase.  The team hadn't found a linear relationship across any of the variables, so we needed a machine learning model that could handle non-linear relationships.  Of the models out there, Random Forest became a top pick, mostly for the following reasons: 

1. **Flexibility**: Can capture both linear and non-linear relationships.
2. **Robustness**:  Less sensitive to outliers than linear regression.
3. **Feature Importance**: Can rank features based on their importance, which provides some level of interpretability, although not as straightforward as linear regression.

To cover more ground in the limited 2-week sprint, we split the work to cover two approaches using Random Forest. 

#### Top-Down Approach 

The highlight of this approach is by approaching the problem using a supply-demand mindset and looking for plausibility factors that can help string the two tables together. 

Data Tables for Supply:

- distributor list 
- product (SKU) list

Data Tables for Demand: 

- building list (BLDG)
- business catalog (CUST)

Data Preprocessing and Feature engineering was applied to generated an encoded table to train the model, with the objective of predicting how much volume could the supply actually produce based on the square footage of the business, approximate revenue range and NAICS business classification (North American Industry Classification System). 

#### Other Approach 



## Final Reporting 

Our study seeks to unveil the intricate connections within our food supply chain and their implications for Downtown Houston's environment and societal fabric. By providing a detailed analysis of the associated costs at each stage, we aim to enlighten consumers, businesses, and policymakers on sustainable choices that benefit our planet and community.

