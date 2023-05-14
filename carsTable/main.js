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
  let lastsearchBar = undefined;
  function searchButtonOnClick(button, catigory) {
    if (lastsearchBar != undefined) {
      lastsearchBar.parentNode.removeChild(lastsearchBar);
      lastsearchBar = undefined;
    }
    let searchDiv = button.target.parentNode.parentNode;
    let searchBar = document.createElement("input");
    lastsearchBar = searchBar;
    let searchBarContainer = document.createElement("div");
    searchBarContainer.appendChild(searchBar);
    searchBar.setAttribute("type", "search")
    searchBar.classList.add("searchBar")
    searchBar.onblur = (() => {
      if (searchBar.value === "") {
        searchDiv.removeChild(searchBarContainer)
      }


    })
    searchBar.classList.add("searchBar")
    searchDiv.appendChild(searchBarContainer);
    searchBar.focus();
    searchBar.oninput = ((e) => {
      carsTable.InTablefilter(catigory, e.target.value)
    })

  }



};
