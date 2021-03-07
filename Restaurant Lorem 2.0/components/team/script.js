window.addEventListener('load', function () {
    let home = document.querySelector('.home-link');
    let about = document.querySelector('.about-link');
    let menu = document.querySelector('.menu-link');
    let team = document.querySelector('.team-link');
    let gallery = document.querySelector('.gallery-link');
    let blog = document.querySelector('.blog-link');
    let reservation = document.querySelector('.reservation-link');
    let contact = document.querySelector('.contact-link');

    let careersBtn = document.querySelector('.careers-btn');

    home.addEventListener('click', openHome);
    about.addEventListener('click', openAbout);
    menu.addEventListener('click', openMenu);
    team.addEventListener('click', openTeam);
    gallery.addEventListener('click', openGallery);
    blog.addEventListener('click', openBlog);
    reservation.addEventListener('click', openReservation);
    contact.addEventListener('click', openContact);

    careersBtn.addEventListener('click', careersFunc);

    function openHome() {
        window.location.href = '../../main-page/index.html';
    }

    function openAbout() {
        window.location.href = '../about-us/index.html';
    }

    function openMenu() {
        window.location.href = '../menu/index.html';
    }

    function openTeam() {
        window.location.href = './index.html';
    }

    function openGallery() {
        window.location.href = '../gallery/index.html';
    }

    function openBlog() {
        window.location.href = '../blog/index.html';
    }

    function openReservation() {
        window.location.href = '../reservation/index.html';
    }

    function openContact() {
        window.location.href = '../contact-us/index.html';
    }

    function careersFunc() {
        window.location.href = '../contact-us/index.html';
    }
})