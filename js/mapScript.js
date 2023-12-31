
let map = L.map('apMap').setView([51.23009, 4.41616], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let coffeeIcon = L.icon({
    iconUrl: 'images/coffee-icon.png',
    shadowUrl: 'images/coffee-icon-shadow.png',

    iconSize:     [60, 60], // size of the icon
    shadowSize:   [60, 60], // size of the shadow
    iconAnchor:   [0, 60], // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 60],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

L.marker([51.23009, 4.41616], {icon: coffeeIcon}).addTo(map);