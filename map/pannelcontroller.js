pannel =
{
    infoPannel: undefined,
    xPosition: "0px",
    yPosition: "0px",
    isdisplayed: false,




    display: function (x = "0px", y = "0px", text = "text is't deffined") {
        this.hide();
        this.infoPannel = document.getElementById("infoPannel");
        infoPannel.innerHtml = "";
        this.xPosition = x;
        this.yPosition = y;
        this.infoPannel.style.left = "0px"// this.xPosition;
        this.infoPannel.style.top = "0px"// this.yPosition;
        let container = document.getElementById("pannelTextContainer")
        container.innerText = text;
        let infoPannelClosser = document.getElementById("infoPannelClosser");
        infoPannelClosser.onclick = (() => this.hide());
        this.infoPannel.classList.remove("hidden");
        this.isdisplayed = true;


        return infoPannel;
    },

    hide: function () {
        if (this.isdisplayed === true) {
            this.infoPannel.classList.add("hidden");
            this.infoPannel.classList.remove("carsSellector")
            this.isdisplayed = false;
            return true;
        }
        return false;
    },
    displayMultiChoice: function (x = "0px", y = "0px", places) {
        this.hide();
        this.infoPannel = document.getElementById("infoPannel");
        this.infoPannel.innerHtml = "";
        this.xPosition = x;
        this.yPosition = y;
        this.infoPannel.style.left = this.xPosition;
        this.infoPannel.style.top = this.yPosition;
        let container = document.getElementById("pannelTextContainer");
        let TextContainer = document.createElement("p");
        container.innerHTML = "";
        console.log(container.innerHtml)
        TextContainer.innerText = "there are more than one point pleas choose one";
        container.append(TextContainer);
        promeses = [];
        places.forEach((e) => {
            let placeButton = document.createElement("button")
            let placeButtonDiv = document.createElement("div")
            placeButton.style = "width: inherit;";
            placeButtonDiv.style = "width: inherit;";
            placeButton.innerText = `${e["place name"]}: "Knoxville",
                                ${e["longitude"]}: "-93.0992",
                                ${e["state"]}: "Iowa",
                                ${e["state abbreviation"]}: "IA",
                                ${e["latitude"]}: "41.3345"`;
            let mypromis = new Promise(resolve => {
                placeButton.addEventListener('click', () => {
                    resolve(e);
                }, { once: true });
                return e;
            });
            promeses.push(mypromis);
            placeButtonDiv.appendChild(placeButton);
            container.appendChild(placeButtonDiv);
        })
        let infoPannelClosser = document.getElementById("infoPannelClosser");
        infoPannelClosser.onclick = (() => this.hide());
        this.infoPannel.classList.remove("hidden");
        this.isdisplayed = true;
        console.log(promeses);
        return promeses
    },
}





