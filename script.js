document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("bookingForm");
    const output = document.getElementById("generatedEmail");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const emailText = `
To: reservations@samplebistro.com
Subject: Booking / Feedback Request

Name: ${name}
Email: ${email}

Message:
${message}
        `;

        output.textContent = emailText;
    });
});
