// Function to show registration form based on role
function showForm(role) {
    document.getElementById('home').classList.add('hidden');
    if (role === 'serviceUser') {
        document.getElementById('serviceUser-form').classList.remove('hidden');
    } else if (role === 'serviceProvider') {
        document.getElementById('serviceProvider-form').classList.remove('hidden');
    }
}

// Function to show login form
function showLoginForm(role) {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('serviceUser-form').classList.add('hidden');
    document.getElementById('serviceProvider-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

// Function to show sign up form
function showSignUpForm() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
}

// Event listener for service user registration form submission
document.getElementById('serviceUserRegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Service User Registered Successfully!');
});

// Event listener for service provider registration form submission
document.getElementById('serviceProviderRegistrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Service Provider Registered Successfully!');
});

// Event listener for login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Logged In Successfully!');
});

// Function for social login (redirects to respective provider's login page)
function socialLogin(provider) {
    const urlMap = {
        google: 'https://accounts.google.com/o/oauth2/auth',
        facebook: 'https://www.facebook.com/v2.12/dialog/oauth',
        microsoft: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
        apple: 'https://appleid.apple.com/auth/authorize'
    };
    window.location.href = urlMap[provider];
}

// Function to fetch places using Google Places Autocomplete
function fetchPlaces(inputId) {
    const inputElement = document.getElementById(inputId);
    const autocomplete = new google.maps.places.Autocomplete(inputElement, { types: ['(regions)'] });

    autocomplete.addListener('place_changed', function() {
        const place = autocomplete.getPlace();
        console.log(place);
    });
}

// Event listener for mode of service change
document.getElementById('modeOfService').addEventListener('change', function() {
    const serviceDetails = document.getElementById('serviceDetails');
    const selectedService = this.value;
    serviceDetails.innerHTML = '';

    if (selectedService === 'health') {
        serviceDetails.innerHTML = `
            <label for="healthService">Health Service Type:</label>
            <select id="healthService" name="healthService" required>
                <option value="clinic">Clinic</option>
                <option value="doctor">Doctor</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="drugs">Drugs</option>
            </select>
        `;
    } else if (selectedService === 'education') {
        serviceDetails.innerHTML = `
            <label for="educationService">Education Service Type:</label>
            <select id="educationService" name="educationService" required>
                <option value="school">School</option>
                <option value="tutor">Tutor</option>
                <option value="materials">Learning Materials</option>
                <option value="onlineCourses">Online Courses</option>
            </select>
        `;
    } else if (selectedService === 'transport') {
        serviceDetails.innerHTML = `
            <label for="transportService">Transport Service Type:</label>
            <select id="transportService" name="transportService" required>
                <option value="auto">Auto</option>
                <option value="bike">Bike</option>
                <option value="car">Car</option>
                <option value="bus">Bus</option>
                <option value="air">Air</option>
            </select>
        `;
    } else if (selectedService === 'finance') {
        serviceDetails.innerHTML = `
            <label for="financeService">Finance Service Type:</label>
            <select id="financeService" name="financeService" required>
                <option value="banking">Banking</option>
                <option value="tax">Tax</option>
                <option value="insurance">Insurance</option>
            </select>
        `;
    }
});

// Initialize the form on page load
document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization logic here if needed
});
