// script.js

// Function to display current date and time in a specific format
function showCurrentDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' };
    const utcDate = now.toLocaleString('sv-SE', options);
    document.getElementById('datetime').innerText = utcDate;
}

// Call the function to show current date and time immediately
showCurrentDateTime();

// Refresh the date and time every second
setInterval(showCurrentDateTime, 1000);