
function wipeout(element, displayFuntion) {

    if (element.classList.contains("active")) return

    const active = document.querySelector(".active");
    active.classList.remove("active");
    const content = document.querySelector('.content');
    while (content.firstChild) content.removeChild(content.firstChild);
    displayFuntion();
    element.classList.add("active");
}
 
export default wipeout;