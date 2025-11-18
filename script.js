// Form handling for problem-solving page
function sendForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    const mailtoLink = `mailto:restaurant@example.com?subject=Booking/Feedback from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nContact Email: " + email)}`;
    window.location.href = mailtoLink;
}
