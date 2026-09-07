// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu after clicking a link
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger');
            const navbar = document.querySelector('.navbar'); // Added navbar reference

            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                navbar.classList.remove('active'); // Remove active class from navbar
            }
        });
    });

    // Hamburger Menu Toggle for Mobile
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active'); // Add active class to navbar for potential styling
    });

    // Sticky Navbar on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

