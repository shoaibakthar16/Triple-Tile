// ============================================
// HAMBURGER MENU & NAVIGATION
// ============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle Mobile Menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close Menu When Link is Clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scroll for Navigation Links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ============================================
// PARTICLE EFFECT GENERATOR
// ============================================
function createParticles(x, y) {
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '9999';
        
        const colors = ['#6B4CE8', '#FF6B9D', '#00D9FF'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.background = color;
        particle.style.borderRadius = '50%';
        particle.style.boxShadow = `0 0 10px ${color}`;
        
        document.body.appendChild(particle);
        
        const angle = (i / 8) * Math.PI * 2;
        const velocity = 5 + Math.random() * 5;
        const tx = Math.cos(angle) * velocity * 30;
        const ty = Math.sin(angle) * velocity * 30;
        
        let frame = 0;
        const animate = () => {
            frame++;
            const progress = frame / 20;
            particle.style.opacity = 1 - progress;
            particle.style.transform = `translate(${tx * progress}px, ${ty * progress}px) scale(${1 - progress})`;
            
            if (frame < 20) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        animate();
    }
}

// ============================================
// GAME MOCKUP INTERACTIVITY
// ============================================
const levelBtn = document.querySelector('.level-btn');
const coinBadge = document.querySelector('.coin-badge');
const gameIcons = document.querySelectorAll('.icon-btn');

if (levelBtn) {
    levelBtn.addEventListener('click', () => {
        levelBtn.innerText = 'STARTING...';
        levelBtn.style.background = 'linear-gradient(to bottom, #4CAF50, #45a049)';
        levelBtn.style.boxShadow = '0 5px 0 #2e7d32, 0 10px 20px rgba(0,0,0,0.3)';
        
        setTimeout(() => {
            levelBtn.innerText = 'LEVEL 1';
            levelBtn.style.background = 'linear-gradient(to bottom, #FF914D, #FF7020)';
            levelBtn.style.boxShadow = '0 10px 0 #D35400, 0 20px 30px rgba(0,0,0,0.3)';
            alert('Triple Tile Match Puzzle Demo Starting! (Coming Soon)');
        }, 1500);
    });
}

gameIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const type = icon.classList[1].split('-')[0];
        alert(`Opening ${type.charAt(0).toUpperCase() + type.slice(1)}...`);
    });
});

if (coinBadge) {
    coinBadge.addEventListener('click', () => {
        alert('You have 1550 coins! Match more tiles to earn more.');
    });
}

// ============================================
// PARALLAX SCROLL EFFECT
// ============================================
window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    const scrollPosition = window.scrollY;
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrollPosition * 0.1}px) rotateZ(${scrollPosition * 0.01}deg)`;
    }
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.feature-card, .hero, .download').forEach(el => {
    observer.observe(el);
});

// ============================================
// MOUSE TRACKING FOR INTERACTIVE GLOW
// ============================================
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// ============================================
// SMOOTH PAGE LOAD ANIMATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Animate feature cards
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Add glow effect to buttons on hover
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.boxShadow = `
                0 0 30px rgba(107, 76, 232, 0.8),
                0 0 60px rgba(0, 217, 255, 0.5),
                inset 0 0 30px rgba(255, 255, 255, 0.2)
            `;
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
});

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// POINTER GLOW EFFECT
// ============================================
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--accent-color);
        border-bottom: 2px solid var(--accent-color);
        text-shadow: 0 0 10px rgba(0, 217, 255, 0.6);
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// RANDOM FLOATING ANIMATION DELAY
// ============================================
document.querySelectorAll('.tile').forEach((tile, index) => {
    const delay = index * 0.2;
    tile.style.animationDelay = delay + 's';
});
