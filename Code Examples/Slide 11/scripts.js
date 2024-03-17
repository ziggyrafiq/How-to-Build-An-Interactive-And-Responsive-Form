// JavaScript code for real-time feedback during form input
document.getElementById('name').addEventListener('input', function () {
  let name = this.value.trim();
  let feedbackElement = document.getElementById('name-feedback');

  if (name === ''||name=='a') {
    feedbackElement.textContent = 'Name is required';
  } else {
    feedbackElement.textContent = ''; // Clear the feedback
  }
});

document.getElementById('email').addEventListener('input', function () {
  let email = this.value.trim();
  let feedbackElement = document.getElementById('email-feedback');
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    feedbackElement.textContent = 'Enter a valid email address';
  } else {
    feedbackElement.textContent = ''; // Clear the feedback
  }
});


