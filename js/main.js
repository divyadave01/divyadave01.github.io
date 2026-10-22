document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Dark/Light Mode Theme Toggle
       ========================================================================== */
    const themeToggleBtn = document.querySelector('#theme-toggle .icon');
    const htmlElement = document.documentElement;
    
    // Check for saved user preference, otherwise use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerText = '☀️'; 
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        themeToggleBtn.innerText = '🌙'; 
    }

    themeToggleBtn.parentElement.addEventListener('click', () => {
        if (htmlElement.getAttribute('data-theme') === 'light') {
            htmlElement.setAttribute('data-theme', 'dark');
            themeToggleBtn.innerText = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            themeToggleBtn.innerText = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });

    /* ==========================================================================
       2. Mobile Navigation Menu (Hamburger)
       ========================================================================== */
    const navToggleBtn = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on hamburger click
    navToggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Change icon to X when open
        if (navMenu.classList.contains('active')) {
            navToggleBtn.textContent = '✕';
        } else {
            navToggleBtn.textContent = '☰';
        }
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggleBtn.textContent = '☰';
        });
    });

    /* ==========================================================================
       3. Scroll Reveal Animation (Optional, using Intersection Observer)
       ========================================================================== */
    // We will add classes to HTML elements later to use this, but it's ready here.
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length > 0) {
        const revealOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            });
        }, revealOptions);

        revealElements.forEach(el => {
            revealOnScroll.observe(el);
        });
    }

    /* ==========================================================================
       4. Footer Year & Form Handling
       ========================================================================== */
    // Automatically update the year in the footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});