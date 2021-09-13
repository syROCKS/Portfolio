

/* --------------------------------------------------- toggle style switcher ----------------------------------------------------- */


const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () => {
     document.querySelector(".style-switcher").classList.toggle("open");
})

/* hide style-switcher on scroll */
window.addEventListener("scroll", () => {
     if(document.querySelector(".style-switcher").classList.contains("open")) {
          document.querySelector(".style-switcher").classList.remove("open");
     }
})


/* --------------------------------------------------- theme colors ----------------------------------------------------- */


const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
     localStorage.setItem("color",color);
     changeColor();
}

function changeColor() {
     alternateStyles.forEach((style) => {
          if(localStorage.getItem("color")  === style.getAttribute("title")) {
               style.removeAttribute("disabled");
          } else {
               style.setAttribute("disabled","true");
          }
     })
     document.querySelector(".style-switcher").classList.remove("open");
}
/* checking if 'color' key exists */
if(localStorage.getItem("color") !== null) {
     changeColor();
}


/* --------------------------------------------------- light and dark mode ----------------------------------------------------- */


const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
     document.body.classList.toggle("dark");
     if(document.body.classList.contains("dark")) {
          localStorage.setItem("theme","dark");
     } else {
          localStorage.setItem("theme","light");
     }
     updateIcon();
})

function themeMode() {
     if(localStorage.getItem("theme") === "dark") {
          document.body.classList.add("dark");
     } else {
          document.body.classList.remove("dark");
     }
     updateIcon();
}

function updateIcon() {
     if(document.body.classList.contains("dark")) {
          dayNight.querySelector("i").classList.remove("fa-moon");
          dayNight.querySelector("i").classList.add("fa-sun");
     } else {
          dayNight.querySelector("i").classList.remove("fa-sun");
          dayNight.querySelector("i").classList.add("fa-moon");
     }
}

themeMode();