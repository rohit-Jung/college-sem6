// Report Configuration
#set document(
  title: "Big Data Process Report - Sales Analytics",
  author: "Group Members",
)

#set text(font: "Times New Roman", size: 12pt, lang: "en")
#set heading(numbering: "1.")
#set par(justify: true, leading: 0.65em)

// Gruvbox Dark Hard theme for code blocks
#show raw.where(block: true): it => {
  set text(font: "FiraCode Nerd Font Mono", size: 9pt)
  block(
    fill: rgb("#1d2021"),
    inset: 10pt,
    radius: 4pt,
    width: 100%,
    {
      show raw.line: l => {
        text(fill: rgb("#ebdbb2"), l.body)
      }
      it
    },
  )
}

#show raw.where(block: false): it => {
  box(
    fill: rgb("#1d2021"),
    inset: (x: 4pt, y: 2pt),
    radius: 2pt,
    text(font: "FiraCode Nerd Font Mono", size: 10pt, fill: rgb("#ebdbb2"), it),
  )
}

#set page(
  paper: "a4",
  margin: (x: 2.5cm, y: 2.5cm),
  numbering: none,
  header: none,
)

#align(center)[
  #v(2cm)

  #text(size: 14pt)[Big Data | 6CS030]

  #v(3cm)

  #text(size: 28pt, weight: "bold")[Big Data Process Report]

  #v(0.5cm)

  #text(size: 16pt)[Sales Data Analytics]

  #v(1cm)

  #line(length: 50%)

  #v(4cm)

  *Submitted By:*
  #v(0.3cm)
  Rohit Jung Kathet \
  Dehan Wanem \
  Nikisha Shrestha

  #v(2cm)

  19 March 2026
]

#pagebreak()

#outline(title: [Table of Contents], indent: auto, depth: 2)

#pagebreak()

#set page(
  paper: "a4",
  margin: (x: 2.5cm, y: 2.5cm),
  numbering: "1",
  header: align(right)[_Big Data - Sales Data Analysis_],
)
#counter(page).update(1)

= Introduction

This report walks through a Big Data pipeline for sales analytics, covering everything from getting the data to deploying the results. The goal is straightforward: take a year's worth of sales transactions and figure out what's actually going on with the numbers.

The dataset has 1,000 sales transactions with 14 columns. It covers product info, sales figures, customer types, and regional data from January 2023 to January 2024. Not a massive dataset, but enough to work with for this kind of analysis.

== What we're trying to find out

- Which regions and product categories sell the most (and why that might be)
- Whether profit margins vary much across different segments
- How new customers compare to returning ones
- If online and retail channels perform differently
- Whether we can predict sales with the available data
- What the business should actually do with these findings

#pagebreak()

= Step 1: Data source identification

== Data source

The dataset comes from Kaggle:

#rect(fill: rgb("#f5f5f5"), width: 100%, inset: 10pt)[
  *Dataset:* Sales Dataset \
  *Source:* https://www.kaggle.com/datasets/vinothkannaece/sales-dataset/data \
  *Records:* 1,000 transactions \
  *Time Period:* January 2023 - January 2024
]

== Dataset schema

#table(
  columns: (1fr, 0.6fr, 2fr),
  inset: 8pt,
  stroke: 0.5pt,
  [*Column*], [*Type*], [*Description*],
  [Product_ID], [Integer], [Product identifier (1001-1100)],
  [Sale_Date], [Date], [Transaction date (2023-01-01 to 2024-01-01)],
  [Sales_Rep], [String], [Representative (Alice, Bob, Charlie, David, Eve)],
  [Region], [String], [Geographic area (North, South, East, West)],
  [Sales_Amount], [Float], [Transaction value in dollars],
  [Quantity_Sold], [Integer], [Units sold (1-49)],
  [Product_Category],
  [String],
  [Category (Clothing, Electronics, Food, Furniture)],

  [Unit_Cost / Unit_Price], [Float], [Cost and selling price per unit],
  [Customer_Type], [String], [New or Returning customer],
  [Discount], [Float], [Discount percentage (0-30%)],
  [Payment_Method], [String], [Cash, Credit Card, or Bank Transfer],
  [Sales_Channel], [String], [Online or Retail],
)

The data is clean. No missing values, no duplicates. That's rare, but it makes the analysis simpler.

== Data acquisition strategy

Getting the data was simple:

1. Download the CSV from Kaggle manually, or
2. Use the Kaggle API:
`kaggle datasets download -d vinothkannaece/sales-dataset`
3. For ongoing analysis, we downloaded the file manually from kaggle and then imported it to the pandas data frame as shown. 
\

