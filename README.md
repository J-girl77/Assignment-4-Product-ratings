# Assignment-4-Product-ratings
A small dashboard that fetches products from the Fake Store API and visualizes their ratings with two accessible Highcharts charts.
Product Ratings Dashboard
A small dashboard that fetches products from the Fake Store API and visualizes their ratings with two accessible Highcharts charts.
About
This project is built for a shcool project. It demonstrates how to fetch data from an external API, transform it for charting, and present the same dataset in two different ways while keeping the page accessible.

Features
Fetches live product data from the Fake Store API.
Shows a column chart with the average rating per category.
Shows a pie chart with the distribution of products across rating ranges (below 3, 3–3.9, 4–4.4, 4.5 and up).
Uses semantic HTML (header, main, section, footer) with a dedicated section and heading per chart.
Loads the Highcharts accessibility module and enables accessibility on both charts.
Handles loading and error states before rendering.

Tech
HTML, CSS, JavaScript (no framework)
Highcharts + Highcharts Accessibility module
Fake Store API

File structure
.
├── index.html        // Page structure and script tags
├── style.css         // Minimal styling
├── script.js         // Fetches data and renders the charts
└── README.md

Run locally

Learning objectives covered

Fetch and transform data from an external API.
Display data using at least two different Highcharts chart types.
Apply basic accessibility for both the page and the charts.

Data source
Product data is provided by the free Fake Store API. No authentication is required.
