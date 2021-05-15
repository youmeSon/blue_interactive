"use strict";

const navbar = document.querySelector(".navbar");
const main = document.querySelector("#main");
const mainHeight = main.getBoundingClientRect().height;

// Scroll to section
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// Show more toggle button
const showMoreBtn = document.querySelector(".button__more");
const showMore = document.querySelector(".show__more");
showMoreBtn.addEventListener("click", () => {
  const buttonText = showMoreBtn.innerText;
  showMore.classList.toggle("hide");
  showMoreBtn.innerText = buttonText == "Hide" ? "Show more" : "Hide";
});

// Contact button
const contactBtn = document.querySelector(".button__contact");
contactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

// Submit button
const submitBtn = document.querySelector(".submit__btn");
const submitMessage = document.querySelector(".submit__message");
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  submitMessage.classList.remove("hide");
});

// Show arrow up
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > mainHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

//  Handle arrow up button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#main");
});

// Hide the navbar menu when click the navbar items
const toggleNavItems = document.querySelector(".navbar-nav");
const collapse = document.querySelector("#mainNav");
toggleNavItems.addEventListener("click", () => {
  collapse.classList.remove("show");
});
