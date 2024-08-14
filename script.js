const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  let isValid = true;

  if (nameValue === "") {
    setError(nameInput, "Name is required");
    isValid = false;
  } else {
    setSuccess(nameInput);
  }

  if (emailValue === "") {
    setError(emailInput, "Email is required");
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError(emailInput, "Email is not valid");
    isValid = false;
  } else {
    setSuccess(emailInput);
  }

  if (passwordValue === "") {
    setError(passwordInput, "Password is required");
    isValid = false;
  } else if (passwordValue.length < 6) {
    setError(passwordInput, "Password must be at least 6 characters");
    isValid = false;
  } else {
    setSuccess(passwordInput);
  }

  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
}

function setError(input, message) {
  const formGroup = input.parentElement;
  const errorDisplay = formGroup.querySelector(".error-message");
  errorDisplay.textContent = message;
  errorDisplay.style.display = "block";
}

function setSuccess(input) {
  const formGroup = input.parentElement;
  const errorDisplay = formGroup.querySelector(".error-message");
  errorDisplay.textContent = "";
  errorDisplay.style.display = "none";
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
