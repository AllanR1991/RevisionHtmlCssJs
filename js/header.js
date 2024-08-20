// Arquivo destinado a logicá do acionamento dos botões

var buttonMenu = document.querySelector(".header__top--menu");
var buttonSearch = document.querySelector(".header__top--search");
var menuNav = document.querySelector(".header__top--nav");
var labelChekIn = document.querySelector(".formulari__pesquisa--checkInLabel");
var inputChekIn = document.querySelector(".formulari__pesquisa--checkInInput");

function ShowMenuNav() {
  var statusDisplay = menuNav.style.display;
  statusDisplay == "flex"
    ? (menuNav.style.display = "none")
    : (menuNav.style.display = "flex");
}

function HideMenuNav() {
  menuNav.style.display = "none";
}





document.addEventListener("click", (event) => {
  if (menuNav.contains(event.target) || !buttonMenu.contains(event.target) && (menuNav.style.display == "flex")) {
    HideMenuNav();
  }
});

buttonMenu.addEventListener("click", () => {
  ShowMenuNav();
});

labelChekIn.addEventListener("click", ()=>{
  inputChekIn.style.display= "block";
})
