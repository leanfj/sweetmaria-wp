var headerCollapse = document.getElementById('nav-target');

window.addEventListener('scroll', function(e) {
    if (window.scrollY !== 0) {
        headerCollapse.removeAttribute('class', 'collapse-header');
    } else {
        headerCollapse.setAttribute('class', 'collapse-header');
    }
});
