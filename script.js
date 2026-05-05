const statusEl = document.getElementById("status");
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        statusEl.style.display = "none";
        const categoryData = buildCategoryData(products);
        const distributionData = buildDistributionData(products);

        renderCategoryChart(categoryData);
        renderDistributionChart(distributionData);
    })
    .catch(error => {
        console.log(error);
        statusEl.textContent = "Could not load product data. Please try again.";
    });


function buildCategoryData(products) {
    const totals = {}; // { category: { sum, count } }

    products.forEach(product => {
        const category = product.category;
        const rating = product.rating.rate;

        if (!totals[category]) {
            totals[category] = { sum: 0, count: 0 };
        }
        totals[category].sum += rating;
        totals[category].count += 1;
    });

    const result = [];
    for (const category in totals) {
        const average = totals[category].sum / totals[category].count;
        result.push({
            category: category,
            average: Number(average.toFixed(2))
        });
    }
    return result;
}

function buildDistributionData(products) {
    let below3 = 0;
    let between3And4 = 0;
    let between4And45 = 0;
    let above45 = 0;

    products.forEach(product => {
        const rating = product.rating.rate;

        if (rating < 3) {
            below3 += 1;
        } else if (rating < 4) {
            between3And4 += 1;
        } else if (rating < 4.5) {
            between4And45 += 1;
        } else {
            above45 += 1;
        }
    });

    return [
        { name: "Below 3", y: below3 },
        { name: "3 - 3.9", y: between3And4 },
        { name: "4 - 4.4", y: between4And45 },
        { name: "4.5 and up", y: above45 }
    ];
}

function renderCategoryChart(data) {
    Highcharts.chart("chart-category", {
        chart: { type: "column" },
        title: { text: "Average Product Rating by Category" },
        xAxis: {
            categories: data.map(d => d.category),
            title: { text: "Category" }
        },
        yAxis: {
            min: 0,
            max: 5,
            title: { text: "Average rating (0 - 5)" }
        },
        tooltip: {
            pointFormat: "Average rating: <b>{point.y}</b>"
        },
        series: [{
            name: "Average rating",
            data: data.map(d => d.average)
        }],
        accessibility: { enabled: true }
    });
}

function renderDistributionChart(data) {
    Highcharts.chart("chart-distribution", {
        chart: { type: "pie" },
        title: { text: "Distribution of Products by Rating Range" },
        tooltip: {
            pointFormat: "<b>{point.y}</b> products ({point.percentage:.1f}%)"
        },
        series: [{
            name: "Products",
            data: data
        }],
        accessibility: { enabled: true }
    });
}