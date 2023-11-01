/* nav bar transparente y blur */
window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        navbar.style.backdropFilter = 'blur(90px)';
        navbar.style.boxShadow = '#fff'
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.backdropFilter = 'blur(0)';
    }
}); 
