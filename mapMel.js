const apiKey = "pk.eyJ1IjoiaXRhbGVvIiwiYSI6ImNrenZ5YWVxYjA0Y2sybnFxcDVxaG44MWYifQ.Xqi_MP_-IjGjsgktvUhzUw";

const map = L.map('map').setView([-17.794987635142814, 177.42072665921881], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);

//adding marker for melanesia

var marker = L.marker([-5.888894, 143.914610]).addTo(map);
var marker1 = L.marker([-16.312717, 167.572914]).addTo(map);
var marker2 = L.marker([-20.837149, 164.840711]).addTo(map);
var marker3 = L.marker([-17.927006, 177.485256]).addTo(map);
var marker4 = L.marker([-9.621477, 160.173187]).addTo(map);



marker.bindPopup();
marker1.bindPopup();
marker2.bindPopup();
marker3.bindPopup();
marker4.bindPopup("Melanesia").openPopup();






