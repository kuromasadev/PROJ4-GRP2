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


var distributors = `
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.568779,
          29.664062
        ]
      },
      "properties": {
        "Distributor Name": "Banyan Foods",
        "Supplier Specialty": "food packaging",
        "Category":"Soybean"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.354057,
          29.74809
        ]
      },
      "properties": {
        "Distributor Name": "Houston Calco",
        "Supplier Specialty": "food manufacturing",
        "Category":"Soybean"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.571122,
          29.704095
        ]
      },
      "properties": {
        "Distributor Name": "Tan Tan Tofu",
        "Supplier Specialty": "food manufacturing",
        "Category":"Soybean"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.623345,
          29.695825
        ]
      },
      "properties": {
        "Distributor Name": "Thanh Son Tofu",
        "Supplier Specialty": "food manufacturing",
        "Category":"Soybean"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.576026,
          29.704697
        ]
      },
      "properties": {
        "Distributor Name": "Viet Tien Tofu & Fast Food",
        "Supplier Specialty": "food manufacturing",
        "Category":"Soybean"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.61258,
          29.694397
        ]
      },
      "properties": {
        "Distributor Name": "Lien Hoa B. Inc",
        "Supplier Specialty": "food packaging",
        "Category":"Soybean"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.402263,
          29.669131
        ]
      },
      "properties": {
        "Distributor Name": "Four Season Food Inc",
        "Supplier Specialty": "food packaging",
        "Category":"Both"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -100.954096,
          35.54396
        ]
      },
      "properties": {
        "Distributor Name": "Agisco Commodities Inc",
        "Supplier Specialty": "food packaging",
        "Category":"Both"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.716791,
          29.791793
        ]
      },
      "properties": {
        "Distributor Name": "Fastlane Trade And Supplies Inc.",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.370788,
          29.954242
        ]
      },
      "properties": {
        "Distributor Name": "Action Meat Distributors Inc",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.391029,
          29.829373
        ]
      },
      "properties": {
        "Distributor Name": "Amigos Food",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.473389,
          29.819302
        ]
      },
      "properties": {
        "Distributor Name": "Texas Choice Distributing",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.278088,
          29.69507
        ]
      },
      "properties": {
        "Distributor Name": "Tejas Meat Distributor",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.248137,
          29.66748
        ]
      },
      "properties": {
        "Distributor Name": "Big Brother Meat Distributors",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.553164,
          29.846207
        ]
      },
      "properties": {
        "Distributor Name": "Tran Meat Corporation",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.185027,
          29.702002
        ]
      },
      "properties": {
        "Distributor Name": "Houston Meat Distributors",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.295951,
          29.742809
        ]
      },
      "properties": {
        "Distributor Name": "Meat Planet Inc",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.37624,
          29.845699
        ]
      },
      "properties": {
        "Distributor Name": "Montana Meat LLC",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.336826,
          29.752117
        ]
      },
      "properties": {
        "Distributor Name": "City Meat Steak Co Inc",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.330966,
          29.709392
        ]
      },
      "properties": {
        "Distributor Name": "Houston Meat Processors",
        "Supplier Specialty": "food manufacturing",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.29222,
          29.737171
        ]
      },
      "properties": {
        "Distributor Name": "Latino's Meat Co",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.376443,
          29.767862
        ]
      },
      "properties": {
        "Distributor Name": "B&B Butchers & Restaurant",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.376344,
          29.767979
        ]
      },
      "properties": {
        "Distributor Name": "The Butcher Shop",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.410882,
          29.835756
        ]
      },
      "properties": {
        "Distributor Name": "B & W Meat Company",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.474335,
          29.731437
        ]
      },
      "properties": {
        "Distributor Name": "Pete's Fine Meats & Deli",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.353198,
          29.690664
        ]
      },
      "properties": {
        "Distributor Name": "Bud's House of Meat",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.355795,
          29.668149
        ]
      },
      "properties": {
        "Distributor Name": "Farmer's Fresh Meat",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.177963,
          29.771311
        ]
      },
      "properties": {
        "Distributor Name": "Stark Brothers Beef Shop",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.456336,
          29.732794
        ]
      },
      "properties": {
        "Distributor Name": "Hebert's Specialty Meats",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.381911,
          29.809049
        ]
      },
      "properties": {
        "Distributor Name": "El Rey Meat Market",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.380406,
          29.810594
        ]
      },
      "properties": {
        "Distributor Name": "R-C Ranch",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.47625,
          29.710875
        ]
      },
      "properties": {
        "Distributor Name": "Matamoros Meat Co Inc",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.362387,
          29.843181
        ]
      },
      "properties": {
        "Distributor Name": "Sisters Meats",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -95.435294,
          29.817326
        ]
      },
      "properties": {
        "Distributor Name": "R K Meat Market & Taqueria",
        "Supplier Specialty": "food packaging",
        "Category":"Beef"
      }
    }
  ]
}
`;

var geojsonLayer = L.geoJSON(JSON.parse(distributors), {
  pointToLayer: function(feature, latlng) {
    var category = feature.properties['Category'];
    var iconOptions = {
      iconUrl: getIconUrl(category),
      iconSize: [30, 30]
    };
    return L.marker(latlng, { icon: L.icon(iconOptions) });
  },
  onEachFeature: function(feature, layer) {
    var popupContent = `
      <strong>Distributor Name:</strong> ${feature.properties['Distributor Name']}<br>
      <strong>Supplier Specialty:</strong> ${feature.properties['Supplier Specialty']}<br>
      <strong>Category:</strong> ${feature.properties['Category']}
    `;
    layer.bindPopup(popupContent);
  }
});
var markerCluster = L.markerClusterGroup();
markerCluster.addLayer(geojsonLayer);
map.addLayer(markerCluster);

function getIconUrl(category) {
  if (category === 'Beef') {
    return '../img/beef.png'; 
  } else if (category === 'Soybean') {
    return '../img/soybean.png'; 
  } else if (category === 'Both') {
    return '../img/food.png'
  }
  // Default icon URL
  return '../img/food.png'; 
}



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

