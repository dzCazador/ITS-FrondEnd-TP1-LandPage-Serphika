document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const menuIcon = document.getElementById('menuIcon');
    const column1 = document.querySelector('.column1');
    const column2 = document.querySelector('.column2');
    const column3 = document.querySelector('.column3');
    const column4 = document.querySelector('.column4');

    menuButton.addEventListener('click', function (event) {
        event.preventDefault();


        // Cambiar el ícono
        if (menuIcon.classList.contains('fa-bars')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
            column1.classList.replace('slide-right','slide-left');
            column2.classList.replace('slide-right','slide-left');
            column3.classList.replace('slide-right','slide-left');
            column4.classList.replace('slide-right','slide-left');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            column1.classList.replace('slide-left','slide-right');
            column2.classList.replace('slide-left','slide-right');
            column3.classList.replace('slide-left','slide-right');
            column4.classList.replace('slide-left','slide-right');
        }
    });
});