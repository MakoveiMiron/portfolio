document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.skill-circle').forEach(skill => {
    const skillLevel = skill.getAttribute('data-skill-level');
    skill.style.setProperty('--skill-level', skillLevel);
});

//emailjs.init('ZIDCvq_z1aaxYXD13');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;

    emailjs.sendForm('service_eevklr2', 'template_xpdcguy', form)
        .then(function(response) {
            console.log('Success:', response);
            alert('Message sent successfully!');
            form.reset(); 
        }, function(error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again later.');
        });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

