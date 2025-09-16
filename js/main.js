document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-btn');
    const navbar = document.getElementById('main-navbar');
    if (hamburger && navbar) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navbar.classList.toggle('open');
            document.body.classList.toggle('menu-open');
        });
        navbar.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navbar.classList.remove('open');
                document.body.classList.remove('menu-open');
            });
        });
    }
});
