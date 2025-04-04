document.addEventListener("DOMContentLoaded", function(){
    var map = L.map('map').setView([5.5271, -73.5933], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker = L.marker([5.4540, -73.7409]).addTo(map);
    marker.bindPopup("<b>Laguna de</b><br>Fuquene").openPopup();

    var marker2 = L.marker([5.5425, -72.9358]).addTo(map);
    marker2.bindPopup("<b>Lago de</b><br>Tota").openPopup();

    var marker3 = L.marker([5.6297, -73.5687]).addTo(map);
    marker3.bindPopup("<b>Laguna de</b><br>Iguaque").openPopup();

    var marker3 = L.marker([5.8042, -74.2576]).addTo(map);
    marker3.bindPopup("<b>Cienaga de</b><br>Palagua").openPopup();
})