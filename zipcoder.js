let zip={
    getLocationUsingZipCode:function(zipcode){
        let zResult=fetch(`http://api.zippopotam.us/us/${zipcode}`)
        .then((res)=>{
            return res.json()})
        .then(res=>{
            if (JSON.stringify(res)==="{}"){
                console.log("no data was found");
                return -1;
            }
            let places=res["places"];
            places.forEach(place => {
                console.log(place);//if length ===1=> return and use else if ===0 return error else return panel to have user to sellect one result
                console.log(place["latitude"]);
                console.log(place["longitude"]);
            });
            return places;
        }).catch((e)=>console.log(e));
        console.log(zResult);
        return zResult;
    },
}
