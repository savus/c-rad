const theme = "theme";
const dataTheme = `data-theme`;
const themeTab = `.theme-tab`;
const themePanel = ".theme-panel";
const switcherBtn = ".switcher-btn";
const dark = "dark";
const light = "light";
const open = "open";
const active = "active";

const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const isVisible = "is-visible";

const root = document.documentElement;

/* Theme */

const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

/* Modal */
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

const loadTheme = () => {
  if (currentTheme) {
    root.setAttribute(dataTheme, currentTheme);
    const activebutton = Array.from(switcher).find(
      (button) => button.dataset.toggle === currentTheme
    );
    setActive(switcherBtn, activebutton);
  }
};

const setActive = (selector, element) => {
  const activeElement = document.querySelector(`${selector}.${active}`);
  if (activeElement !== null) activeElement.classList.remove(active);
  element.classList.add(active);
};

const setTheme = (value) => {
  root.setAttribute(dataTheme, value);
  localStorage.setItem(theme, value);
};

loadTheme();

toggleTheme.addEventListener("click", ({ target }) => {
  const parentTab = target.closest(themePanel);
  if (parentTab.className.includes(open)) parentTab.classList.remove(open);
  else parentTab.classList.add(open);
});

for (const element of switcher) {
  element.addEventListener("click", function () {
    const toggle = this.dataset.toggle;
    setActive(switcherBtn, this);
    setTheme(toggle);
  });
}

Array.from(openModal).forEach((elem) => {
  elem.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
});

Array.from(closeModal).forEach((elem) => {
  elem.addEventListener("click", function () {
    const modalId = this.dataset.close;
    const parent = this.closest(`#${modalId}`);
    parent.classList.remove(isVisible);
  });
});

document.addEventListener("keyup", (e) => {
  const keyCode = e.key;
  switch (keyCode) {
    case "Enter":

    default:
  }
});
