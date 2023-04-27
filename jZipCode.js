// simulating fitch and parse jsonfile
let zipCodeLink=window.location.toString().split("/")
zipCodeLink.pop()
zipCodeLink.push("jZipCode.js")
zipCodeLink.join("/")
let zipcoder={
  
zipcode:fetch(zipCodeLink)
  .then(response => response.json())
  .then((jtext)=>{
    let result={zipCode:[],fullContenet:{}}
    jtext.forEach((e,i) => {
      result.zipCode[i]=e["zip_code"];
    });
    result.fullContenet=jtext;
    return result;})
  
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  }),
serchZipcode:function(z=501){
  let resolt= zipcoder.zipcode.then((zip)=>{ if (zip["zipCode"].indexOf(z)===-1) {
    return -1
  }
    return zip["fullContenet"][zip["zipCode"].indexOf(z)]})
  return resolt;
},




}


  
