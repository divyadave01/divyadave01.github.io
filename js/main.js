document.addEventListener('DOMContentLoaded', () => {


    /* ==========================================================================
       3. Footer Year
       ========================================================================== */
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* ==========================================================================
       4. Safe Scroll Animations
       ========================================================================== */
    const revealElements = document.querySelectorAll('.section, .project-card, .skill-card, .cert-card');
    
    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    /* ==========================================================================
       5. Advanced 3D Tilt Effect
       ========================================================================== */
    if (window.matchMedia("(hover: hover)").matches) {
        const tiltCards = document.querySelectorAll('.project-card, .skill-card, .cert-card');

        tiltCards.forEach(card => {
            const shine = document.createElement('div');
            shine.classList.add('card-shine');
            card.appendChild(shine);

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const rotateX = ((y - (rect.height / 2)) / (rect.height / 2)) * -10;
                const rotateY = ((x - (rect.width / 2)) / (rect.width / 2)) * 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                shine.style.background = 'none';
            });
        });
    }
    /* ==========================================================================
       6. Bulletproof Theme Toggle
       ========================================================================== */
    // Attach event to the button AND the icon just in case
    const forceToggle = () => {
        if (htmlElement.getAttribute('data-theme') === 'light') {
            htmlElement.setAttribute('data-theme', 'dark');
            if(icon) icon.innerText = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            if(icon) icon.innerText = '🌙';
            localStorage.setItem('theme', 'light');
        }
    };

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', forceToggle);
    if (icon) icon.addEventListener('click', forceToggle);

    /* ==========================================================================
       7. Particles.js Background
       ========================================================================== */
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#dda15e" }, /* Matches your clay accent color */
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#606c38", /* Matches your olive green */
                    "opacity": 0.4,
                    "width": 1
                },
                "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" }
                },
                "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } } }
            },
            "retina_detect": true
        });
    }    

});
