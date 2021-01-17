window.addEventListener('load', function () {
    let home = document.querySelector('.home-element');
    let about = document.querySelector('.about-element');
    let gallery = document.querySelector('.gallery-element');
    let register = document.querySelector('.register-element');
    let login = document.querySelector('.login-element');
    let contact = document.querySelector('.contact-element');

    let loginBtn = document.querySelector('.loginbtn');
    let registerBtn = document.querySelector('.registerbtn');

    let username = document.querySelector('#username');
    let password = document.querySelector('#psw');

    let registerSpan = document.querySelector('.register-span');
    let container = document.querySelector('.container');
    let signincontainer = document.querySelector('.signin');
    let registerConfirm = document.querySelector('main h2');

    let forgottenPassBtn = document.querySelector('.forgotten-pass');

    home.addEventListener('click', openHome);
    about.addEventListener('click', openAbout);
    gallery.addEventListener('click', openGallery);
    register.addEventListener('click', openRegister);
    login.addEventListener('click', openLogin);
    contact.addEventListener('click', openContact);

    loginBtn.addEventListener('click', loginBtnFunction);
    registerBtn.addEventListener('click', registerBtnFunction);
    forgottenPassBtn.addEventListener('click', forgottenPassword);


    function openHome() {
        window.location.href = '/My Projects/School Project/main/index.html';
    }

    function openAbout() {
        window.location.href = '/My Projects/School Project/menu/about-project/index.html';
    }

    function openGallery() {
        window.location.href = '/My Projects/School Project/menu/gallery/index.html';
    }

    function openRegister() {
        window.location.href = '/My Projects/School Project/menu/register/index.html';
    }

    function openLogin() {
        window.location.href = '/My Projects/School Project/menu/login/index.html';
    }

    function openContact() {
        window.location.href = '/My Projects/School Project/menu/contact/index.html';
    }


    function loginBtnFunction() {
        if (username.value !== '' && password.value !== '') {
            registerConfirm.innerHTML = 'Registration Confirmation Message';
            registerSpan.innerHTML = 'Your have Login Successfully!'
            container.style.display = 'none';
            signincontainer.style.display = 'none';
        }
    }

    function registerBtnFunction() {
        window.location.href = '/My Projects/School Project/menu/register/index.html';
    }

    function forgottenPassword() {
        window.location.href = '/My Projects/School Project/menu/forgotten-password/index.html';
    }
})