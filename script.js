const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const currenBg = document.querySelector("h3");
const body = document.querySelector("body");

const changeColor = () => 
{
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	currenBg.textContent = body.style.background + `;`;
}

color1.addEventListener("change", changeColor);
color2.addEventListener("change", changeColor);