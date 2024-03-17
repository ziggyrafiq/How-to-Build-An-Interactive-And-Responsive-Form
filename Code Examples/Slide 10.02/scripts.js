// Our JavaScript Code for checking empty fields
function validateForm() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  if (name === '' || email === '' || password === '') {
    alert('Please fill in all required fields.');
    return false;
  }

  validateEmail();
}

// Our JavaScript code for ensuring proper email format
function validateEmail() {
  let email = document.getElementById('email').value;
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }
}

