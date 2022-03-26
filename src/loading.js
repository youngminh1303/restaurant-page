const body = document.querySelector("body");

function loading() {
    const body = document.querySelector("body"); 
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const navbar = document.createElement("div");
    navbar.classList.add("navbar");
    const ul = document.createElement("ul");
    const home = document.createElement("li");
    home.innerText = "Home";
    home.id = "home";
    home.classList.add("active");
    const menu = document.createElement("li");
    menu.innerText = "Menu";
    menu.id = "menu"
    const contact = document.createElement("li");
    contact.innerText = "Contact";
    contact.id = "contact"
    const content = document.createElement("div");
    content.classList.add("content");

    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);
    navbar.appendChild(ul);
    nav.appendChild(navbar);
    header.appendChild(nav);
    body.appendChild(header);
    body.appendChild(content);

}

export default loading;