// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('active');
    });
});

// EmailJS Contact Form
emailjs.init('O7yXcxC5rgrmt7waX'); // 🔑 Replace with your EmailJS public key

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const status = document.getElementById('form-status');
    status.style.color = '#a0b4e8';
    status.textContent = 'Sending...';

    emailjs.sendForm('service_e4b3wwl', 'template_er37llw', this)
        .then(() => {
            status.style.color = '#667EEA';
            status.textContent = '✅ Message sent successfully!';
            this.reset();
        })
        .catch((error) => {
            console.error('EmailJS error:', error);
            status.style.color = '#ff6b6b';
            status.textContent = '❌ Failed to send. Please try again.';
        });
});

// Smooth scrolling for navigation links
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

// Add active class to navigation on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
