function displayContact() {
    const content = document.querySelector('.content');
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("container");
    homeContainer.id = "homeContainer"
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("hometabs");
    const contactHeading = document.createElement("h2");
    contactHeading.innerText = "Phone";
    const contactPara = document.createElement("p");
    contactPara.innerText = "0000-6666-9999";
    contactContainer.appendChild(contactHeading);
    contactContainer.appendChild(contactPara);
    homeContainer.appendChild(contactContainer);
    content.appendChild(homeContainer);
}

export default displayContact;