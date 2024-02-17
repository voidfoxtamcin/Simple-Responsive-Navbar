let navbarToggler = document.getElementById("navbarToggler");
let navbarLinks = document.getElementById(navbarToggler.dataset.target);

navbarToggler.addEventListener("click", function () {
  navbarLinks.classList.toggle("active")
  this.classList.toggle("active")
});