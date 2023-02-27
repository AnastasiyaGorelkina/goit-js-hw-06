function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const creationPanelRef = document.querySelector('#controls');
const boxOfBoxesRef = document.querySelector('#boxes');

console.log(creationPanelRef.children);

const inputRef = creationPanelRef.firstElementChild;
const btnCreateRef = creationPanelRef.children[1];
const btnDestroyRef = creationPanelRef.lastElementChild;

btnCreateRef.addEventListener('click', onGetAmount);
btnDestroyRef.addEventListener('click', onDestroyBoxes);

function onGetAmount() {
  let amount = inputRef.value;
  return createBoxes(amount);
};
function onDestroyBoxes() {
  boxOfBoxesRef.innerHTML = '';
}

function createBoxes(amount) {
  const defaultSize = 30;
  let newSize = 0;
  for (let i = 0; i < amount; i += 1){
    let box = document.createElement('div');
    newSize = defaultSize + i * 10;
    box.style = `width: ${newSize}px; height: ${newSize}px;
    background-color: ${getRandomHexColor()}`;
    boxes.append(box);
  }
}
