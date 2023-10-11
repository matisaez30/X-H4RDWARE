const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLoguin-popup');
const iconClose = document.querySelector('.icon-close');
const btnOpenResponsive = document.querySelector('.hamburguesa');
const navbar = document.querySelector('.nav-container');
const btnClose = document.querySelector('.btn-close');  


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    document.querySelector('.btnLoguin-popup').innerHTML = "Registrarse";
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    document.querySelector('.btnLoguin-popup').innerHTML = "Login";
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

btnOpenResponsive.addEventListener('click', () => {
    navbar.classList.add('active');
});

btnClose.addEventListener('click', () => {
    navbar.classList.remove('active');
});