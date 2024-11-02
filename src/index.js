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