// Our JavaScript Code for checking empty fields
function validateForm() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  if (name === '' || email === '' || password === '') {
    alert('Please fill in all required fields.');
    return false;
  }

  // We Can Continue with Our Form Submission or Additional Validation If
  // We Want to Validate Any Further...
}
