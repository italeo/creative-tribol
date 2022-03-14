const apiKey = "pk.eyJ1IjoiaXRhbGVvIiwiYSI6ImNrenZ5YWVxYjA0Y2sybnFxcDVxaG44MWYifQ.Xqi_MP_-IjGjsgktvUhzUw";

const map = L.map('map').setView([-13.227486, -154.317496], 3);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(map);

//adding marker for melanesia


const marker1 = L.marker([-16.300010, -150.584142]).addTo(map);
const marker2 = L.marker([-40.582409, 173.581869]).addTo(map);
const marker3 = L.marker([-14.048881, -172.609182]).addTo(map);
const marker4 = L.marker([-35.341431, 174.886833]).addTo(map);
const marker5 = L.marker([-21.481757, -160.349069]).addTo(map);
const marker6 = L.marker([-14.344437, -177.028640]).addTo(map);


Melanesia = `<h7>Polynesia</h7>`


marker1.bindPopup(Melanesia);
marker2.bindPopup(Melanesia);
marker3.bindPopup(Melanesia);
marker4.bindPopup(Melanesia);
marker5.bindPopup(Melanesia);
marker6.bindPopup("Polynesia").openPopup();






