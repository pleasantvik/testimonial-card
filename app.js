const slides = document.querySelectorAll(".slide");

const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");

let curSlide = 0;
const maxSlide = slides.length;

slides.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i}%)`;
});

btnRight.addEventListener("click", function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
});

btnLeft.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
});
