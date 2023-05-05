let container=document.getElementById("mainContainer");
let sidBar=document.querySelector(".sidebar");
let sideBarTogole=document.querySelector('.sidebar-toggle');
prossesWindowSize(window.innerWidth);

sideBarTogole.onclick=(()=>{
    sideBarTogole.classList.toggle('active');
    sideBarTogole.classList.toggle("hide");
    sidBar.classList.toggle('show');
});

function prossesWindowSize(innerWidth){
    if(innerWidth<=900){
        container.style.left="0.5em";
        sidBar.classList.remove("show");
        sideBarTogole.classList.remove('active');
        sideBarTogole.classList.add("hide");
        sideBarTogole.style="display: block;";
    }else{
        container.style.left="15em";
        sidBar.classList.add("show");
        sideBarTogole.classList.add('active');
        sideBarTogole.classList.remove("hide");
        sideBarTogole.style="display:none;";
    }
};

window.onresize=((e)=>{console.log(e["target"]["innerWidth"]);
prossesWindowSize(window.innerWidth);});//for setting if the sidbar will be closed or opened


let onClickFunctions=[];
function mapButton(){


    container.innerHTML=`<div id="serchByZipcode">
        <input type="text" placeholder="&lt;zipcode&gt;" id="zipCodeText">
        <select name="distance" id="distance">
            <option value="100">100 miles</option>
            <option value="200">200 miles</option>
            <option value="300">300 miles</option>
            <option value="400">400 miles</option>
            <option value="500">500 miles</option>
            <option value="600">600 miles</option>
        </select>
        <button id="zipCodeButton">serch by zipCode</button>
    </div>
    <div id="infoPannel" class="hidden">
        <button id="infoPannelClosser">X</button>
        <div id="pannelTextContainer"></div>
    </div>
    <div id="mapid"></div>
    <div><button id="stopserching">stop serching</button>
    </div>`;
    mainMap();
};
mapButton();
onClickFunctions.push(mapButton);

function driversButton(){
    container.innerHTML=`
    <button id="createCar">Create</button>
<div id="formContainer">
    <form action="">
        <div class="formInput">
            <label for="availableDate">
                <p>Date available:</p>
            </label>
            <input type="datetime-local" name="availableDate" id="availableDate">

        </div>
        <div class="formInput">
            <label for="id">
                <p>id:</p>
            </label>
            <input type="number" name="id" id="id">
        </div>
        <div class="formInput">
            <label for="name">
                <p>Name:</p>
            </label>
            <input type="text" name="name" id="name">
        </div>
        <div class="formInput">
            <label for="owner">
                <p>owner:</p>
            </label>
            <input type="text" id="owner" name="owner">
        </div>
        <div class="formInput">
            <label for="phoneNumber">
                <p>Phone Number:</p>
            </label>
            <input type="number" name="phoneNumber" id="phoneNumber">
        </div>
        <div class="formInput">
            <label for="carType">
                <p>Type:</p>
            </label>
            <select name="carType" id="carType">
                <option value="Boxtruck">
                    <p>Box truck</p>
                </option>
                <option value="Large">
                    <p>Large</p>
                </option>
                <option value="Sprinter">
                    <p>Sprinter</p>
                </option>
            </select>
        </div>
        <div class="formInput">
            <label for="dimension">
                <p>Dimension:</p>
            </label>
            <input type="text" name="dimension" id="dimension">
        </div>
        <div class="formInput">
            <label for="capacity">
                <p>Capacity:</p>
            </label>
            <input type="text" name="capacity" id="capacity">
        </div>
        <div class="formInput">
            <label for="status">
                <p>Type:</p>
            </label>
            <select name="status" id="status">
                <option value="usCitizen">
                    <p>US CITIZEN</p>
                </option>
                <option value="greenCard">
                    <p>GREEN CARD</p>
                </option>
                <option value="noBorder">
                    <p>NO BORDER</p>
                </option>
            </select>
        </div>
        <div class="formInput">
            <label for="Zip Code">
                <p>Zip Code:</p>
            </label>
            <input type="text" name="Zip Code" id="Zip Code">
        </div>
        <div class="formInput">
            <label for="location name">
                <p>Location Name:</p>
            </label>
            <input type="text" name="location name" id="location name" disabled>
        </div>
        <div class="formInput">
            <label for="Note">
                <p>Note:</p>
            </label>
            <input type="text" name="Note" id="Note" disabled>
        </div>
        <div class="formInput">
            <input type="submit">
        </div>
    </form>
</div>

        <div class="main-content">
            <table id="carsTable">
                <tr>
                    <th>Available</th>
                    <th>id</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Phone</th>
                    <th>Dimension</th>
                    <th>Capacity</th>
                    <th>Location</th>
                    <th>date Available</th>
                    <th>Note</th>
                    <th>Edit</th>
                </tr>
            </table>
        </div>
        <div id="nextPreviosContainer"></div>`;
        tableMain();
    };
onClickFunctions.push(driversButton)
onClickFunctions.push(driversButton)
onClickFunctions.push(driversButton)


let sidBarElements=sidBarLinks=document.getElementsByClassName("sidBarElement");

for (let i = 0; i < sidBarElements.length; i++) {
    sidBarElements[i].addEventListener('click', () => {
    for (let j = 0; j < sidBarElements.length; j++) {
        sidBarElements[j].classList.remove("sellected");
    }
    sidBarElements[i].classList.add("sellected");
    onClickFunctions[i]();
    });
};


