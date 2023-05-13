let container = document.getElementById("mainContainer");
let sidBar = document.querySelector(".sidebar");
let sideBarTogole = document.querySelector('.sidebar-toggle');
prossesWindowSize(window.innerWidth);

sideBarTogole.onclick = (() => {
    sideBarTogole.classList.toggle('active');
    sideBarTogole.classList.toggle("hide");
    sidBar.classList.toggle('show');
});

function prossesWindowSize(innerWidth) {
    if (innerWidth <= 900) {
        container.style.left = "0.5em";
        sidBar.classList.remove("show");
        sideBarTogole.classList.remove('active');
        sideBarTogole.classList.add("hide");
        sideBarTogole.style = "display: block;";
    } else {
        container.style.left = "15em";
        sidBar.classList.add("show");
        sideBarTogole.classList.add('active');
        sideBarTogole.classList.remove("hide");
        sideBarTogole.style = "display:none;";
    }
};

if (navigator.userAgentData && navigator.userAgentData.mobile) {
    // if mobile
    window.addEventListener("orientationchange", function () {
        if (window.orientation === undefined) {
            // Orientation not supported
        } else {
            // Portrait mode
            prossesWindowSize(window.innerWidth);
        }
    });
} else {
    // if not a mobile
    window.onresize = ((e) => {
        console.log(e["target"]["innerWidth"]);
        prossesWindowSize(window.innerWidth);
    });//for setting if the sidbar will be closed or opened
}



let onClickFunctions = [];
function mapButton() {


    container.innerHTML = `<div id="serchByZipcode">
        <div id="search-container">
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
    </div>
    <div id="infoPannel" class="hidden">
        <button id="infoPannelClosser">X</button>
        <div id="pannelTextContainer"></div>
    </div>
    <div id="mapid"></div>
    <div><button id="stopserching" class="hidden">stop serching</button>
    </div>`;
    mainMap();
};
mapButton();
onClickFunctions.push(mapButton);

function driversButton() {
    container.innerHTML = `
    <button id="createCar">Create</button>
    

        <div class="main-content">
        <dialog id="carsAdderDialog" class="fadeIn">
        <div class="dialog-content">
            <form action="">
                <div class="formInput toggle">
                    <p id="StatusToggleId">Status:</p>
                    <label class="toggle slot">
                        <input id="isActive" type="checkbox" name="status">
                        <span class="circle"></span>
                    </label>
                </div>
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
                        <option value="box truck">
                            Box truck
                        </option>
                        <option value="large">
                            Large
                        </option>
                        <option value="sprinter">
                            Sprinter
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
                        <option value="US_CITIZEN">
                            US CITIZEN
                        </option>
                        <option value="GREEN_CARD">
                            GREEN CARD
                        </option>
                        <option value="NO_BORDER">
                            NO BORDER
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
                    <input type="text" name="location name" id="location name" disabled="">
                </div>
                <div class="formInput">
                    <label for="Note">
                        <p>Note:</p>
                    </label>
                    <input type="text" name="Note" id="Note" disabled="">
                </div>
                <div class="formInput">
                    <input type="submit">
                </div>
            </form>
        </div>
    </dialog>

            <table id="carsTable">
                <tr>
                    <th>Available</th>
                    <th><div class="searchDiv"><p>id </p><button id="idSearch"><img class="searchImage" src="carsTable/magnifying-glass-search-icon.png"></button></div></th>
                    <th><div class="searchDiv"><p>Name </p><button id="nameSearch"><img class="searchImage" src="carsTable/magnifying-glass-search-icon.png"></button></div></th>
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
        <div id="navigationButtonsContainer">
            
            <button id="leftButton"><p><i class="arrow left"></i></p></button>
            <div id="nextPreviosContainer"></div>
            <button id="rightButton"><p><i class="arrow right"></i></p></button>
        </div>`;
    tableMain();
};
onClickFunctions.push(driversButton)
function logOut() {
    displayConnetionMessag("logging out not working right now");
    setTimeout(() => { hideConnetionMessag() }, 1500)
}
onClickFunctions.push(logOut)


let sidBarElements = sidBarLinks = document.getElementsByClassName("sidBarElement");

for (let i = 0; i < sidBarElements.length; i++) {
    sidBarElements[i].addEventListener('click', () => {
        for (let j = 0; j < sidBarElements.length; j++) {
            sidBarElements[j].classList.remove("sellected");
        }
        sidBarElements[i].classList.add("sellected");
        onClickFunctions[i]();
    });
};


function copyToClipboard(text, button) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log('Text copied to clipboard');
            button.innerHTML = 'Copied!';
            button.classList.add('success');
        })
        .catch((err) => {
            console.error('Error copying text: ', err);
            button.innerHTML = 'something Went Wrong!';
            button.classList.add('fail');
        });
};
function convertTimeFromIso(globaltime) {
    let date = new Date(globaltime);
    // Format the date and time string in the correct format for the input
    let dateString = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + 'T' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
    // Set the value of the datetime-local input to the formatted date and time string
    return dateString;
}
function convertTimeToIso(localTime) {
    // Create a new Date object from the selected date and time
    var date = new Date(localTime);
    // Get the ISO 8601 formatted string from the date object
    var isoString = date.toISOString();
    // Set the value of a variable or use the string as needed
    return isoString;
}
function displayConnetionMessag(message = "message Undefinde") {
    let connectionMessageContainer = document.getElementById("connection-message-container");
    let connectionMessage = document.getElementById("connection-message");
    connectionMessage.innerText = message;
    connectionMessageContainer.classList.remove("hidden");
}
function hideConnetionMessag() {
    let connectionMessageContainer = document.getElementById("connection-message-container");
    connectionMessageContainer.classList.add("hidden");
}

