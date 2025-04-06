// Login 

const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginBtn = document.querySelector('.login-btn');


loginBtn.addEventListener('click', login);


function login(e) {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    console.log(email)
    console.log(password)

    window.location.href = 'index.html';
}