// Select the theme toggle button and the body element
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Add an event listener to the toggle button
themeToggleButton.addEventListener('click', () => {
    // Toggle the dark-mode and light-mode classes on the body
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Change the button icon based on the current theme
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = '🌞'; // Sun icon for light mode
        localStorage.setItem('theme', 'dark'); // Save the theme preference
    } else {
        themeToggleButton.textContent = '🌙'; // Moon icon for dark mode
        localStorage.setItem('theme', 'light'); // Save the theme preference
    }
});

// Set the initial theme based on the saved preference in local storage
if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light'); // Default to light mode
}

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode'); // Apply dark mode
    themeToggleButton.textContent = '🌞'; // Set button icon to sun
} else {
    body.classList.add('light-mode'); // Apply light mode
}

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const infoButtons = document.querySelectorAll('.info-button');
    const closeButtons = document.querySelectorAll('.close-popup');
    const teamMembers = document.querySelectorAll('.team-member');

    infoButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            teamMembers[index].querySelector('.info-popup').classList.add('active');
            document.body.classList.add('blur'); // Apply blur effect
        });
    });

    closeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            teamMembers[index].querySelector('.info-popup').classList.remove('active');
            document.body.classList.remove('blur'); // Remove blur effect
        });
    });
});