```python
import pandas as pd
df = pd.read_csv('./dataset/sales_data.csv')
print(f"Loaded {len(df)} records")
```

#pagebreak()

= Step 2: Data exploration and transformation

== Data loading and preprocessing

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

df = pd.read_csv('./dataset/sales_data.csv')
df['Sale_Date'] = pd.to_datetime(df['Sale_Date'])
print(f"Dataset: {df.shape[0]} rows x {df.shape[1]} columns")
```

After loading: 1000 rows, 14 columns. No missing values, no duplicates.

== Feature engineering

We created new columns to make the analysis easier:

```python
# Profitability metrics
df['Profit_Per_Unit'] = df['Unit_Price'] - df['Unit_Cost']
df['Profit_Margin_Pct'] = (df['Profit_Per_Unit'] / df['Unit_Price']) * 100
df['Total_Profit'] = df['Profit_Per_Unit'] * df['Quantity_Sold']

# Temporal features
df['Month'] = df['Sale_Date'].dt.month
df['Quarter'] = df['Sale_Date'].dt.quarter

# Discount segmentation
df['Discount_Category'] = pd.cut(df['Discount'], bins=[0, 0.1, 0.2, 0.3],
    labels=['Low (0-10%)', 'Medium (10-20%)', 'High (20-30%)'],
    include_lowest=True)
```

== Statistical overview

#table(
  columns: (1fr, 1fr, 1fr, 1fr, 1fr),
  inset: 8pt,
  stroke: 0.5pt,
  [*Feature*], [*Mean*], [*Std*], [*Min*], [*Max*],
  [Sales_Amount], [\$5,019], [\$2,847], [\$100], [\$9,989],
  [Quantity_Sold], [25.4], [14.2], [1], [49],
  [Unit_Price], [\$2,728], [\$1,419], [\$167], [\$5,442],
  [Discount], [15.2%], [8.7%], [0%], [30%],
)

Sales amounts are spread pretty evenly from \$100 to \$9,989. The mean and median are almost identical (~\$5,019), so there's no skew. This is a uniform distribution, not the typical long-tail you'd expect from real sales data.

#figure(
  image("charts/01_sales_distribution.png", width: 100%),
  caption: [Sales amount distribution showing uniform spread with histogram and box plot],
)

#pagebreak()

== Exploratory analysis

=== Regional performance

```python
region_sales = df.groupby('Region')['Sales_Amount'].sum()
region_sales = region_sales.sort_values(ascending=False)
region_sales.plot(kind='bar', color=sns.color_palette('husl', 4))
```

#table(
  columns: (1fr, 1fr, 1fr),
  inset: 8pt,
  stroke: 0.5pt,
  [*Region*], [*Total Sales*], [*Share*],
  [North], [\$1,369,613], [27.3%],
  [East], [\$1,259,793], [25.1%],
  [West], [\$1,235,609], [24.6%],
  [South], [\$1,154,251], [23.0%],
)

North leads, South trails. The gap is about 4 percentage points. Could be the sales team, could be the market size, could be random variation in a synthetic dataset. Worth investigating in a real scenario.

=== Product category analysis

```python
category_profit = df.groupby('Product_Category').agg({
    'Sales_Amount': 'sum', 'Profit_Margin_Pct': 'mean'}).round(2)
```

#table(
  columns: (1fr, 1fr, 1fr),
  inset: 8pt,
  stroke: 0.5pt,
  [*Category*], [*Total Sales*], [*Avg Margin*],
  [Clothing], [\$1,313,474], [9.1%],
  [Electronics], [\$1,243,500], [8.8%],
  [Furniture], [\$1,260,518], [8.9%],
  [Food], [\$1,201,774], [9.3%],
)

Categories are almost equal in revenue (23-26% each). Food has the best margin at 9.3% but the lowest sales volume. If margins are accurate, there might be room to push Food sales harder.

#figure(
  image("charts/02_profit_by_category.png", width: 100%),
  caption: [Profit analysis across product categories],
)

#pagebreak()

=== Sales channel comparison

```python
channel_analysis = df.groupby('Sales_Channel').agg({
    'Sales_Amount': ['sum', 'mean', 'count']})
