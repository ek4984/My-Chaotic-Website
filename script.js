// Show privacy popup
window.onload = () => {
    document.getElementById('privacyPopup').style.display = 'block';
};

// Handle privacy popup
function acceptPrivacy() {
    alert('Thank you for accepting privacy terms.');
    document.getElementById('privacyPopup').style.display = 'none';
}

function denyPrivacy() {
    alert('You denied privacy terms.');
    document.getElementById('privacyPopup').style.display = 'none';
}

// Post comments
function postComment() {
    const commentBox = document.querySelector('textarea');
    const commentList = document.getElementById('commentList');

    if (commentBox.value.trim() !== '') {
        const newComment = document.createElement('li');
        newComment.textContent = commentBox.value;
        commentList.appendChild(newComment);
        commentBox.value = ''; // Clear the textarea
    } else {
        alert('Comment cannot be empty.');
    }
}
// Frustrating password criteria
const passwordHints = [
    {
        regex: /.{16,}/,
        message: "Password must be at least 16 characters long."
    },
    {
        regex: /[\u{1F600}-\u{1F64F}]/u,
        message: "Password must include at least one emoji (e.g., 😊)."
    },
    {
        regex: /^(?!.*(.).*\1).*$/,
        message: "Password cannot contain repeated letters."
    },
    {
        regex: /[A-Z]/,
        message: "Password must include at least one uppercase letter."
    },
    {
        regex: /[a-z]/,
        message: "Password must include at least one lowercase letter."
    },
    {
        regex: /\d/,
        message: "Password must include at least one number."
    },
    {
        regex: /[\W_]/,
        message: "Password must include at least one special character."
    }
];

document.getElementById('registerForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const passwordInput = document.getElementById('password').value;

    // Validate password
    let errors = passwordHints.filter(hint => !hint.regex.test(passwordInput));
    if (errors.length > 0) {
        alert(
            "Your password doesn't meet the following criteria:\n" +
            errors.map(error => error.message).join("\n")
        );
    } else {
        alert("Registration successful!");
    }
});
// Function to display the privacy modal
window.onload = function () {
    const privacyModal = document.getElementById('privacyModal');
    const privacyAccepted = localStorage.getItem('privacyAccepted');

    if (!privacyAccepted) {
        privacyModal.classList.add('show'); // Show the modal
    }
};

// Function to accept the privacy terms
function acceptPrivacy() {
    const privacyModal = document.getElementById('privacyModal');
    privacyModal.classList.remove('show'); // Hide the modal
    localStorage.setItem('privacyAccepted', 'true'); // Save acceptance in local storage
}
// Set default theme
window.onload = function () {
    const savedTheme = localStorage.getItem('theme') || 'red';
    setTheme(savedTheme);
};

// Function to change theme
function setTheme(theme) {
    document.body.className = theme; // Apply the theme as a body class
    localStorage.setItem('theme', theme); // Save the theme in local storage
}

// Change theme dynamically
function changeTheme(theme) {
    setTheme(theme);
}
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Username validation
    if (username.length !== 8 || !/^[a-zA-Z0-9]+$/.test(username)) {
        alert("Username must be exactly 8 characters long and contain only letters and numbers.");
        return false;
    }

    // Password validation
    if (
        password.length < 16 ||
        !/[A-Z]/.test(password) || // At least one uppercase
        !/[a-z]/.test(password) || // At least one lowercase
        !/[0-9]/.test(password) || // At least one digit
        !/[^a-zA-Z0-9]/.test(password) || // At least one special character
        /(.)\1/.test(password) || // No consecutive identical characters
        password.includes(username) // Password cannot contain the username
    ) {
        alert(
            "Password must:\n" +
            "- Be at least 16 characters long.\n" +
            "- Contain an uppercase letter, a lowercase letter, a number, and a special character.\n" +
            "- Have no consecutive identical characters.\n" +
            "- Not contain your username."
        );
        return false;
    }

    // CAPTCHA check
    const captcha = document.getElementById('captcha').checked;
    if (!captcha) {
        alert("Please prove you're not a robot by checking the CAPTCHA box.");
        return false;
    }

    // Simulate a delay to annoy the user
    alert("Validating your credentials... Please wait.");
    setTimeout(() => {
        alert("Login successful!");
    }, 3000); // 3-second delay

    return false; // Prevent form submission to show the alert for demonstration
}
function validateSignUp() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const email = document.getElementById('signup-email').value;
    const captcha = document.getElementById('signup-captcha').checked;

    // Username validation
    if (
        username.length < 12 || 
        username.length > 15 || 
        /[0-9!@#$%^&*(),.?":{}|<>]/.test(username) || 
        /[aeiou]{2}/i.test(username) // No consecutive vowels
    ) {
        alert("Username must be 12-15 characters long, contain only letters, and no consecutive vowels.");
        return false;
    }

    // Password validation
    if (
        password.length < 20 ||
        (password.match(/[A-Z]/g) || []).length < 2 || // At least 2 uppercase letters
        (password.match(/[a-z]/g) || []).length < 3 || // At least 3 lowercase letters
        !/[0-9]/.test(password) || // At least 1 number
        (password.match(/[^a-zA-Z0-9]/g) || []).length < 2 || // At least 2 special characters
        /\b\w+\b/.test(password) // No dictionary words
    ) {
        alert(
            "Password must:\n" +
            "- Be at least 20 characters long.\n" +
            "- Include at least 2 uppercase letters, 3 lowercase letters, 1 number, and 2 special characters.\n" +
            "- Not contain dictionary words."
        );
        return false;
    }

    // Email validation
    if (
        !/[0-9]/.test(email) || // Must include at least one digit
        /(.)\1/.test(email) // No consecutive identical characters
    ) {
        alert("Email must include at least one digit and no consecutive identical characters.");
        return false;
    }

    // CAPTCHA check
    if (!captcha) {
        alert("Please prove you're not a robot by checking the CAPTCHA box.");
        return false;
    }

    // Simulate a delay to annoy the user
    alert("Creating your account... Please wait.");
    setTimeout(() => {
        alert("Account successfully created!");
    }, 3000); // 3-second delay

    return false; // Prevent form submission for demonstration
}
let popupInterval;

