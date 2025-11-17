<!-- script.js -->
// script.js — form handling and mailto builder
document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById('bookingForm');
if (!form) return;


form.addEventListener('submit', function (e) {
e.preventDefault();


const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const date = document.getElementById('date').value;
const people = document.getElementById('people').value;
const message = document.getElementById('message').value.trim();


if (!name || !email) {
alert('Please enter your name and email.');
return;
}


const subject = `Booking/Feedback from ${name}`;
const bodyLines = [];
bodyLines.push(`Name: ${name}`);
bodyLines.push(`Email: ${email}`);
if (date) bodyLines.push(`Preferred date/time: ${date}`);
if (people) bodyLines.push(`Number of people: ${people}`);
if (message) bodyLines.push(`Message: ${message}`);


const body = encodeURIComponent(bodyLines.join('
'));
const to = 'restaurant@example.com';
const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;


// open mail client
window.location.href = mailto;
});
});
