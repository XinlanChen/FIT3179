var vg_1 = "map_vis1.json";
vegaEmbed('#map_vis1', vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var vg_2 = "barchart_v2.json";
vegaEmbed('#barchart_v2', vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);