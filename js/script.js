const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (nameInput.value.trim() === '') {
    alert('Please enter your name');
    return;
  }

  if (emailInput.value.trim() === '' ||!validateEmail(emailInput.value)) {
    alert('Please enter a valid email address');
    return;
  }

  form.submit();
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}