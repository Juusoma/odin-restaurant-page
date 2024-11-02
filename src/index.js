import "./style.css";
import { buildHome } from "./home-tab.js";
import { buildMenu } from "./menu-tab.js";

const bgImage = document.querySelector(".bg-image");
const bgMouseTravel = 10;
let bgX = 0;
let bgY = 0;
let scrollY;
const bgScrollFactor = 0.5;
document.addEventListener("mousemove", e => {
    bgX = -(e.clientX / window.innerWidth) * bgMouseTravel;
    bgY = -(e.clientY / window.innerHeight) * bgMouseTravel;
    bgImage.style["background-position"] = `${bgX}px ${bgY + scrollY}px`;
});

document.addEventListener("scroll", (e) => {
    const yOffset = window.scrollY;
    scrollY = -yOffset*bgScrollFactor;
    bgImage.style["background-position"] = `${bgX}px ${bgY + scrollY}px`;
});

const tabs = (function(){
    const contentContainer = document.querySelector("#content");
    let currentTabButton;
    
    function changeTab(button){
        if(button == currentTabButton) return;

        if(currentTabButton){
            currentTabButton.classList.remove("active");
        }
        switch(button.dataset.tab){
            case "home":
                buildHome(contentContainer);
                break;
            case "menu":
                buildMenu(contentContainer);
                break;
            default:
                console.error(`Unknown tab: ${button.dataset.tab}`);
                break;
        }
        button.classList.add("active");
        currentTabButton = button;
    }

    return {changeTab};
}());

window.clickMenu = function(){
    menuButton.dispatchEvent(new MouseEvent("click"));
}

const homeButton = document.querySelector("#home-button");
homeButton.dataset.tab = "home";
const menuButton = document.querySelector("#menu-button");
menuButton.dataset.tab = "menu";

homeButton.addEventListener("click", () => tabs.changeTab(homeButton));
menuButton.addEventListener("click", () => tabs.changeTab(menuButton));

menuButton.dispatchEvent(new MouseEvent("click"));