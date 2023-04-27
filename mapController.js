

let map={
startingPosition:[35.67,-97.41],
MaxZoom:18,
startingZoom:4,
map:"",

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
    },
addPoint:function(pointPosition,onClickFunction,pointIcon)
{
    let a=L.marker(pointPosition,pointIcon!==undefined? {icon: pointIcon}:null).addTo(this.map);
    a.on('click', onClickFunction )
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
}
};





