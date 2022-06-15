let btn = document.querySelector(".btn");
let modal = document.querySelector(".modal-parent");
let content = document.querySelector(".content");
let multiplication = document.querySelector(".multiplication");

function showModal() {
  modal.style.display = "block";
  content.style.filter = "blur(5px)";
}
function removeModal() {
  modal.remove();
  content.style.filter = "blur(0px)";
}
function removeModalWithScape(event) {
  if (event.key === "Escape") {
    modal.remove();
    content.style.filter = "blur(0px)";
  }
}

btn.addEventListener("click", showModal);
multiplication.addEventListener("click", removeModal);
document.body.addEventListener("keydown", removeModalWithScape);
