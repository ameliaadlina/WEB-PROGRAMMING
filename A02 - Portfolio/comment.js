// JavaScript to handle form validation
document.querySelector('.feedback-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById('name').value.trim();
  const comments = document.getElementById('comments').value.trim();
  let errorMessage = '';

  // Check if both name and comments are empty
  if (name === '' && comments === '') {
    errorMessage = 'Please insert your name and comments.';
  } else if (name === '') {
    // Name is missing
    errorMessage = 'Please enter your name.';
  } else if (comments === '') {
    // Comments are missing
    errorMessage = 'Please enter your message.';
  }

  // If there is an error, show the error message
  if (errorMessage) {
    alert(errorMessage); // Show the error as an alert
  } else {
    // If both name and comment are filled
    alert('Thank you so much !!'); // Show the success message as an alert
  }
});
