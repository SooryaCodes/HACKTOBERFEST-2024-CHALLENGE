function togglePassword() {
    const passwordField = document.getElementById("password");
    const icon = document.querySelector(".password-toggle");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("ri-eye-off-line");
        icon.classList.add("ri-eye-line");
    } else {
        passwordField.type = "password";
        icon.classList.remove("ri-eye-line");
        icon.classList.add("ri-eye-off-line");
    }
}
