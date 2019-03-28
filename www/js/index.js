console.log("hello my leaflet test");

var mymap = L.map('mapid').setView([43.6463558, 0.5850507], 9);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia2FjcmVhdGlvbiIsImEiOiJjanN0Zm5tYmgxd3N0NDlvNHd5b2JzY3dnIn0.PWhJG8uoe3_okpyIBmvzVA'
}).addTo(mymap);

// customize icon

var gastro = L.icon({
    iconUrl: 'www/img/alimentation.png',
    iconSize: [50, 50], // size of the icon

    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location

    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var markerGastro = L.marker([43.6490449,
    0.5885573000000477], { icon: gastro }).addTo(mymap);

markerGastro.bindPopup("<b>LA MIE CALINE</b><br>I am a popup.").openPopup();

