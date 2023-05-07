function showForm() {
const movingDiv = document.querySelector('#formContainer');
  movingDiv.classList.add("visible");
  
}
function hideForm() {
  const movingDiv = document.querySelector('#formContainer');
  
  movingDiv.classList.remove("visible")
}
function showFormButtonClicked(e){
      showForm();
      e.target.innerText="close";
      e.target.style.backgroundColor="red";
      document.querySelectorAll(".formInput input")[document.querySelectorAll(".formInput input").length-1].removeAttribute("disabled")
      let disablebuttons=Array.from(document.getElementsByClassName("edit-btn"));
      disablebuttons.forEach(e=>{e.setAttribute("disabled",true)});
      e.target.onclick=((e)=>{
        hideFormButtonClicked(e)
      })
    }
    function hideFormButtonClicked(e){
      hideForm();
      e.target.innerText="Create";
      e.target.style.backgroundColor="#4CAF50";
      document.querySelectorAll(".formInput input").forEach((e,i,a)=>{
      if(i===0){
        e.checked=false;
      }else if(i!=a.length-1){
        e.value=""}
      else{
        e.setAttribute("disabled",true);
      }
      });
    let disablebuttons=Array.from(document.getElementsByClassName("edit-btn"));
      disablebuttons.forEach(e=>{e.removeAttribute("disabled")});
      e.target.onclick=((e)=>{
        showFormButtonClicked(e)
      })
    }

