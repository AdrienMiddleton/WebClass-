var nav = document.querySelectorAll("li");

nav.forEach((li) => {
  li.addEventListener("click", function () {
    removeActive();
    this.classList.add("active");
  });
});

function removeActive() {
  nav.forEach((li) => {
    li.classList.remove("active");
  });
}
