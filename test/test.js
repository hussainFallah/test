carsTable.reFresh();

console.log(window.innerWidth)//for setting if the sidbar will be closed or opened
window.onresize=((e)=>{console.log(e["target"]["innerWidth"])});//for setting if the sidbar will be closed or opened


let sidBarElements=sidBarLinks=document.getElementsByClassName("sidBarElement");
console.log(sidBarElements);
for (let i = 0; i < sidBarElements.length; i++) {
  sidBarElements[i].addEventListener('click', () => {
    for (let j = 0; j < sidBarElements.length; j++) {
      sidBarElements[j].classList.remove("sellected");
      
    }
    sidBarElements[i].classList.add("sellected");
    //give other page
  });
}