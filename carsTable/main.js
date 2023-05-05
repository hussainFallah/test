function tableMain(){
    carsTable.reFresh();
    let createButton=document.getElementById("createCar");
    createButton.onclick=((e)=>{
      showFormButtonClicked(e);
    });
    function showFormButtonClicked(e){
      showForm();
      e.target.innerText="close";
      e.target.style.backgroundColor="red";
      e.target.onclick=((e)=>{
        hideFormButtonClicked(e)
      })
    }
    function hideFormButtonClicked(e){
      hideForm();
      e.target.innerText="Create";
      e.target.style.backgroundColor="#4CAF50";
      e.target.onclick=((e)=>{
        showFormButtonClicked(e)
      })
    }

    
  
};
function showForm() {
const movingDiv = document.querySelector('#formContainer');
  movingDiv.classList.add("visible");
  
}
function hideForm() {
  const movingDiv = document.querySelector('#formContainer');
  
  movingDiv.classList.remove("visible")
}