
function getAllCars(){
let jText=fetch('https://github.com/hussainFallah/test/raw/main/cars.json')
.then(response =>response.json())
.then(jText=>jText["cars"])//json مو معتبرو 

.catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
});

return jText;
}



