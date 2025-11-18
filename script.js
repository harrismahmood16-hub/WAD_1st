document.addEventListener('DOMContentLoaded', ()=> {
  const form = document.getElementById('reservationForm');
  if(!form) return;

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const phone = form.elements['phone'].value.trim();
    const date = form.elements['date'].value;
    const time = form.elements['time'].value;
    const guests = form.elements['guests'].value;
    const notes = form.elements['notes'].value.trim();

    const subject = encodeURIComponent(`Reservation Request — Robertos — ${name}`);
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Date: ${date}`,
      `Time: ${time}`,
      `Guests: ${guests}`,
      '',
      'Notes:',
      notes
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));

    const preview = document.getElementById('reservationPreview');
    if(preview){
      preview.textContent = `To: reservations@robertos.com\nSubject: Reservation Request — Robertos — ${name}\n\n${bodyLines.join('\n')}`;
    }

    const mailto = `mailto:reservations@robertos.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  });
});
