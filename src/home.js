function displayHome() {
    const content = document.querySelector('.content');
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("container");
    homeContainer.id = "homeContainer"
    const aboutTab = document.createElement("div");
    aboutTab.classList.add("hometabs");
    const aboutHeading = document.createElement("h2");
    aboutHeading.innerText = "About Us";
    const aboutPara = document.createElement("p");
    aboutPara.innerText = "We are the best restaurant provide food from vegetables from clean resources and skillful cooking hands of our chefs. We try our best to bring you the best food in the planet. Hopefully you are gonna enjoy our foods. Thank you";

    aboutTab.appendChild(aboutHeading);
    aboutTab.appendChild(aboutPara);
    

    const openingHoursTab = document.createElement("div");
    openingHoursTab.classList.add("hometabs");
    const openingHoursHeading = document.createElement("h2");
    openingHoursHeading.innerText = "Opening Hours"
    const openingHoursPara = document.createElement("p");
    openingHoursPara.innerText += "Monday - Wednesday: 7AM - 9PM \n Thurday - Saturday: 8AM - 8PM"
    openingHoursTab.appendChild(openingHoursHeading);
    openingHoursTab.appendChild(openingHoursPara);


    homeContainer.appendChild(aboutTab);
    homeContainer.appendChild(openingHoursTab);
    content.appendChild(homeContainer);
    

   
}


export default displayHome;