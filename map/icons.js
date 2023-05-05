let sizeOfIcon=[10,10];
let anchorPoint=sizeOfIcon.map((e)=>e/2);//cinter of icon

let greenIcon = L.icon({
    iconUrl: 'map/green.png',
    iconSize: sizeOfIcon,
    iconAnchor: anchorPoint,
    popupAnchor: [-3, -76],
    
});

let redIcon = L.icon({
    iconUrl: 'map/red.png',
    iconSize: sizeOfIcon,
    iconAnchor: anchorPoint,
    popupAnchor: [-3, -76],
    
});

let yellowIcon = L.icon({
    iconUrl: 'map/yellow.png',
    iconSize: sizeOfIcon,
    iconAnchor: anchorPoint,
    popupAnchor: [-3, -76],
    
});
let blueIcon = L.icon({
    iconUrl: 'map/blue.png',
    iconSize: sizeOfIcon,
    iconAnchor: anchorPoint,
    popupAnchor: [-3, -76],
    
});
function carIcon(car){
    let icon=car.typeCar==="sprinter"?blueIcon:car.typeCar==="large"?yellowIcon:greenIcon//didn't add red;
    return icon;
}