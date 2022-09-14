let hamburgerBtn = document.querySelector(".hamburger-menu");
let list = document.querySelector(".navbar-list");
let list_link = document.querySelectorAll(".navbar-list li a");
hamburgerBtn.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("active");
  list.classList.toggle("active");

  list_link.forEach((link) => {
    link.addEventListener("click", function () {
      hamburgerBtn.classList.remove("active");
      list.classList.remove("active");
    });
  });
});
