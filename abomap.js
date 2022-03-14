const apiKey = "pk.eyJ1IjoiaXRhbGVvIiwiYSI6ImNrenZ5YWVxYjA0Y2sybnFxcDVxaG44MWYifQ.Xqi_MP_-IjGjsgktvUhzUw";

const map = L.map('map').setView([-22.738795, 135.148778], 4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);

//adding marker for melanesia

const marker = L.marker([-16.853529, 130.811807]).addTo(map);
const marker1 = L.marker([-33.949201, 147.286792]).addTo(map);
const marker2 = L.marker([-18.734016, 126.187250]).addTo(map);
const marker3 = L.marker([-18.322938, 143.625684]).addTo(map);
const marker4 = L.marker([-30.982818, 129.414806]).addTo(map);

Melanesia = `<h7>Australia</h7>`

marker.bindPopup(Melanesia);
marker1.bindPopup(Melanesia);
marker2.bindPopup(Melanesia);
marker3.bindPopup(Melanesia);
marker4.bindPopup("Aboriginals").openPopup();






