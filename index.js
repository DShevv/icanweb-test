const burgerBtn = document.querySelectorAll(".burger-menu");
const menu = document.querySelector("nav");

const filtersButton = document.querySelector(".filters-open");
const filters = document.querySelector(".filters__wrapper");
const filtersForm = document.querySelector(".filters");
const filtersClose = document.querySelector(".filters-close");
const filtersSubmit = document.querySelector(".filters-submit");

const searchBtn = document.querySelector(".btn-search");
const searchField = document.querySelector(".search-mobile");

document.addEventListener("click", (e) => {
  if (burgerBtn[0].contains(e.target) || burgerBtn[1].contains(e.target)) {
    menu.classList.toggle("active");
    document.body.classList.toggle("scroll-lock");
  } else {
    menu.classList.remove("active");
    document.body.classList.remove("scroll-lock");
  }

  if (e.target === filtersButton) {
    filters.classList.add("active");
  } else if (filtersForm.contains(e.target)) {
    filtersClose.contains(e.target) && filters.classList.remove("active");
    filtersSubmit === e.target && filters.classList.remove("active");
  } else {
    filters.classList.remove("active");
  }

  if (searchBtn.contains(e.target)) {
    searchField.classList.toggle("active");
  } else {
    if (!searchField.contains(e.target)) {
      searchField.classList.remove("active");
    }
  }
});

function connectDropdown(id) {
  const dropDown = document.querySelector(`#${id}`);
  const dropDownHeader = dropDown.querySelector(".dropdown__header");
  const dropDownList = dropDown.querySelector(".dropdown__list");

  const dropDownHeight = dropDownList.offsetHeight + 16;
  dropDownList.style.height = "0px";
  dropDownList.style.opacity = "1";

  document.addEventListener("click", (e) => {
    if (dropDown.contains(e.target)) {
      dropDown.classList.toggle("active");
      if (dropDown.classList.contains("active")) {
        dropDownList.style.height = dropDownHeight + "px";
      } else {
        dropDownList.style.height = "0px";
      }
    } else {
      dropDown.classList.remove("active");
      dropDownList.style.height = "0px";
    }

    if (dropDownList.contains(e.target)) {
      dropDownHeader.textContent = e.target.textContent;
    }
  });
}

connectDropdown("dropdown-logo");
connectDropdown("dropdown-brand");
