const nameImputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameImputRef.addEventListener('input', (event) => {
    nameOutputRef.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        nameOutputRef.textContent = 'Anonymous'
    } 
});
