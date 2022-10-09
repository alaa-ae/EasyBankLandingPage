import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

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

// scroll animation
const scrollTracker = document.querySelector(".scroll-tracker");

const scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

scrollTracker.animate(
  {
transform:['scaleX(0)','scaleX(1)']
  },
  {
    duration:1,
    timeline:scrollTrackingTimeline,
  }
  );
