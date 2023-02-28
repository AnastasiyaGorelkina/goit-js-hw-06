const inputRef = document.querySelector('#validation-input');
const validValue = inputRef.getAttribute('data-length');

inputRef.addEventListener('blur', (event) => {
    const inputCurrentLength = event.currentTarget.value.length;

    if (inputCurrentLength === Number(validValue)) {
        inputRef.classList.add('valid') || inputRef.classList.replace('invalid', 'valid');
    } else {
        inputRef.classList.add('invalid') || inputRef.classList.replace('valid', 'invalid');
    }  
});

