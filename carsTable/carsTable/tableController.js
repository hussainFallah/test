
// function scrollToTop() {
//     document.body.scrollIntoView({ behavior: 'instant', block: 'start' });
// }

function scrollToTop() {
    var currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
    };
};

let carsTable={

reFresh:function(){
    let table=document.getElementById("carsTable");
    let raws=[];
    let rawsArray=[];
    getAllCars().then((cars)=>{
        cars.forEach(car => {
            let tableRaw=document.createElement("tr");
            tableRaw.innerHTML=`<tr>
                            <td>${car["active"]===true?"✅":"❌"}</td>
                            <td>${car["id"]}</td>
                            <td>${car["name"]}</td>
                            <td>${car["typeCar"]}</td>
                            <td>${car["phone"]}</td>
                            <td>${car["dimension"]}</td>
                            <td>${car["capacity"]}</td>
                            <td>${car["locationName"]}</td>
                            <td>${car["dateAvailable"]}</td>
                            <td>${car["note"]}</td>
                            <td><button class="edit-btn">Edit</button></td>
                    </tr>`
                    raws.push(tableRaw)
    })

    let j=0;
    for(let i=0;i<raws.length;i+=30){
        rawsArray.push(raws.slice(i,i+30));
        j++;
    }
    let nextPreviosContainer=document.getElementById("nextPreviosContainer");
    buttons=[];
    rawsArray.forEach((raws,i)=>{
        let mybutton=document.createElement("button");
        mybutton.style.backgroundColor="white"
        mybutton.innerText=i+1;
        buttons.push(mybutton);
        mybutton.onclick=(()=>{
            scrollToTop();
            buttons.forEach((e)=>{e.removeAttribute("disabled")});
            mybutton.setAttribute("disabled",true);
            const rows = table.querySelectorAll('tr');
            for (let i = 1; i < rows.length; i++) {
                table.removeChild(rows[i]);
            }
            rawsArray[i].forEach(raw => {
                table.appendChild(raw);
            });
        });
        nextPreviosContainer.appendChild(mybutton);
    })
    rawsArray[1].forEach(raw => {
        table.appendChild(raw);
    });
    buttons[0].setAttribute("disabled",true);
    // table.appendChild(tableRaw);
    ;});
    
},




}