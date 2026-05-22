// Fixed credentials for login
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "admin123";

const loginForm = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

function displayError(message) {
  const existingError = document.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  const errorDiv = document.createElement("div");
  errorDiv.className =
    "error-message mt-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4";
  errorDiv.setAttribute("role", "alert");
  errorDiv.innerHTML = `
        <p class="font-bold">Error</p>
        <p>${message}</p>
    `;

  // Insert error message after the form
  loginForm.insertAdjacentElement("afterend", errorDiv);

  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

function clearError() {
  const existingError = document.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }
}

// Handle form submission
loginForm.addEventListener("submit", function (event) {
  // Prevent default form submission
  event.preventDefault();

  clearError();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate that fields are not empty
  if (!username || !password) {
    displayError("Please enter both username and password.");
    return;
  }

  // Check credentials
  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    window.location.href = "issue-tracker.html";
  } else {
    displayError("Invalid username or password. Please try again.");

    passwordInput.value = "";
    passwordInput.focus();
  }
});

usernameInput.addEventListener("input", clearError);
passwordInput.addEventListener("input", clearError);
