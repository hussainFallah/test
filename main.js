let mId=document.getElementById("mapid");
let sBar=document.getElementById("sideBar");
let mapPosition =mId.getBoundingClientRect();
sBar.style.paddingTop=`${mapPosition.top}px`;



map.displayMap();
let cars=getAllCars();



cars.then((cars)=>{cars.forEach(e => {if(e.active===false){return};
// for calculating size
// let counter=0;
//         let re=[];
//         e.dimension.split("").forEach((ele)=>{
//             if (counter>=3) {
//                     return;
//                 }
//             if (isNaN(ele)) {
//                 counter++
                
//                 re.push("*")
//             }else{
//                 re.push(ele)
//             }

//         })
//         re=re.join("")
        
//         re=re.split("*").reduce((acc,element)=>acc=acc*(element===""?1:element))
        

    map.addPoint([e.location[1],e.location[0]]
    ,()=>{carsOnClick(e)}
        ,e.typeCar==="sprinter"?blueIcon:e.typeCar==="large"?yellowIcon:greenIcon//didn't add red
        );
        
    

    });
        
        // :e.status==="NO_BORDER"?redIcon
        // :e.status=== "GREEN_CARD"?greenIcon
        // :yellowIcon)});
    
    });
    let zipCodeButton=document.getElementById("zipCodeButton");
    let zipCodeText=document.getElementById("zipCodeText");
    zipCodeText.onkeydown=((e)=>{if(e["which"]===13){zipCodeButton.click()}});
    zipCodeButton.onclick=(()=>{
        let serchValue=parseInt(zipCodeText.value);
        
        if(zipCodeText.value===""){
            pannel.display("0px","0px","pleas Enter a zipCode");
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
            let disstanceArray=[];
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
                    let distanceValue=document.getElementById("distance").value;
                    e=e.filter((e)=>e["distance"]<=distanceValue)
                    return e;
                }).then((items)=>{
                    pannel.displayCarsSellector("0px","0px",items);////////////////
                })
                
                
                
            })
           
            
            // return activeCarsArrays;
    });
    
}
 
    );
// ضيعت
    // let distanceToCars=Promise.all(promiseArray)
    //         .then((valuesArray)=>{
    //             let d=[];
    //             for(let i=0;i<valuesArray.length;i++){
    //                 valuesArray[i].forEach((e)=>{d.append(e)})
    //                 // d.concat(valuesArray[i]);
    //             };
    //             console.log("finneshed")
    //             console.log(d)
    //             return d;
    //         }).catch(errorText=>(console.error(errorText)));
    //         console.log(promiseArray)
    //         distanceToCars.then((res)=>{
    //             console.log(`full distance array=`);
    //             console.log(res);
    //         })
    //             // if(parseInt(distanceValue)>distanceToCar){
    //             //     console.log(distanceToCar)
    //             //     items.push(car);
                
    //         pannel.displayCarsSellector("0px","0px",items);
        
        

    
    