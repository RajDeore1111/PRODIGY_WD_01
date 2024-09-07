document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#222'; // Darker background color when scrolled
            navbar.style.padding = '10px 0'; // Reduced padding when scrolled
        } else {
            navbar.style.backgroundColor = '#333'; // Original background color
            navbar.style.padding = '15px 0'; // Original padding
        }
    });
});