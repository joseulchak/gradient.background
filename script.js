var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var currCss = document.querySelector(".currCss");
var body = document.getElementById("bg");
var randomButton = document.querySelector(".randomButton");

function setBgColor() {
    body.style.background = "linear-gradient(to right, " + color1.value +", " + color2.value + ")";
    currCss.textContent = "linear-gradient(to right, " + color1.value +", " + color2.value + ")";
}

function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}

function setRandomColor() {
    color1.value = "#"+randomColor();
    color2.value  = "#"+randomColor();
    body.style.background = "linear-gradient(to right, " + color1.value +", " + color2.value + ")";
    currCss.textContent = "linear-gradient(to right, " + color1.value +", " + color2.value + ")";
}

setBgColor();

color1.addEventListener("input", setBgColor);
color2.addEventListener("input", setBgColor);

randomButton.addEventListener("click", setRandomColor);

randomButton.addEventListener("mouseenter", () => {
    randomButton.style.background = "#"+randomColor();
});