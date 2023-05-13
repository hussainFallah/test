function tableMain() {
  carsTable.reFresh();
  let createButton = document.getElementById("createCar");
  createButton.onclick = ((e) => {
    showForm(e);
  });


  document.querySelector("#idSearch").onclick = ((e) => {
    searchButtonOnClick(e, "id")
  })
  document.querySelector("#nameSearch").onclick = ((e) => {
    searchButtonOnClick(e, "name")
  })

  function searchButtonOnClick(button, catigory) {
    let searchDiv = button.target.parentNode.parentNode;
    let searchBar = document.createElement("input");
    let searchBarContainer = document.createElement("div");
    searchBarContainer.appendChild(searchBar);
    searchBar.setAttribute("type", "search")
    searchBar.classList.add("searchBar")
    searchBar.onblur = (() => {
      searchDiv.removeChild(searchBarContainer)
    })
    searchBar.classList.add("searchBar")
    searchDiv.appendChild(searchBarContainer);
    searchBar.focus();
    searchBar.oninput = ((e) => {
      carsTable.InTablefilter(catigory, e.target.value)
    })

  }



};
