window.addEventListener('load', function () {
    let home = document.querySelector('.home-link');
    let about = document.querySelector('.about-link');
    let menu = document.querySelector('.menu-link');
    let team = document.querySelector('.team-link');
    let gallery = document.querySelector('.gallery-link');
    let blog = document.querySelector('.blog-link');
    let reservation = document.querySelector('.reservation-link');
    let contact = document.querySelector('.contact-link');

    let bookBtn = document.querySelector('.btn');

    home.addEventListener('click', openHome);
    about.addEventListener('click', openAbout);
    menu.addEventListener('click', openMenu);
    team.addEventListener('click', openTeam);
    gallery.addEventListener('click', openGallery);
    blog.addEventListener('click', openBlog);
    reservation.addEventListener('click', openReservation);
    contact.addEventListener('click', openContact);

    bookBtn.addEventListener('click', btnFunc);

    function openHome() {
        window.location.href = './index.html';
    }

    function openAbout() {
        window.location.href = '../components/about-us/index.html';
    }

    function openMenu() {
        window.location.href = '../components/menu/index.html';
    }


    function openTeam() {
        window.location.href = '../components/team/index.html';
    }

    function openGallery() {
        window.location.href = '../components/gallery/index.html';
    }

    function openBlog() {
        window.location.href = '../components/blog/index.html';
    }

    function openReservation() {
        window.location.href = '../components/reservation/index.html';
    }

    function openContact() {
        window.location.href = '../components/contact-us/index.html';
    }

    function btnFunc() {
        window.location.href = '../components/reservation/index.html';
    }


})