// write your JavaScript here
// script.js
let currentStep = 0;

function showStep(step) {
  const steps = document.querySelectorAll('.step');
  steps[currentStep].style.display = 'none';
  currentStep = step;
  steps[currentStep].style.display = 'block';
}

function moveStep(step) {
  if (step === 1 && !validateStep(currentStep)) return;
  if (step === 1 && currentStep + step !== 4) {
    document
      .querySelector(`.form_${currentStep + step}_progessbar`)
      .classList.add('active');
    document
      .querySelector(`.line_${currentStep + step}_progessbar`)
      .classList.add('active');
  }
  if (currentStep + step === 4) {
    document.querySelector('.progress').style.display = 'none';
  }
  showStep(currentStep + step);

  updateReview();
  if (step === -1) {
    document
      .querySelector(
        `.form_${currentStep - step === 0 ? 1 : currentStep - step}_progessbar`
      )
      .classList.remove('active');
    document
      .querySelector(
        `.line_${currentStep - step === 0 ? 1 : currentStep - step}_progessbar`
      )
      .classList.remove('active');
  }
}

function validateStep(step) {
  // Implement validation logic for each step here
  if (step === 0) {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const github = document.getElementById('github').value;

    // Example: Check if required fields are not empty
    if (!fullName || !email || !phone || !github) {
      alert('Please fill in all fields.');
      return false;
    }
  }

  return true;
}

function updateReview() {
  // Update the review section with user's input
  const reviewFullName = document.getElementById('reviewFullName');
  const reviewEmail = document.getElementById('reviewEmail');
  const reviewPhone = document.getElementById('reviewPhone');
  const reviewGithub = document.getElementById('reviewGithub');
  const reviewLevel = document.getElementById('reviewLevel');
  const reviewPreferences = document.getElementById('reviewPreferences');

  reviewFullName.textContent = document.getElementById('fullName').value;
  reviewEmail.textContent = document.getElementById('email').value;
  reviewPhone.textContent = document.getElementById('phone').value;
  reviewGithub.textContent = document.getElementById('github').value;
  reviewLevel.textContent = document.querySelector(
    'input[name="level"]:checked'
  ).value;

  const preferences = document.querySelectorAll(
    'input[name="preference"]:checked'
  );
  const preferenceValues = Array.from(preferences)
    .map((pref) => pref.value)
    .join(', ');
  reviewPreferences.textContent = preferenceValues;
}

// Initialize the form
showStep(currentStep);
