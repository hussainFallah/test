let carsLink=window.location.toString().split("/")
carsLink.pop()
carsLink.push("jZipCode.js")
carsLink.join("/")

function getAllCars(){
let jText=fetch(carsLink)
.then(response =>response.json())
.then(jText=>jText["cars"])//json مو معتبرو 

.catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
});

return jText;
}



