let config = {
  minZoom: 4,
  maxZoom: 18,
  maxBounds: [
    [24.396308, -125.000000], // Southwest coordinates
    [49.384358, -66.934570] // Northeast coordinates
  ]
}
// magnification with which the map will start
const zoom = 6;
// coordinates
const lat = 29.749907;
const lng = -95.358421;

// calling map
const map = L.map("map", config).setView([lat, lng], zoom);


fetch('../geojson/01_biz_bldgs.geojson')
  .then(response => response.json())
  .then(data => {
    // Create the marker cluster group
    let markers = L.markerClusterGroup();

    // Add markers to the layer
    data.features.forEach(feature => {
      if (feature.geometry && feature.geometry.coordinates) {
        const [lng, lat] = feature.geometry.coordinates;

        // Create individual markers
        let marker = L.marker([lat, lng]);

        // Add markers to the marker cluster group
        markers.addLayer(marker);
      }
    });

    // Add the marker cluster group to the map
    map.addLayer(markers);
  })
  .catch(error => {
    console.error('Error fetching or processing GeoJSON:', error);
});


// Adding the US boundary 
let serviceLayer = L.esri.featureLayer({
  url: 'https://gisportal.ers.usda.gov/server/rest/services/Atlas_Reference_Data/Reference_Labels/MapServer/1',
  style: function(feature) {
    return {
      color: '#000', 
      weight: 1,  
      opacity: 1,  
      fill: false, 
    }
}
}).addTo(map);


// Adding the US METRO areas only when zoomed in at 6
let geojsonLayer; 

map.on('zoomend', function() {
    var zoomlevel = map.getZoom();

    // Load the data if the zoom level is 6 or greater
    if (zoomlevel >= 6) {
        if (!geojsonLayer) {  // load the data only if it hasn't been loaded yet
            fetch('./flaskapp/data/new_metrodata.geojson')
            .then(response => response.json())
            .then(data => {
              console.log(data)
                // Define the style for the layer
                let layerStyle = feature => ({
                    stroke: false,
                    fillColor: feature.properties.Metro2013 == 1 ? '#f00' : '#0f0',
                    fillOpacity: 0.5
                });

                geojsonLayer = L.geoJSON(data, { style: layerStyle });  
                geojsonLayer.addTo(map);
            })
            .catch(error => console.error('Fetch Error:', error));
        }
    }
    // Remove the data if the zoom level is less than 6
    else {
        if (geojsonLayer) {  // check if the layer exists
            map.removeLayer(geojsonLayer);  
            geojsonLayer = null;  
        }
    }
});


// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

