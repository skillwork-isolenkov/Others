window.addEventListener('load', function () {
    let home = document.querySelector('.home-element');
    let about = document.querySelector('.about-element');
    let gallery = document.querySelector('.gallery-element');
    let register = document.querySelector('.register-element');
    let login = document.querySelector('.login-element');
    let contact = document.querySelector('.contact-element');

    let sendEmailBtn = document.querySelector('.sendemail');

    let yourName = document.querySelector('#name');
    let yourEmail = document.querySelector('#email');
    let yourText = document.querySelector('.textarea');

    let contactSpan = document.querySelector('.contact-span');
    let container = document.querySelector('.container');
    let contactUs = document.querySelector('main h2');

    home.addEventListener('click', openHome);
    about.addEventListener('click', openAbout);
    gallery.addEventListener('click', openGallery);
    register.addEventListener('click', openRegister);
    login.addEventListener('click', openLogin);
    contact.addEventListener('click', openContact);

    sendEmailBtn.addEventListener('click', sendEmailFunction);

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

    function sendEmailFunction() {
        if (yourName.value !== '' && yourEmail.value !== '' && yourText !== '') {
            contactUs.innerHTML = 'Contact Confirmation Message';
            contactSpan.innerHTML = 'We got your message. We will contact you shortly!'
            container.style.display = 'none';
        }
    }
})