let icon = document.getElementById("icon");
let password = document.getElementById("pswd")

icon.onclick = function () {
    if (password.type === "password") {
        password.type = "text"
        icon.className = "fa-solid fa-eye"
    } else {
        password.type = "password"
        icon.className = "fa-solid fa-eye-slash"
    }
}