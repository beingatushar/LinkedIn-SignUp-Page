const showSwitch = document.querySelector(".show-password");
const password = document.querySelector('input[type="password"');
showSwitch.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(password);
    console.log(password.type);
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
})