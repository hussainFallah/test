    //display cars data
let respons=[];

    (async () => {
  const cars = Parse.Object.extend('cars');
  const query = new Parse.Query(cars);
  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  try {
    const results = await query.find();
    for (const object of results) {
      // Access the Parse Object attributes using the .GET method
      const name = object.get('name')
      const owner = object.get('owner')
      const dateAvailable = object.get('dateAvailable')
      const naphoneme = object.get('naphoneme')
      const phone = object.get('phone')
      const typeCar = object.get('typeCar')
      const dimension = object.get('dimension')
      const capacity = object.get('capacity')
      const status = object.get('status')
      const stahometus = object.get('stahometus')
      const home = object.get('home')
      const zipCode = object.get('zipCode')
      const locationName = object.get('locationName')
      const active = object.get('active')
      const note = object.get('note')
      respons.push(
        {name:name,
        owner:owner,
        dateAvailable:dateAvailable,
        naphoneme:naphoneme,
        phone:phone,
        typeCar:typeCar,
        dimension:dimension,
        capacity:capacity,
        status:status,
        stahometus:stahometus,
        home:home,
        zipCode:zipCode,
        locationName:locationName,
        active:active,
        note:note,});
    //   console.log(name);
    //   console.log(owner);
    //   console.log(dateAvailable);
    //   console.log(naphoneme);
    //   console.log(phone);
    //   console.log(typeCar);
    //   console.log(dimension);
    //   console.log(capacity);
    //   console.log(status);
    //   console.log(stahometus);
    //   console.log(home);
    //   console.log(zipCode);
    //   console.log(locationName);
    //   console.log(active);
    //   console.log(note);
    //   console.log("------------------------------")
    }
  } catch (error) {
    console.error('Error while fetching cars', error);
  }
})().then
     ( async  () => {
        respons.forEach(e => {
            
            ( async  () => {
    const US_Zip_Code = Parse.Object.extend('US_Zip_Code');

    //////////////////////////
    const query = new Parse.Query(US_Zip_Code);
      // You can also query by using a parameter of an object
    
    
/////////////////////////
    let isequalto=query.equalTo('US_Zip_Code',parseInt(e.zipCode));
    try {
        const results = await query.find();
        if(isequalto._xhrRequest.task.responseText===`{"results":[]}`){ 
            console.error("zipCodeتأكد من الـ")
            return;
        }
        for (const object of results) {
        //Access the Parse Object attributes using the .GET method
        const Area_codes = object.get('Area_codes')
        const US_Zip_Code = object.get('US_Zip_Code')
        const country = object.get('country')
        const Acceptable_cities = object.get('Acceptable_cities')
        const Type = object.get('Type')
        const Longitude = object.get('Longitude')
        const Primary_city = object.get('Primary_city')
        const Latitude = object.get('Latitude')
        const County = object.get('County')
        const Unacceptable_cities = object.get('Unacceptable_cities')
        const estimated_population = object.get('estimated_population')
        const State = object.get('State')
        const Timezone = object.get('Timezone')
        const Remarks = object.get('Remarks')
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // console.log(`Latitude=${Latitude} Longitude=${Longitude}`)
        let a=L.marker([parseInt(Latitude),parseInt(Longitude)], {icon:e.status=== "GREEN_CARD"?greenIcon:e.status==="NO_BORDER"?redIcon:e.status==="US_CITIZEN"?blueIcon:yellowIcon}).addTo(map);
        
        a.on('click', function(event) {
        displayPannel(
            `name  =${e.name}
            owner   =${e.owner   }
            dateAvailable    =${e.dateAvailable    }
            naphoneme  =${e.naphoneme  }
            phone  =${e.phone  }
            typeCar  =${e.typeCar  }
            dimension  =${e.dimension  }
            capacity  =${e.capacity  }
            status  =${e.status  }
            stahometus  =${e.stahometus  }
            home  =${e.home  }
            zipCode  =${e.zipCode  }
            locationName =${e.locationName }
            active  =${e.active  }
            note  =${e.note  }
            `)



});
        //اضف المحتوى للخريطة
        }
    } catch (error) {
        console.error('Error while fetching US_Zip_Code', error);
        displayPannel("حدث خطأ عند الاتصال")
    }
})();


        });
    

     });


    // ( async  () => {
    // const US_Zip_Code = Parse.Object.extend('US_Zip_Code');

    // //////////////////////////
    // const query = new Parse.Query(US_Zip_Code);
    //   // You can also query by using a parameter of an object
    
    
///////////////////////////
//     let isequalto=query.equalTo('US_Zip_Code',parseInt(91710));
//     try {
//         const results = await query.find();
//         if(isequalto._xhrRequest.task.responseText===`{"results":[]}`){ 
//             console.error("zipCodeتأكد من الـ")
//             return;
//         }
//         for (const object of results) {
//         //Access the Parse Object attributes using the .GET method
//         const Area_codes = object.get('Area_codes')
//         const US_Zip_Code = object.get('US_Zip_Code')
//         const country = object.get('country')
//         const Acceptable_cities = object.get('Acceptable_cities')
//         const Type = object.get('Type')
//         const Longitude = object.get('Longitude')
//         const Primary_city = object.get('Primary_city')
//         const Latitude = object.get('Latitude')
//         const County = object.get('County')
//         const Unacceptable_cities = object.get('Unacceptable_cities')
//         const estimated_population = object.get('estimated_population')
//         const State = object.get('State')
//         const Timezone = object.get('Timezone')
//         const Remarks = object.get('Remarks')
//         console.log(Area_codes);
//         console.log(US_Zip_Code);
//         console.log(country);
//         console.log(Acceptable_cities);
//         console.log(Type);
//         console.log(Longitude);
//         console.log(Primary_city);
//         console.log(Latitude);
//         console.log(County);
//         console.log(Unacceptable_cities);
//         console.log(estimated_population);
//         console.log(State);
//         console.log(Timezone);
//         console.log(Remarks);
//         console.log(`Latitude=${Latitude} Longitude=${Longitude}`)
//         //اضف المحتوى للخريطة
//         }
//     } catch (error) {
//         console.error('Error while fetching US_Zip_Code', error);
//         displayPannel("حدث خطأ عند الاتصال")
//     }
// })();




