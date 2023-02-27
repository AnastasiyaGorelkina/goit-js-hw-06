const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', (event) => {
    const inputCurrentLength = event.currentTarget.value.length;

    if (inputCurrentLength <= inputRef.dataset.length) {
        inputRef.classList.toggle('valid');
    } else {
        inputRef.classList.toggle('invalid');
    }  
});

