import './style.css';

import displayHome from "./home.js";
import displayMenu from "./menu.js"
import displayContact from "./contact.js";
import loadingPage from "./loading.js";
import wipeOut from "./wipeout.js";
loadingPage();
displayHome();
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

home.addEventListener("click", () => {
   wipeOut(home,displayHome);

})

menu.addEventListener("click", () => {
   wipeOut(menu,displayMenu);
})

contact.addEventListener("click", () => {
   wipeOut(contact, displayContact)
})