```

#table(
  columns: (1fr, 1fr, 1fr, 1fr),
  inset: 8pt,
  stroke: 0.5pt,
  [*Channel*], [*Total Sales*], [*Avg Transaction*], [*Count*],
  [Online], [\$2,545,891], [\$4,992], [510],
  [Retail], [\$2,473,374], [\$5,048], [490],
)

Almost a 50/50 split. Retail transactions average \$56 more than online ones. The difference is small, but it's there. In-person upselling might explain it, or it could just be noise.

#figure(
  image("charts/03_sales_channel_comparison.png", width: 100%),
  caption: [Online vs Retail channel comparison],
)

=== Monthly sales trends

```python
monthly_sales = df.groupby('Month')['Sales_Amount'].sum()
monthly_sales.plot(kind='line', marker='o', figsize=(12, 5))
plt.title('Monthly Sales Trend - 2023')
```

#figure(
  image("charts/04_monthly_trends.png", width: 100%),
  caption: [Monthly sales trends throughout 2023],
)

Sales stay relatively flat throughout the year. No obvious seasonal pattern, which is unusual for retail data. Another hint this might be synthetic.

#pagebreak()

=== Top performers by region and sales rep

```python
top_combos = df.groupby(['Region', 'Sales_Rep'])['Sales_Amount'].sum()
top_combos = top_combos.sort_values(ascending=False).head(10)
```

#figure(
  image("charts/05_top_performers.png", width: 100%),
  caption: [Top performing region and sales rep combinations],
)

David in the North region pulls in the most revenue. The combination of rep and region matters more than either factor alone.

=== Sales heatmap by region and category

#figure(
  image("charts/06_sales_heatmap.png", width: 90%),
  caption: [Heatmap showing sales distribution across regions and categories],
)

#pagebreak()

=== Customer retention impact

```python
customer_analysis = df.groupby('Customer_Type')['Sales_Amount'].agg(
    ['sum', 'mean', 'count'])
```

#table(
  columns: (1fr, 1fr, 1fr),
  inset: 8pt,
  stroke: 0.5pt,
  [*Customer Type*], [*Total Sales*], [*Avg Transaction*],
  [New], [\$2,506,258], [\$4,973],
  [Returning], [\$2,513,007], [\$5,067],
)

Returning customers spend about \$94 more per transaction on average (1.9% higher). Not a huge difference, but it adds up. If acquisition costs are high, retention programs might pay off.

#figure(
  image("charts/09_customer_analysis.png", width: 100%),
  caption: [New vs Returning customer comparison],
)

=== Discount correlation analysis

```python
correlation = df[['Sales_Amount', 'Quantity_Sold', 'Discount']].corr()
sns.heatmap(correlation, annot=True, cmap='coolwarm', center=0)
```

#figure(
  image("charts/07_correlation_heatmap.png", width: 80%),
  caption: [Correlation matrix for numerical features],
)

Here's the surprising part: discounts barely correlate with sales. The correlation between Discount and Sales_Amount is 0.02, and with Quantity_Sold it's 0.01. Either discounts aren't working, or they're being applied to products that would sell anyway.

#figure(
  image("charts/08_discount_analysis.png", width: 100%),
  caption: [Discount impact analysis across different metrics],
)

#pagebreak()

== Predictive modeling

We tried a linear regression to predict sales amount:

```python
# Feature encoding and selection
df_model = df.copy()
df_model['Region_Encoded'] = df_model['Region'].astype('category').cat.codes
df_model['Category_Encoded'] = df_model['Product_Category'].astype(
    'category').cat.codes

features = ['Quantity_Sold', 'Unit_Price', 'Discount', 'Month',
            'Region_Encoded', 'Category_Encoded']
X = df_model[features]
y = df_model['Sales_Amount']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

