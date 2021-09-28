var css = document.querySelector(".result-code");
var color1 = document.querySelector(".input-color1");
var color2 = document.querySelector(".input-color2");
var gradient = document.getElementById("gradient");
var typeGrad = document.getElementById("Gradient-Type")

// linear-gradient(type-of-grad, color1, color2)
function setGradient() {
 gradient.style.background = 
 typeGrad.value
 + color1.value 
 + ", " 
 + color2.value 
 + ")";

 css.textContent = gradient.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
typeGrad.addEventListener("change", setGradient);