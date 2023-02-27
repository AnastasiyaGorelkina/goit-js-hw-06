const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', (event) => {
    const inputCurrentLength = event.currentTarget.value.length;

    if (inputCurrentLength <= inputRef.dataset.length) {
        inputRef.classList.add('valid') || inputRef.classList.replace('invalid', 'valid');
    } else {
        inputRef.classList.add('invalid') || inputRef.classList.replace('valid', 'invalid');
    }  
});

