
// لم أعدل هذا الكود لأنو أنا بحاجة لمصدر لمقارنة ال
// zip code 
// حالياً مازلت استعمل ذات الموقع
// عند تبديل المصدر يجب تحسين طريقة سرد هذا الكود
///////////////////////////////

let getbutton= document.getElementById("zipCodeButton");
getbutton.onclick=( async  () => {
    const US_Zip_Code = Parse.Object.extend('US_Zip_Code');

    //////////////////////////
    const query = new Parse.Query(US_Zip_Code);
      // You can also query by using a parameter of an object
    let zipcodeinput=document.getElementById("zipCodeInput").value;
    if(zipcodeinput==="")
    {
    displayPannel("zipCodeتأكد من كتابة الـ")

return;
}
///////////////////////////
    let isequalto=query.equalTo('US_Zip_Code',parseInt(zipcodeinput));
    try {
        const results = await query.find();
        if(isequalto._xhrRequest.task.responseText===`{"results":[]}`){ 
            displayPannel("الصحيح zipCodeتأكد من كتابة الـ");
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
        console.log(Area_codes);
        console.log(US_Zip_Code);
        console.log(country);
        console.log(Acceptable_cities);
        console.log(Type);
        console.log(Longitude);
        console.log(Primary_city);
        console.log(Latitude);
        console.log(County);
        console.log(Unacceptable_cities);
        console.log(estimated_population);
        console.log(State);
        console.log(Timezone);
        console.log(Remarks);
        console.log(`Latitude=${Latitude} Longitude=${Longitude}`)
        }
    } catch (error) {
        console.error('Error while fetching US_Zip_Code', error);
        displayPannel("حدث خطأ عند الاتصال")
    }
});







