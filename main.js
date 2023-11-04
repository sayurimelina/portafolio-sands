/* nav bar transparente y blur */
window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        navbar.style.backdropFilter = 'blur(90px)';
        navbar.style.boxShadow = '#fff'
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.backdropFilter = 'blur(0)';
    }
}); 

/*
Desactiva el click derecho

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
*/