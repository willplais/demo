let newYorkCoords = [40.73, -74.0059];
let mapZoomLevel = 12;

let myMap = L.map("map-id", {
  center: newYorkCoords,
  zoom: mapZoomLevel
});

// Create the createMap function.
function createMap(bikeStations) {

  // Create the tile layer that will be the background of our map.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  bikeStations.forEach(station => {
    L.marker([station.lat, station.lon])
    .bindPopup(`<h1>${station.name}</h1><hr><h3>Capacity: ${station.capacity.toLocaleString()}</h3>`)
    .addTo(myMap);
  });

  // Create a baseMaps object to hold the lightmap layer.


  // Create an overlayMaps object to hold the bikeStations layer.


  // Create the map object with options.


  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
}

// Create the createMarkers function.

  // Pull the "stations" property from response.data.

  // Initialize an array to hold the bike markers.

  // Loop through the stations array.
    // For each station, create a marker, and bind a popup with the station's name.

    // Add the marker to the bikeMarkers array.

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
let link = "https://gbfs.citibikenyc.com/gbfs/en/station_information.json";

d3.json(link).then(function(response) {
  console.log(response);

  let stations = response.data.stations;
  let statusLink = "https://gbfs.citibikenyc.com/gbfs/en/station_status.json";

  d3.json(statusLink).then(function(response) {
    console.log(response);
    let stationStatus = response.data.stations;

    let merged = Object.assign({}, stations, stationStatus);

    console.log(merged);

    createMap(stations);
  });
});