map.displayMap();
let cars=getAllCars();



cars.then((cars)=>{cars.forEach(e => {
    map.addPoint([e.location[1],e.location[0]]
    ,()=>{carsOnClick(e)}
        ,e.status=== "GREEN_CARD"?greenIcon
        :e.status==="NO_BORDER"?redIcon
        :e.status==="US_CITIZEN"?blueIcon
        :yellowIcon)});
    
    });
    let zipCodeButton=document.getElementById("zipCodeButton");
    let zipCodeText=document.getElementById("zipCodeText");
    zipCodeText.onkeydown=((e)=>{if(e["which"]===13){zipCodeButton.click()}});
    zipCodeButton.onclick=(()=>{
        let serchValue=parseInt(zipCodeText.value);
        if(zipCodeText.value===""){
            pannel.display("0px","0px","pleas a zipCode");
            return}
        if(serchValue===-1){
            pannel.display("0px","0px","pleas Enter a valid zipCode");
            return;
        }
        zipcoder.serchZipcode(serchValue).then((a)=>{
        if(a===-1){
            pannel.display("0px","0px","please enter a valid zipCode")
            return
        }
        let newPosition=[a["latitude"],a["longitude"]];
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
        cars.then((cars)=>{
            let items=[];
            cars.forEach((car)=>{
                if(car["zipCode"]===serchValue){
                items.push(car);
            }});
            
            pannel.displayCarsSellector("0px","0px",items);
        })
    })
    }
    );