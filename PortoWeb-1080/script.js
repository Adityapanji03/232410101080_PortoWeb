document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.querySelector('input[type="text"]:nth-of-type(1)').value.trim();
        const email = form.querySelector('input[type="text"]:nth-of-type(2)').value.trim();
        const message = form.querySelector('textarea').value.trim();
        const phoneNumber = '83113126056';

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

        const whatsappUrl = `https://wa.me/62${phoneNumber}?text=${whatsappMessage}`;

        window.open(whatsappUrl, '_blank');
    });
});

function revealOnScroll() {
    const cardWrapper = document.querySelector(".card-wrapper");
    const windowHeight = window.innerHeight;
    const cardWrapperTop = cardWrapper.getBoundingClientRect().top;
    const revealPoint = 150; // Sesuaikan nilai ini untuk menentukan kapan animasi dimulai
  
    if (cardWrapperTop < windowHeight - revealPoint) {
      cardWrapper.classList.add("active");
    } else {
      cardWrapper.classList.remove("active");
    }
  }

  function revealOnScroll2() {
    const cardWrapper = document.querySelector(".card-wrapper2");
    const windowHeight = window.innerHeight;
    const cardWrapperTop = cardWrapper.getBoundingClientRect().top;
    const revealPoint = 150; // Sesuaikan nilai ini untuk menentukan kapan animasi dimulai
  
    if (cardWrapperTop < windowHeight - revealPoint) {
      cardWrapper.classList.add("active");
    } else {
      cardWrapper.classList.remove("active");
    }
  }
  function revealOnScroll3() {
    const contact = document.querySelector(".contact");
    const windowHeight = window.innerHeight;
    const contactTop = contact.getBoundingClientRect().top;
    const revealPoint = 150; // Sesuaikan nilai ini untuk menentukan kapan animasi dimulai

    if (contactTop < windowHeight - revealPoint) {
        contact.classList.add("active");
    } else {
        contact.classList.remove("active");
    }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("scroll", revealOnScroll2);
window.addEventListener("scroll", revealOnScroll3);