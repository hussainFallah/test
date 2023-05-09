let carsSellector = {
    carsSellectorPannel: undefined,
    displayCarsSellector: function (option) {
        this.hide();
        let zipcodeSearchBox = document.getElementById("search-container")
        this.carsSellectorPannel = document.createElement("div");
        this.carsSellectorPannel.classList.add("carsSellector")
        this.carsSellectorPannel.innerHtml = "";
        let container = document.createElement("div");


        let TextContainer = document.createElement("p");
        TextContainer.style.color = "#FFF";
        container.innerHTML = "";

        if (option.length !== 0) {
            TextContainer.innerText = "this is the cars list in this area";
            container.append(TextContainer);
            option.forEach((e) => {
                let carButton = document.createElement("button");
                let carP = document.createElement("p");
                let carButtonDiv = document.createElement("div");
                carP.innerText = `${e["car"]["name"]}
        in about ${e["distance"]} miles`;
                carP.style = "width: inherit;";
                carButtonDiv.classList.add("carButtonDiv")
                carButtonDiv.onclick = (() => { map.AnimateChangeView(e["car"]["location"].reverse(), 8) })
                carButton.innerText = `Copy To CleapBourd`;
                carButton.classList.add("copy-btn");
                carButton.onclick = ((event) => {
                    event.stopPropagation(event);
                    copyToClipboard(
                        `Location: ${e["car"]["locationName"]}
distance: about ${e["distance"]} miles
Dimension: ${e["car"]["dimension"]}
Rate $`, event.target);
                })
                carButtonDiv.appendChild(carP);
                carButtonDiv.appendChild(carButton);
                container.appendChild(carButtonDiv);
                carButtonDiv.style.height = "fit-content";
            })
        } else {
            TextContainer.innerText = "there is no cars in this area"
            container.append(TextContainer);
        };


        let carsSellectorCloser = document.createElement("button");
        carsSellectorCloser.setAttribute("id", "carsSellectorCloser")
        carsSellectorCloser.innerText = "X";
        carsSellectorCloser.onclick = (() => this.hide());
        this.carsSellectorPannel.classList.remove("hidden");
        this.carsSellectorPannel.appendChild(carsSellectorCloser);
        this.carsSellectorPannel.appendChild(container);
        this.carsSellectorPannel.style.height = "20em";
        zipcodeSearchBox.appendChild(this.carsSellectorPannel);
    },
    hide: function () {
        if (this.carsSellectorPannel != undefined) {
            this.carsSellectorPannel.classList.add("hidden");
        }
    }
}