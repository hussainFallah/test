let mouseposition=[];
let MaxZoom=18;
let zoom=4;
function displayPannel(innertext){
    const panel = document.getElementById('panel');
    
    panel.style.left = mouseposition[0] + 'px';
    panel.style.top =  mouseposition[1] + 'px'; 
    panel.classList.remove('hidden');
    panel.innerText=innertext;
}


let map = L.map('mapid').setView([35.67,-97.41],zoom);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
maxZoom: MaxZoom,
}).addTo(map);

let sizeOfIcon=[15,15];
let greenIcon = L.icon({
    iconUrl: 'green.png',
    iconSize: sizeOfIcon,
    iconAnchor: [7.5,7.5],
    popupAnchor: [-3, -76],
    
});

let redIcon = L.icon({
    iconUrl: 'red.png',
    iconSize: sizeOfIcon,
    iconAnchor: [7.5,7.5],
    popupAnchor: [-3, -76],
    
});

let yellowIcon = L.icon({
    iconUrl: 'yellow.png',
    iconSize: sizeOfIcon,
    iconAnchor: [7.5,7.5],
    popupAnchor: [-3, -76],
    
});
let blueIcon = L.icon({
    iconUrl: 'blue.png',
    iconSize: sizeOfIcon,
    iconAnchor: [7.5,7.5],
    popupAnchor: [-3, -76],
    
});

// parsing zipcode









document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    const panel = document.getElementById('panel');
    mouseposition=[x,y];

if (!panel.classList.contains("hidden") &&
    Math.sqrt(((x-parseInt(panel.style.left))**2
    +(y-parseInt(panel.style.top))**2))
    >=Math.sqrt(window.innerWidth**2+window.innerHeight**2)/5){
    panel.classList.add("hidden");
    
}});








