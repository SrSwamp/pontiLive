
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

const registerForm = document.getElementById("register-form");
const registerButton = document.getElementById("register-form-submit");
const registerErrorMsg = document.getElementById("register-error-msg");

registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = registerForm.username.value;
    const password = registerForm.password.value;

    if (password === confirmarpassword) {
        alert("You have successfully registered.");
        location.reload();
    } else {
        registerErrorMsg.style.opacity = 1;
    }
})