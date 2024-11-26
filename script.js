document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.navbar, .navbar-left, .navbar-right, .nav-btn, .carousel-container, .carousel-content, .carousel-content h1, .carousel-content h2, .carousel-content p, .who-we-container, .who-image img, .who-we-content, .who-we-container h1, .who-we-container h2, .who-we-container p');
    const loadAnimate = document.querySelectorAll('.carousel-container, .carousel-content, .carousel-content h1, .carousel-content h2, .carousel-content p')

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateElements() {
        elementsToAnimate.forEach(el => {
            if (el.classList.contains('navbar')) {
                el.classList.add('fade-in');
            } else if (el.classList.contains('navbar-left')) {
                el.classList.add('slide-in-left');
            } else if (el.classList.contains('navbar-right')) {
                el.classList.add('slide-in-right');
            } else if (el.classList.contains('nav-btn')) {
                el.classList.add('fade-in');
            } else if (el.classList.contains('carousel-container')) {
                el.classList.add('fade-in');
            } else if (el.classList.contains('carousel-content')) {
                el.classList.add('slide-in-left');
            } else if (el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'P') {
                el.classList.add('fade-in');
            } else if (el.classList.contains('who-we-container')) {
                el.classList.add('fade-in');
            } else if (el.classList.contains('who-image')) {
                el.classList.add('slide-in-left');
            } else if (el.classList.contains('who-we-content')) {
                el.classList.add('slide-in-right');
            }
            if (el.classList.contains('carousel-container')) {
                el.classList.add('fade-in');
            } else if (el.classList.contains('carousel-content')) {
                el.classList.add('slide-in-left');
            } else if (el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'P') {
                el.classList.add('fade-in');
            }
        });
    }

    window.addEventListener('scroll', animateElements);
    animateElements();
});