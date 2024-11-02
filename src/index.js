import "./style.css";
import { buildHome } from "./home-tab.js";
import { buildMenu } from "./menu-tab.js";

const bgImage = document.querySelector(".bg-image");
const bgTravel = 10;
document.addEventListener("mousemove", e => {
    const x = -(e.clientX / window.innerWidth) * bgTravel;
    const y = -(e.clientY / window.innerHeight) * bgTravel;
    bgImage.style["background-position"] = `${x}px ${y}px`;
});

const tabs = (function(){
    const contentContainer = document.querySelector("#content");
    let currentTabButton;
    
    function changeTab(button){
        if(currentTabButton){
            currentTabButton.classList.remove("active");
        }
        contentContainer.innerHTML = button.dataset.builder;
        button.classList.add("active");
        currentTabButton = button;
    }

    return {changeTab};
}());

const homeButton = document.querySelector("#home-button");
homeButton.dataset.builder = buildHome();
const menuButton = document.querySelector("#menu-button");
menuButton.dataset.builder = buildMenu();

homeButton.addEventListener("click", () => tabs.changeTab(homeButton));
menuButton.addEventListener("click", () => tabs.changeTab(menuButton));

homeButton.dispatchEvent(new MouseEvent("click"));