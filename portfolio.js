// Get the toggle switch and body element
const toggleSwitch = document.getElementById('toggle');
const body = document.body;

// Check if dark mode is saved in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleSwitch.checked = true; // Check the toggle switch if dark mode is enabled
} else {
    toggleSwitch.checked = false; // Uncheck the toggle switch if dark mode is disabled
}

// Add event listener to toggle dark mode
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled'); // Save dark mode preference
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled'); // Save light mode preference
    }
});


// Get the "Read More" button and the extra content
const readMoreButton = document.getElementById('read-more-btn');
const moreText = document.querySelector('.more-text');

// Add an event listener for when the button is clicked
readMoreButton.addEventListener('click', () => {
    // Toggle the visibility of the extra content
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline"; // Show the extra content
        readMoreButton.textContent = "Read Less"; // Change the button text
    } else {
        moreText.style.display = "none"; // Hide the extra content
        readMoreButton.textContent = "Read More"; // Change the button text back
    }
});


