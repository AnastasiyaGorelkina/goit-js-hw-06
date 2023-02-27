const formRef = document.querySelector('.login-form');
console.log(formRef);

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

  const { email, password } = event.currentTarget;
  
    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!')
    }

  const inputValue = {
    email: `${email.value}`,
    password: `${password.value}`,
  }
  console.log(inputValue);
  event.currentTarget.reset();
};

