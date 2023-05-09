
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

let carsTable = {
    buttons: [],
    table: "",
    rawsArray: [],
    tablePage: 0,
    reFresh: function () {
        this.buttons = [];
        this.table = document.getElementById("carsTable");
        let raws = [];
        this.removeAllButtons()

        getAllCars().then((cars) => {

            cars.forEach((car) => {
                let tableRaw = document.createElement("tr");
                tableRaw.innerHTML = `<tr>
                            <td>${car["active"] === true ? "✅" : "❌"}</td>
                            <td>${car["id"]}</td>
                            <td>${car["name"]}</td>
                            <td>${car["typeCar"]}</td>
                            <td>${car["phone"]}</td>
                            <td>${car["dimension"]}</td>
                            <td>${car["capacity"]}</td>
                            <td>${car["locationName"]}</td>
                            <td>${car["dateAvailable"]}</td>
                            <td>${car["note"]}</td>
                    </tr>`;
                //makeing Edit Button
                let editIcon = document.createElement("img");
                editIcon.src = "editIcon.png";
                editIcon.classList.add("editIcon");
                let editButton = document.createElement("button");
                editButton.classList.add("edit-btn");
                editButton.appendChild(editIcon);

                //Edit button functionalty

                editButton.onclick = (() => {
                    document.getElementById("createCar").click();
                    document.querySelector("#formContainer > form > div.formInput.toggle > label > input[type=checkbox]").checked = car["active"];
                    document.querySelector("#availableDate").value = convertTimeFromIso(car["dateAvailable"])
                    document.querySelector("#id").value = car["id"];
                    document.querySelector("#name").value = car["name"];
                    document.querySelector("#owner").value = car["owner"];
                    document.querySelector("#phoneNumber").value = car["phone"];
                    document.querySelector("#carType").value = car["typeCar"];
                    console.log(car["typeCar"]);
                    document.querySelector("#dimension").value = car["dimension"];
                    document.querySelector("#capacity").value = car["capacity"];
                    document.querySelector("#status").value = car["status"];
                    console.log(car["status"]);
                    document.getElementById("Zip Code").value = car["zipCode"];
                    document.getElementById("location name").value = car["locationName"];
                    document.querySelector("#Note").value = car["note"];



                    //Note: make add to form and edit it functionalety here


                })
                let td = document.createElement("td");
                td.appendChild(editButton);
                //makeing delete button
                let deleteButton = document.createElement("button");
                let deleteIcon = document.createElement("img");
                deleteIcon.src = "trashIcon.png";
                deleteButton.appendChild(deleteIcon);
                deleteButton.classList.add("deleteButton")
                deleteButton.onclick = (() => {
                    //add delete button functionalty here
                })
                td.appendChild(deleteButton);
                tableRaw.appendChild(td);
                raws.push(tableRaw)
            })
            this.rawsArray = [];
            //slicing the table into table pages
            for (let i = 0; i < raws.length; i += 30) {
                this.rawsArray.push(raws.slice(i, i + 30));
            }
            let leftButton = document.getElementById("leftButton");
            let rightButton = document.getElementById("rightButton");


            leftButton.onclick = (() => {
                if (this.tablePage > 0) {
                    this.setTablePage(this.tablePage - 1)
                    this.setNextPreviosContainer()
                }
            });


            rightButton.onclick = (() => {
                if (this.tablePage < this.buttons.length - 1) {
                    console.log(this.tablePage + 1)
                    this.setTablePage(this.tablePage + 1)
                    this.setNextPreviosContainer()
                }
            });

            this.rawsArray.forEach((raws, i) => {
                let mybutton = document.createElement("button");
                mybutton.style.backgroundColor = "white"
                mybutton.innerText = i + 1;
                this.buttons.push(mybutton);
                mybutton.onclick = (() => {
                    scrollToTop();
                    this.setTablePage(i);
                    this.setNextPreviosContainer()
                });


            })
            this.setNextPreviosContainer()
        });

    },
    setTablePage: function (tablepageindex) {
        this.tablePage = tablepageindex;
        const rows = document.querySelectorAll('tr');
        for (let index = 1; index < rows.length; index++) {
            this.table.removeChild(rows[index]);
        }
        this.rawsArray[this.tablePage].forEach(raw => {
            this.table.appendChild(raw);
        });
        this.buttons.forEach((e) => { e.removeAttribute("disabled") });
        this.buttons[tablepageindex].setAttribute("disabled", true);


    },
    removeAllButtons: function () {

        let nextPreviosContainer = document.getElementById("nextPreviosContainer");
        while (nextPreviosContainer.firstChild) {
            nextPreviosContainer.removeChild(nextPreviosContainer.firstChild)
        }
    }, setNextPreviosContainer: function () {
        let nextPreviosContainer = document.getElementById("nextPreviosContainer");
        while (nextPreviosContainer.firstChild) {
            nextPreviosContainer.removeChild(nextPreviosContainer.firstChild)
        }
        let buttonsToDisplay = [];
        if (this.tablePage <= 5) {
            buttonsToDisplay = this.buttons.slice(0, 9);

        } else if (this.tablePage >= this.buttons.length - 6) {
            buttonsToDisplay = this.buttons.slice(-9);

        } else {
            buttonsToDisplay = this.buttons.slice(this.tablePage - 5, this.tablePage + 4);
        }
        buttonsToDisplay.forEach(button => {
            nextPreviosContainer.appendChild(button)
        });
    }


}