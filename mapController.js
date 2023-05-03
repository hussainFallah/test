

let map={
    startingPosition:[35.67,-97.41],
    MaxZoom:18,
    startingZoom:4,
    map:undefined,
    pointLayers:[],
    circle:undefined,
    
displayMap:function(
    startingPosition=this.startingPosition
    ,startingZoom=this.startingZoom
    ,MaxZoom=this.MaxZoom)
    {
        let Mymap = L.map("mapid").setView(startingPosition, startingZoom);
        this.map=Mymap;
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", 
        {
            attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: MaxZoom,
        }).addTo(Mymap);
        console.log() ;
    },removeAllCars:function(){
        this.pointLayers.forEach((e)=>{
            this.map.removeLayer(e.layer);
        })
        this.pointLayers=[];
    },
    removeCar:function(Car){
        if(this.map===undefined){
            
            return "there is no map";
        }
        let layerToRemove;
        let pointToRemove;
        this.pointLayers.forEach((e,i,array)=>{
            
            if(JSON.stringify(e["car"]) === JSON.stringify(Car)){
            
            layerToRemove=e["layer"];
            pointToRemove=e;
            
            return"Find the car";
        }
        if(i===array.length-1&&layerToRemove===undefined){
            
            return`there is no such car as ${JSON.stringify(Car)}`
            
        }
    })

    if (layerToRemove===undefined){
        return"didn't defined";
    }
        this.map.removeLayer(layerToRemove);
        this.pointLayers=this.pointLayers.filter((e)=>e!==pointToRemove)
        return "removed";
    },
addPoint:function(pointPosition,Car,pointIcon)
{
    let a=L.marker(pointPosition,pointIcon!==undefined? {icon: pointIcon}:null).addTo(this.map);
    a.on('click',(()=>{ carsOnClick(Car)}) )
    this.pointLayers.push({car:Car,layer:a});
    
},
//inclouded way to display masseges but to make new line use <br />
popup :function(position=this.startingPosition,message="text is't deffined<br />text is't deffined<br />text is't deffined<br />text is't deffined<br />"){
    L.popup()
    .setLatLng(position)
    .setContent(message)
    .openOn(this.map);
},
AnimateChangeView:function(position=this.startingPosition,zoom){
    this.map.flyTo(position,zoom);
    return true;
},
drowCircle:function(position=this.startingPosition,radiasInMiles=100){
    if(this.circle!==undefined){
        this.map.removeLayer(this.circle);
    };
    this.circle=L.circle(position,{radius:radiasInMiles*1609.344}).addTo(this.map);
},
};





