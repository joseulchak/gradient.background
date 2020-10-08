var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var currCss = document.querySelector(".currCss");
var body = document.getElementById("bg");

function setBgColor() {
    body.style.background = "linear-gradient(to right, " + color1.value +", " + color2.value + ")";
    currCss.textContent = "linear-gradient(to right, " + color1.value +", " + color2.value + ")";
}

color1.addEventListener("input", setBgColor);
color2.addEventListener("input", setBgColor);