// Show the newsletter popup
function showNewsletterPopup() {
    const popup = document.getElementById('newsletter-popup');
    popup.classList.remove('hidden');
}

// Close the newsletter popup
function closeNewsletterPopup() {
    const popup = document.getElementById('newsletter-popup');
    popup.classList.add('hidden');
}

// Start the popup interval
function startPopupInterval() {
    popupInterval = setInterval(showNewsletterPopup, 10000); // Show every 10 seconds
}

// Stop the popup interval (if needed)
function stopPopupInterval() {
    clearInterval(popupInterval);
}

// Initialize the popup behavior
window.onload = function () {
    startPopupInterval();
};
// Randomly reposition elements
function randomizePositions() {
    const elements = document.querySelectorAll('header, button, a, .popup-content');
    elements.forEach(el => {
        el.style.position = 'relative';
        el.style.left = `${Math.random() * 50}px`;
        el.style.top = `${Math.random() * 50}px`;
    });
}

// Run every 5 seconds
setInterval(randomizePositions, 5000);

// Chaotic Newsletter Popup
let popupInterval;
function showNewsletterPopup() {
    const popup = document.getElementById('newsletter-popup');
    popup.classList.remove('hidden');
    randomizePositions(); // Chaos on popup appearance
}

function closeNewsletterPopup() {
    const popup = document.getElementById('newsletter-popup');
    popup.classList.add('hidden');
}

window.onload = function () {
    popupInterval = setInterval(showNewsletterPopup, 10000); // Popup every 10 seconds
};
const greenCat = document.getElementById('green-cat');

// Random Movement Function for the Green Cat
function moveGreenCat() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    greenCat.style.top = `${y}px`;
    greenCat.style.left = `${x}px`;
}

// Random Pop-up Creation
function dropRandomNote() {
    const note = document.createElement('div');
    note.classList.add('random-note');
    note.innerText = 'Meow! 🐾 The Green Cat strikes again!';
    note.style.position = 'fixed';
    note.style.top = `${Math.random() * window.innerHeight}px`;
    note.style.left = `${Math.random() * window.innerWidth}px`;
    note.style.backgroundColor = '#00ff00';
    note.style.color = '#000';
    note.style.padding = '10px';
    note.style.borderRadius = '8px';
    note.style.zIndex = '9999';
    document.body.appendChild(note);

    // Remove the note after 5 seconds
    setTimeout(() => {
        note.remove();
    }, 5000);
}

// Block User Actions (randomly)
function blockUserActions() {
    const buttons = document.querySelectorAll('button, input, a');
    const randomElement = buttons[Math.floor(Math.random() * buttons.length)];
    if (randomElement) {
        randomElement.style.position = 'absolute';
        randomElement.style.top = `${Math.random() * window.innerHeight}px`;
        randomElement.style.left = `${Math.random() * window.innerWidth}px`;
    }
}

// Initiate the chaotic behavior
setInterval(moveGreenCat, 2000); // Move every 2 seconds
setInterval(dropRandomNote, 5000); // Drop a note every 5 seconds
setInterval(blockUserActions, 7000); // Block user actions every 7 seconds

// Newsletter Popup Functionality
let popupInterval;
function showNewsletterPopup() {
    const popup = document.getElementById('newsletter-popup');
    popup.classList.remove('hidden');
}

function closeNewsletterPopup() {
    const popup = document.getElementById('newsletter-popup');
    popup.classList.add('hidden');
}

window.onload = function () {
    popupInterval = setInterval(showNewsletterPopup, 10000); // Popup every 10 seconds
};