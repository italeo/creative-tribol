const apiKey = "pk.eyJ1IjoiaXRhbGVvIiwiYSI6ImNrenZ5YWVxYjA0Y2sybnFxcDVxaG44MWYifQ.Xqi_MP_-IjGjsgktvUhzUw";

const map = L.map('map').setView([-5.350308, -145.877119], 3);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);

//adding marker for melanesia

const marker = L.marker([7.026474, 159.118004]).addTo(map);
const marker1 = L.marker([14.156916, 145.483408]).addTo(map);
const marker2 = L.marker([6.607301, 169.924672]).addTo(map);
const marker3 = L.marker([-0.524375, 166.907515]).addTo(map);
const marker4 = L.marker([2.173200, -159.390680]).addTo(map);




marker.bindPopup(Micronesia);
marker1.bindPopup(Micronesia);
marker2.bindPopup(Micronesia);
marker3.bindPopup(Micronesia);
marker4.bindPopup("Micronesia").openPopup();






