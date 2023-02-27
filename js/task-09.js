function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const nameColorRef = document.querySelector('.color');
const btnChangeColorRef = document.querySelector('.change-color');

btnChangeColorRef.addEventListener('click', changeColor);

function changeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
nameColorRef.textContent = getRandomHexColor()
};


