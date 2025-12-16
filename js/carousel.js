const slides = document.querySelectorAll(".review-item");
const buttons = document.querySelectorAll(".slide-ctrl-container button");

let current = Math.floor(Math.random() * slides.length);
let next = current < slides.length - 1 ? current + 1 : 0;
let prev = current > 0 ? current - 1 : slides.length - 1;

const update = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active", "prev", "next");
  });
  slides[prev].classList.add("prev");
  slides[current].classList.add("active");
  slides[next].classList.add("next");
};

const goToNum = (num) => {
  current = num;
  next = current < slides.length - 1 ? current + 1 : 0;
  prev = current > 0 ? current - 1 : slides.length - 1;
  update();
};

console.log(`prev: ${prev}`, `current: ${current}`, `next: ${next}`);

const goToPrev = () =>
  current > 0 ? goToNum(current - 1) : goToNum(slides.length - 1);

const goToNext = () =>
  current < slides.length - 1 ? goToNum(current + 1) : goToNum(0);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () =>
    i === 0 ? goToPrev() : goToNext()
  );
}

update();
