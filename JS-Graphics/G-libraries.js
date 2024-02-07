{
    // there are some Graphics libraries that must included.

    /**
     * libraries that are used in all kind of graphics.
     * 
     * 1) Plotly.js
     * 2) Chart.js
     * 3) Google Chart
     */

    console.log('Plotly.js');
    console.log("it is a charting library that comes with over \n ");
    console.log("40 chart types \n");
    console.log("3D chart types \n");
    console.log("Statistical graph and\n");
    console.log("SVG maps\n");

    console.log('Charts.js');
    console.log("comes with many builtin chart types:");
    let dic = new Array(
        "Scatter",
        "Line",
        "Bar",
        "Radar",
        "Pie-and-Doughnut",
        "Polar-area",
        "Bubble");
    console.log("Chart.js chart types: \n");
    for (let i of dic) {
        console.log(i);
    }
    console.log("\n");

    console.log("Google Chart : \n");
    console.log("from simple line chart to complex tree maps, Google chart provides no of built in chart types: \n");

    let dic2 = ["Scatter Chart", "Line Chart", "Bar / Column Chart", "Area Chart", "Pie Chart", "Donut Chart", "Org Chart", "Map / Geo Chart"];
    for (const j of dic2) {
        console.log(j);
    }

}