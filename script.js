// JavaScript to enhance functionality across both pages

document.addEventListener("DOMContentLoaded", function () {
    // For first page - Happy Birthday Greeting
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        setTimeout(() => {
            alert("Wishing you a year filled with joy and love! 🎉");
        }, 2000); // Show after 2 seconds
    }

    // For second page - Birthday Celebration
    if (window.location.pathname === '/second_page.html') {
        setTimeout(() => {
            alert("Let’s make some happy memories today! 🎂🎉");
        }, 3000); // Show after 3 seconds
    }
});
