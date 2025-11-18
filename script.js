// Form handling for Problem-Solving Page
function sendForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    const mailtoLink = `mailto:restaurant@example.com?subject=Booking/Feedback from ${name}&body=${encodeURIComponent(message + "\n\nContact Email: " + email)}`;

    window.location.href = mailtoLink;
}

