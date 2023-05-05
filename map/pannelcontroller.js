pannel=
{
infoPannel:document.getElementById("infoPannel"),
xPosition:"0px",
yPosition:"0px",
isdisplayed:false,



display:function(x="0px",y="0px",text="text is't deffined"){
    infoPannel.innerHtml="";
    this.xPosition=x;
    this.yPosition=y;
    this.infoPannel.style.left=this.xPosition;
    this.infoPannel.style.top=this.yPosition;
    let container=document.getElementById("pannelTextContainer")
    container.innerText=text;
    let infoPannelClosser =document.getElementById("infoPannelClosser");
    infoPannelClosser.onclick=(()=> this.hide());
    this.infoPannel.classList.remove("hidden");
    this.isdisplayed=true;
    

    return infoPannel;
},
displayCarsSellector:function(x="0px",y="0px",option){
    infoPannel.innerHtml="";
    this.xPosition=x;
    this.yPosition=y;
    this.infoPannel.style.left=this.xPosition;
    this.infoPannel.style.top=this.yPosition;
    let container=document.getElementById("pannelTextContainer");
    let TextContainer=document.createElement("p");
    container.innerHTML="";
    
    if (option.length!==0) 
    {
        TextContainer.innerText="this is the cars list in this area";
        container.append(TextContainer);
        option.forEach((e)=>{
        let carButton=document.createElement("button")
        let carButtonDiv=document.createElement("div")
        carButton.style="width: inherit;";
        carButtonDiv.style="width: inherit;";
        carButton.innerText=`${e["car"]["name"] }
        in about ${e["distance"]} miles`;
        carButton.onclick=(()=>{map.AnimateChangeView([e["car"]["location"][1],e["car"]["location"][0]],10)})
        carButtonDiv.appendChild(carButton)
        container.appendChild(carButtonDiv)
        })
    }else{
        TextContainer.innerText="there is no cars in this area"
        container.append(TextContainer);
    };
    
    
    let infoPannelClosser =document.getElementById("infoPannelClosser");
    infoPannelClosser.onclick=(()=> this.hide());
    this.infoPannel.classList.remove("hidden");
    this.isdisplayed=true;
    
},

hide:function(){
    if(this.isdisplayed===true){
        infoPannel.classList.add("hidden");
        this.isdisplayed=false;
        return true;
    }
    return false;
},
displayMultiChoice:function(x="0px",y="0px",places){
this.infoPannel.innerHtml="";
    this.xPosition=x;
    this.yPosition=y;
    this.infoPannel.style.left=this.xPosition;
    this.infoPannel.style.top=this.yPosition;
    let container=document.getElementById("pannelTextContainer");
    let TextContainer=document.createElement("p");
    container.innerHTML="";
    console.log(container.innerHtml)
    TextContainer.innerText="there are more than one point pleas choose one";
    container.append(TextContainer);
    promeses=[];
    places.forEach((e)=>{
        let placeButton=document.createElement("button")
        let placeButtonDiv=document.createElement("div")
        placeButton.style="width: inherit;";
        placeButtonDiv.style="width: inherit;";
        placeButton.innerText=`${e["place name"]}: "Knoxville",
                                ${e["longitude"]}: "-93.0992",
                                ${e["state"]}: "Iowa",
                                ${e["state abbreviation"]}: "IA",
                                ${e["latitude"]}: "41.3345"`;
                let mypromis=new Promise(resolve => {
                placeButton.addEventListener('click', () => {
                    resolve(e);
                }, { once: true });
                    return e;
                });
            promeses.push(mypromis);
            placeButtonDiv.appendChild(placeButton);
            container.appendChild(placeButtonDiv);
        })
    let infoPannelClosser =document.getElementById("infoPannelClosser");
    infoPannelClosser.onclick=(()=> this.hide());
    this.infoPannel.classList.remove("hidden");
    this.isdisplayed=true;
    console.log(promeses);
    return promeses
    },
}