print(f"RMSE: ${np.sqrt(mean_squared_error(y_test, y_pred)):,.2f}")
print(f"R² Score: {r2_score(y_test, y_pred):.4f}")
```

Results: RMSE = \$2,867, R² = 0.001

The model is basically useless. An R² of 0.001 means the features explain almost none of the variance in sales. This isn't surprising given the uniform distribution of sales amounts. The data might be synthetic, or the real drivers of sales just aren't in these columns.

#figure(
  image("charts/11_prediction_results.png", width: 100%),
  caption: [Prediction results showing actual vs predicted values],
)

#pagebreak()

= Step 3: Generated insights

== What the data shows

#rect(fill: rgb("#e8f5e9"), width: 100%, inset: 12pt)[
  *Regional numbers:* North has 27.3% of sales (\$1.37M), South has 23%. That's a \$215K gap. If the South market has similar potential, there's money being left on the table.
]

#v(0.3cm)

#rect(fill: rgb("#e3f2fd"), width: 100%, inset: 12pt)[
  *Product mix:* All four categories bring in similar revenue. Food has the best margins (9.3%) but lowest volume. Clothing has the highest volume but middling margins.
]

#v(0.3cm)

#rect(fill: rgb("#fff3e0"), width: 100%, inset: 12pt)[
  *Channel split:* Online and retail are nearly equal. Retail averages \$56 more per transaction. Neither channel is clearly dominant.
]

#v(0.3cm)

#rect(fill: rgb("#fce4ec"), width: 100%, inset: 12pt)[
  *Customer types:* Returning customers spend 1.9% more per transaction. Small difference, but consistent.
]

#v(0.3cm)

#rect(fill: rgb("#f3e5f5"), width: 100%, inset: 12pt)[
  *Discounts:* The correlation between discounts and sales is essentially zero (r=0.02). Either discounts don't drive purchases, or they're not being tracked properly.
]

== What the model tells us

The linear regression failed. R² of 0.001 means we can't predict sales from the available features. This could mean:
- The data is synthetic and sales amounts are randomly assigned
- The real predictors (marketing spend, seasonality, promotions) aren't in the dataset
- Sales in this business are genuinely random

For real-world use, we'd need more features or a different modeling approach.

== What to do about it

*Soon (next quarter):* Look into why South region is underperforming. Review whether the discount program is actually driving sales or just cutting margins.

*Later (next 6 months):* Build a customer loyalty program since returning customers do spend more. See if Food category margins can be leveraged with targeted promotions.

*Eventually:* If predictive modeling is a priority, collect more data on what actually drives purchases.

#pagebreak()

= Step 4: Deployment strategy

== Architecture (keeping it simple)

For a project like this:
- Store data in CSV files or a basic database like SQLite
- Use Python scripts with pandas for processing
- Build dashboards with Jupyter or Streamlit
- Schedule reports with cron

No need for distributed computing or cloud infrastructure at this scale.

== Dashboard implementation

A basic Streamlit dashboard:

```python
# dashboard.py
import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

st.title("Sales Analytics Dashboard")

# Load data
df = pd.read_csv('./dataset/sales_data.csv')

# Sidebar filters
region = st.sidebar.multiselect("Select Region", df['Region'].unique())
if region:
    df = df[df['Region'].isin(region)]

# Display metrics
col1, col2, col3 = st.columns(3)
col1.metric("Total Sales", f"${df['Sales_Amount'].sum():,.0f}")
col2.metric("Transactions", len(df))
col3.metric("Avg Transaction", f"${df['Sales_Amount'].mean():,.0f}")

# Chart
fig, ax = plt.subplots()
df.groupby('Region')['Sales_Amount'].sum().plot(kind='bar', ax=ax)
st.pyplot(fig)
```

Run it with: `streamlit run dashboard.py`

== Report automation

A script that generates weekly summaries:

```python
# generate_report.py
import pandas as pd
from datetime import datetime

def generate_weekly_report():
    df = pd.read_csv('./dataset/sales_data.csv')

    summary = {
        'Total Sales': df['Sales_Amount'].sum(),
        'Total Transactions': len(df),
        'Top Region': df.groupby('Region')['Sales_Amount'].sum().idxmax(),
        'Generated': datetime.now().strftime('%Y-%m-%d %H:%M')
    }

    print("Weekly Sales Summary")
    for key, value in summary.items():
        print(f"  {key}: {value}")

if __name__ == "__main__":
    generate_weekly_report()
```

Schedule with cron: `0 9 * * 1 python generate_report.py` (runs every Monday at 9 AM)

#pagebreak()

= Conclusion

This report covered the four steps: data sourcing, exploration, insights, and deployment planning.

The main findings:
- North region outsells South by about \$215K
- Discounts don't correlate with sales (r=0.02)
- Returning customers spend 1.9% more per transaction
- The predictive model didn't work (R² = 0.001)

The last point is worth noting. Either this dataset is synthetic, or the columns we have don't capture what actually drives sales. For a real business, that would be the next thing to investigate.

= Appendix

== A. Data source

Kaggle Dataset: https://www.kaggle.com/datasets/vinothkannaece/sales-dataset/data

== B. Code repository

`sales-data-eda.ipynb` contains the full analysis with all visualizations.

== C. Technologies used

#table(
  columns: (1fr, 1fr),
  inset: 8pt,
  stroke: 0.5pt,
  [*Category*], [*Tools*],
  [Programming Language], [Python 3.x],
  [Data Analysis], [pandas, numpy],
  [Visualization], [matplotlib, seaborn],
  [Machine Learning], [scikit-learn],
)
