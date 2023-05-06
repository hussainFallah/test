let zip={
    getLocationUsingZipCode:function(zipcode){
        let zResult=fetch(`https://api.zippopotam.us/us/${zipcode}`)
        .then((res)=>{
            return res.json()})
        .then(res=>{
            if (JSON.stringify(res)==="{}"){
                console.log("no data was found");
                return -1;
            }
            return res;
        }).catch((e)=>console.log(e));
        return zResult;
    },
}