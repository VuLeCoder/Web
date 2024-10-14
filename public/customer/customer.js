const menu_space = document.getElementById("menu_space");
const menu_bar = document.getElementById("menu_bar");
const title = document.getElementById("title");
const aside = document.getElementById("aside");
const section = document.getElementById("section");
const _blur_ = document.getElementById("blur");

function CheckScreenWidth() {
  if (window.innerWidth >= 1200) {
    menu_space.classList.add("hidden");
    menu_space.classList.remove("flex");

    aside.classList.add("block");
    aside.classList.remove("hidden");

    aside.classList.add("flex");
    aside.classList.remove("hidden");
    aside.classList.add("w-50");
    aside.classList.remove("w-60");
    aside.classList.remove("bg-customBlue");
    aside.classList.remove("fixed");
    aside.classList.remove("z-10");

    _blur_.classList.add("hidden");
    _blur_.classList.remove("block");

    title.classList.add("flex");
    title.classList.remove("hidden");

    // section.classList.remove("min-w-full");
  } else {
    menu_space.classList.remove("hidden");
    menu_space.classList.add("flex");
    menu_bar.classList.add("fa-bars");
    menu_bar.classList.remove("fa-times");

    aside.classList.remove("block");
    aside.classList.add("hidden");
    aside.classList.add("w-60");
    aside.classList.remove("w-50");
    aside.classList.add("bg-customBlue");
    aside.classList.add("fixed");
    aside.classList.add("z-10");

    title.classList.remove("flex");
    title.classList.add("hidden");

    // section.classList.add("min-w-full");
  }
}
window.addEventListener("resize", CheckScreenWidth);

let x = 0;
function Click_menu_bar() {
  if (x == 0) {
    menu_bar.classList.remove("fa-bars");
    menu_bar.classList.add("fa-times");

    title.classList.add("flex");
    title.classList.remove("hidden");

    aside.classList.add("flex");
    aside.classList.remove("hidden");

    _blur_.classList.add("block");
    _blur_.classList.remove("hidden");

    x = 1;
  } else {
    menu_bar.classList.add("fa-bars");
    menu_bar.classList.remove("fa-times");

    title.classList.add("hidden");
    title.classList.remove("flex");

    aside.classList.add("hidden");
    aside.classList.remove("flex");

    _blur_.classList.add("hidden");
    _blur_.classList.remove("block");
    x = 0;
  }
}
menu_space.addEventListener("click", Click_menu_bar);
_blur_.addEventListener("click", Click_menu_bar);
