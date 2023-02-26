const decrementBthRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
let valueRef = document.querySelector('#value');

let counterValue = 0;

decrementBthRef.addEventListener('click', () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
});

incrementBtnRef.addEventListener('click', () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
});

