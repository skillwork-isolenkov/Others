window.addEventListener('load', function () {
    let home = document.querySelector('.home-element');
    let about = document.querySelector('.about-element');
    let gallery = document.querySelector('.gallery-element');
    let register = document.querySelector('.register-element');
    let login = document.querySelector('.login-element');
    let contact = document.querySelector('.contact-element');

    home.addEventListener('click', openHome);
    about.addEventListener('click', openAbout);
    gallery.addEventListener('click', openGallery);
    register.addEventListener('click', openRegister);
    login.addEventListener('click', openLogin);
    contact.addEventListener('click', openContact);

    function openHome() {
        window.location.href = 'index.html';
    }

    function openAbout() {
        window.location.href = '../menu/about-project/index.html';
    }

    function openGallery() {
        window.location.href = '../menu/gallery/index.html';
    }

    function openRegister() {
        window.location.href = '../menu/register/index.html';
    }

    function openLogin() {
        window.location.href = '../menu/login/index.html';
    }

    function openContact() {
        window.location.href = '../menu/contact/index.html';
    }
})