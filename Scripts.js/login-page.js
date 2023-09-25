const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-message");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Test" && password === "Pass") {
        alert("You have successfully logged in.");
        location.replace("/SelectionPagev4.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})