function showForm() {
  let carsAdderDialog = document.getElementById('carsAdderDialog');
  document.querySelectorAll(".formInput input")[document.querySelectorAll(".formInput input").length - 1].removeAttribute("disabled")
  let disablebuttons = Array.from(document.getElementsByClassName("edit-btn"));
  disablebuttons.forEach(e => { e.setAttribute("disabled", true) });
  carsAdderDialog.showModal();

  carsAdderDialog.addEventListener('click', function (event) {

    if (event.target === this) {
      document.querySelectorAll(".formInput input").forEach((e, i, a) => {
        if (i === 0) {
          e.checked = false;
        } else if (i != a.length - 1) {
          e.value = ""
        }
        else {
          e.setAttribute("disabled", true);
        }
      });
      let disablebuttons = Array.from(document.getElementsByClassName("edit-btn"));
      disablebuttons.forEach(e => { e.removeAttribute("disabled") });

      carsAdderDialog.classList.remove("fadeIn");
      carsAdderDialog.classList.add("fadeOut");
      setTimeout(() => {
        carsAdderDialog.close();
        carsAdderDialog.classList.add("fadeIn");
        carsAdderDialog.classList.remove("fadeOut");
      }, 150)
    }

  });


}





