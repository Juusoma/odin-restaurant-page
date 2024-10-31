import "./style.css";

const bgImage = document.querySelector(".bg-image");
const bgTravel = 10;
document.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth) * bgTravel;
    const y = (e.clientY / window.innerHeight) * bgTravel;
    bgImage.style["background-position"] = `${x}px ${y}px`;
});