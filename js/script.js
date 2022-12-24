const nav_menu = document.querySelector('.nav_menu');

const nav_btn = document.querySelector('.nav_open');

const nav_close = document.querySelector('.nav_close');

const overlay = document.querySelector('.overlay')

nav_btn.onclick = () =>{
    nav_menu.classList.add('active');
    overlay.classList.add('active');
}

nav_close.onclick = () =>{
    nav_menu.classList.remove('active');
    overlay.classList.remove('active');
}


const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});