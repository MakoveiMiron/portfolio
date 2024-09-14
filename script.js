// Smooth scroll for internal links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skill circle animation on load
document.querySelectorAll('.skill-circle').forEach(skill => {
    const skillLevel = skill.getAttribute('data-skill-level');
    skill.style.setProperty('--skill-level', skillLevel);
});

/// Initialize EmailJS
emailjs.init('ZIDCvq_z1aaxYXD13'); // Replace 'your-api-key' with your actual API key

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;

    emailjs.sendForm('service_7shkhou', 'template_xpdcguy', form)
        .then(function(response) {
            console.log('Success:', response);
            alert('Message sent successfully!');
            form.reset(); // Reset form fields
        }, function(error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again later.');
        });
});