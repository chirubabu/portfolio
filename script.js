document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const formMessage = document.getElementById('formMessage');

        if (name && email && message) {
            formMessage.textContent = 'Thank you for reaching out, ${name}! I will get back to you at ${email}.';
            formMessage.style.color = 'green';

            // Clear form
            document.getElementById('contactForm').reset();
        } else {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = 'red';
        }
    });
});