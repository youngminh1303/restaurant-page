function createDish(name, description, image) {
    const dishContainer = document.createElement("div");
    dishContainer.classList.add("dishcontainer")
    const dishName = document.createElement("h3");
    dishName.innerText = name;
    const dishDescription = document.createElement("p")
    dishDescription.innerText = description;
    const dishImg = document.createElement("img");
    dishImg.src = image;

    dishContainer.appendChild(dishImg);
    dishContainer.appendChild(dishName);
    dishContainer.appendChild(dishDescription);
    return dishContainer;

}
 
function displayMenu() {
    const content = document.querySelector('.content');
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menucontainer");
    menuContainer.appendChild(createDish("Some dish", "this is an example dish", "https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg"));
    menuContainer.appendChild(createDish("Some dish", "this is an example dish", "https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg"));
    menuContainer.appendChild(createDish("Some dish", "this is an example dish", "https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg"));
    menuContainer.appendChild(createDish("Some dish", "this is an example dish", "https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg"));
    menuContainer.appendChild(createDish("Some dish", "this is an example dish", "https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg"));
    menuContainer.appendChild(createDish("Some dish", "this is an example dish", "https://www.foxyfolksy.com/wp-content/uploads/2018/11/mixed-vegetables-with-quail-eggs-640.jpg"));
    content.appendChild(menuContainer);
}

export default displayMenu;