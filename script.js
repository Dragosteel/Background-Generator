var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandomGradient() {
	var randomColor1 = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	var randomColor2 = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	body.style.background = 
	"linear-gradient(to right, " 
	+ randomColor1 
	+ ", " 
	+ randomColor2 
	+ ")";

	color1.setAttribute("value", randomColor1);
	color2.setAttribute("value", randomColor2);
	css.textContent = body.style.background + ";";
}

function randomButton() {
	var button = document.createElement("button");
	var br = document.createElement("br");
	button.appendChild(document.createTextNode("Random Colors"));
	button.style.marginBottom = "2vh";
	body.insertBefore(br, color1);
	body.insertBefore(button, br);
	button.addEventListener("click", setRandomGradient);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
setGradient();
randomButton();