const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
console.log(textRef);

inputRef.addEventListener('input', (event) => {
    const inputCurrentSize = event.currentTarget.value;
    console.log(inputCurrentSize);

    textRef.style.fontSize = `${inputCurrentSize}px`;
});