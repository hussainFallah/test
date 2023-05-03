let mId=document.getElementById("mapid");
let sBar=document.getElementById("sideBar");
let mapPosition =mId.getBoundingClientRect();
sBar.style.paddingTop=`${mapPosition.top}px`;



map.displayMap();
function displayAllCars(){
    let cars=getAllCars();
    cars.then((cars)=>{cars.forEach(e => {
            if(e.active===false){
                return
            };
            map.addPoint([e.location[1],e.location[0]],e,carIcon(e));
        });
    });
    return cars;
};
let cars=displayAllCars();
    let zipCodeButton=document.getElementById("zipCodeButton");
    let zipCodeText=document.getElementById("zipCodeText");
    zipCodeText.onkeydown=((e)=>{if(e["which"]===13){zipCodeButton.click()}});
    zipCodeButton.onclick=(()=>{
        let distanceValue=document.getElementById("distance").value;
        let serchValue=parseInt(zipCodeText.value);
        
        if(zipCodeText.value===""){
            pannel.display("0px","0px","pleas Enter a zipCode");
            return}
        if(serchValue===-1){
            pannel.display("0px","0px","pleas Enter a valid zipCode");
            return;
        }
        zip.getLocationUsingZipCode(serchValue).then((a)=>{
        // zipcoder.serchZipcode(serchValue).then((a)=>{
        if(a===-1){
            pannel.display("0px","0px","please enter a valid zipCode")
            return
        }
        
        if (a.length===1) {
            a=a[0];
            console.log(a);
        }else{
            a.forEach((e=>{console.log(e)}))
            alert("there are multible cities")/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        }
        let newPosition=[+a["latitude"],+a["longitude"]];
        
        map.drowCircle(newPosition,distanceValue)
        let newzoom=10;//فرضاً
        let message=
        `city ${a.city}</br>
        county ${a.county}</br>
        latitude ${a.latitude}</br>
        longitude ${a.longitude}</br>
        state ${a.state}</br>
        zip_code ${a.zip_code}
        `
        
        map.AnimateChangeView(newPosition,newzoom);
        map.popup(newPosition,message)
        let activeCars=[];
        cars.then((cars)=>{
        
        let items=[];
        cars.forEach((car)=>{
            if(car["active"]===true){
            activeCars.push({latitude:car["location"][1],longitude:car["location"][0],Car:car})
            
        }});
        let activeCarsArrays=[];
        let chunkSize=49;
        for (let i = 0; i < activeCars.length; i +=chunkSize) {
            const chunk = activeCars.slice(i, i + chunkSize);
            activeCarsArrays.push(chunk);
        }
        
        let promiseArray=[];
        newPosition=newPosition.reverse()
        activeCarsArrays.forEach(e=>{
            promiseArray.push(
                getDistanceFromPath(e,newPosition)
                .then((e)=>{
                    return e;
                    // disstanceArray.concat(e)
                    // console.log(e)
                    // return disstanceArray;
                })
            );
            
        })
        Promise.all(promiseArray)
        .then((disstanceArray)=>{
            
            let result = disstanceArray.reduce((acc, val) => acc.concat(val), []);
                
                return result;
            }).then((e)=>{
                
                e=e.filter((e)=>e["distance"]<=distanceValue)
                return e;
            }).then((unsorttedData)=>{
                let sortedData=unsorttedData.sort((obj1, obj2) => obj2["distance"] - obj1["distance"]);
                return sortedData.reverse();
            }).then((items)=>{
                map.removeAllCars();
                items.forEach(e=>{
                    map.addPoint(
                        [e["car"]["location"][1],e["car"]["location"][0]],
                        e["car"],
                        carIcon(e["car"])
                    );
                })
                pannel.displayCarsSellector("0px","0px",items);////////////////
            });
        });
    });
});
let stopSerchingButton= document.getElementById("stopSerching");
stopSerchingButton.onclick=(()=>{
    map.removeAllCars();
    displayAllCars();
    
})