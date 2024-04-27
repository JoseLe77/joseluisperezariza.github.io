const menu = document.querySelector('.header_nav');
const menuHeight = menu.offsetHeight;

window.addEventListener('scroll', function() {
    if (window.scrollY > menuHeight) {
        menu.classList.add('sticky');
    } else {
        menu.classList.remove('sticky');
    }
});