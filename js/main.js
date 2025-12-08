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

const dataFilter = "[data-filter]";
const dataItem = "[data-item]";
const searchBox = document.getElementById("search");

const root = document.documentElement;

/* Theme */

const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

/*Portfolio */
const filterLinks = document.querySelectorAll(dataFilter);
const portfolioCards = document.querySelectorAll(dataItem);

/* Modal */
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);
const modalClass = "modal";

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

searchBox.addEventListener("keyup", ({ target: { value } }) => {
  const searchInput = value.toLowerCase().replace(/\s/g, "");
  portfolioCards.forEach((card) => {
    if (searchInput === "all") card.style.display = "block";
    else if (card.dataset.item.includes(searchInput))
      card.style.display = "block";
    else card.style.display = "none";
  });
});

for (const link of filterLinks) {
  link.addEventListener("click", function ({ target }) {
    const filter = this.dataset.filter;
    console.log(filter);
    setActive(dataFilter, target);

    portfolioCards.forEach((card) => {
      if (filter === "all") card.style.display = "block";
      else if (filter === card.dataset.item) card.style.display = "block";
      else card.style.display = "none";
    });
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

document.addEventListener("click", (e) => {
  const isAnchorTag = e.target.matches("a");
  const visibleModal = document.querySelector(`.${modalClass}.${isVisible}`);

  if (isAnchorTag) {
    e.preventDefault();
  }

  if (e.target === visibleModal) {
    visibleModal.classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  const keyCode = e.key;
  switch (keyCode) {
    case "Enter":

    default:
  }
});
