let config = {
  minZoom: 4,
  maxZoom: 18,
  maxBounds: [
    [24.396308, -125.000000], // Southwest coordinates
    [49.384358, -66.934570] // Northeast coordinates
  ]
}
// magnification with which the map will start
const zoom = 10;
// coordinates
const lat = 29.749907;
const lng = -95.358421;

// calling map
const map = L.map("map", config).setView([lat, lng], zoom);


// Fetch and parse CSV data using PapaParse
fetch('../../assets/geojson/1_dist.csv')
  .then(response => response.text())
  .then(csvText => {
    Papa.parse(csvText, {
      header: true,
      complete: function(results) {
        results.data.forEach(row => {
          const lat = parseFloat(row.Latitude); 
          const lng = parseFloat(row.Longitude);

          if (!isNaN(lat) && !isNaN(lng)) {
            const marker = L.marker([lat, lng]).addTo(map);
          }
        });
      }
    });
  })
  .catch(error => {
    console.error('Error fetching or processing CSV:', error);
  });




const service1_Url = 'https://services.arcgis.com/ue9rwulIoeLEI9bj/arcgis/rest/services/US_StateBoundaries/FeatureServer/0';

// Adding the US boundary 
let serviceLayer1 = L.esri.featureLayer({
  url: service1_Url,
  style: function(feature) {
    return {
      color: '#000', 
      weight: 1,  
      opacity: 1,  
      fill: false, 
    }
}
}).addTo(map);

const service2_Url = 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/usa_cbsa/FeatureServer/0';

// Adding the US Metro Areas
let serviceLayer2 = L.esri.featureLayer({
  url: service2_Url,
  style: function(feature) {
    const cbsaType = feature.properties.CBSA_TYPE;
    if (cbsaType === 'Metropolitan') {
      return {
        color: '#ff0000',   // Red color for Metropolitan features
        weight: 2,
        opacity: 0.35,
        fill: true
      };
    } else if (cbsaType === 'Micropolitan') {
      return {
        color: '#2A7221',   // Green color for Micropolitan features
        weight: 0.5,
        opacity: 1,
        fill: true
      };
    } else {
      return {
        color: '#000',      // Default color for other features
        weight: 1,
        opacity: 1,
        fill: false
      };
    }
  }
}).addTo(map);


// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
}).addTo(map);

