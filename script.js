const hamburger_icon = document.querySelector("[data-hamburger-icon]");
const close_icon = document.querySelector("[data-close-icon]");
const nav_mobile = document.querySelector("[data-nav-mobile]");

hamburger_icon.addEventListener("click", () => {
     hamburger_icon.style.display = "none";
     if (window.innerWidth < 840) {
          nav_mobile.style.display = "block";
          close_icon.style.display = "block";
     }
});

close_icon.addEventListener("click", () => {
     close_icon.style.display = "none";
     nav_mobile.style.display = "none";
     if (window.innerWidth < 840) {
          hamburger_icon.style.display = "block";
     }
});

window.addEventListener("scroll", () => {
     const header = document.querySelector("[data-header]");
     const logo = document.querySelector("[data-logo]");
     const button = document.querySelector("[data-button]");
     if (window.scrollY >= 600) {
          header.style.backgroundColor = "white";
          logo.style.color = "#2ecc71";
          // button.style.backgroundColor = "#2ecc71";
          button.style.backgroundColor = "#f39c12";
          button.style.color = "white";
     } else {
          header.style.backgroundColor = "transparent";
          logo.style.color = "white";
          button.style.backgroundColor = "white";
          button.style.color = "black";
     }
});
