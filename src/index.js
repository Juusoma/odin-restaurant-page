import "./style.css";

const bgImage = document.querySelector(".bg-image");
const bgTravel = 5;
document.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth * 2 - 1) * bgTravel;
    const y = (e.clientY / window.innerHeight * 2 - 1) * bgTravel;
    const positionX = 50 + x;
    const positionY = 50 + y;
    bgImage.style["background-position"] = `${positionX}% ${positionY}%`;
});