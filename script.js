// ===================================
// NAVIGATION SCROLL EFFECT
// ===================================

const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ===================================
// SMOOTH SCROLL FOR NAVIGATION
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections except hero
document.querySelectorAll('section:not(.hero)').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(60px)';
    section.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(section);
});

// ===================================
// STAGGER ANIMATION FOR CARDS
// ===================================

const cards = document.querySelectorAll('.skill-card, .project-card, .stat-item, .timeline-item, .contact-card');

cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.12}s`;
    observer.observe(card);
});

// ===================================
// PARALLAX EFFECT FOR BLOBS
// ===================================

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

function animateBlobs() {
    const blobs = document.querySelectorAll('.organic-blob');
    
    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 18;
        const x = mouseX * speed;
        const y = mouseY * speed;
        blob.style.transform = `translate(${x}px, ${y}px)`;
    });
    
    requestAnimationFrame(animateBlobs);
}

// Start the animation
animateBlobs();

// ===================================
//  ADD LOADING ANIMATION
// ===================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===================================
// CURSOR TRAIL EFFECT
// ===================================

// 
/*
const trail = [];
const trailLength = 10;

for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail-dot';
    document.body.appendChild(dot);
    trail.push(dot);
}

document.addEventListener('mousemove', (e) => {
    trail.forEach((dot, index) => {
        setTimeout(() => {
            dot.style.left = e.clientX + 'px';
            dot.style.top = e.clientY + 'px';
            dot.style.opacity = (trailLength - index) / trailLength;
        }, index * 20);
    });
});
*/