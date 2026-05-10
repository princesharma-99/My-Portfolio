document.addEventListener("DOMContentLoaded", () => {
  const typewriterText = "Full Stack Developer!";
  const typewriterElement = document.getElementById("typewriter");
  let index = 0;

  function typeWriter() {
    if (typewriterElement && index < typewriterText.length) {
      typewriterElement.innerHTML += typewriterText.charAt(index);
      index += 1;
      setTimeout(typeWriter, 100);
    }
  }

  function animateBars() {
    const bars = document.querySelectorAll(".animated-bar");
    bars.forEach((bar) => {
      const value = bar.style.getPropertyValue("--progress");
      bar.style.width = value;
    });
  }

  function handleScroll() {
    const section = document.querySelector("#skills");
    if (!section) return;
    const viewportPosition = section.getBoundingClientRect().top;
    if (viewportPosition < window.innerHeight - 100) {
      animateBars();
      window.removeEventListener("scroll", handleScroll);
    }
  }

  typeWriter();
  window.addEventListener("scroll", handleScroll);

  // Initialize carousel with auto-play
  const certificateCarousel = document.getElementById('certificateSlider');
  if (certificateCarousel) {
    const carousel = new bootstrap.Carousel(certificateCarousel, {
      interval: 2000, // 2 seconds
      ride: 'carousel',
      wrap: true
    });
  }

  const toggleModeButton = document.getElementById("toggle-mode");
  if (toggleModeButton) {
    toggleModeButton.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      toggleModeButton.innerText = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
    });
  }

  const contactForm = document.getElementById("contact-form");
  const contactMessage = document.getElementById("contact-message");

  if (contactForm && contactMessage) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const purpose = document.getElementById("text").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !purpose || !message) {
        contactMessage.textContent = "Please fill in all fields before sending.";
        contactMessage.classList.remove("text-success");
        contactMessage.classList.add("text-danger");
        contactMessage.style.display = "block";
        return;
      }

      contactMessage.textContent = "Thank you! Your message is ready to send. Open your email client to finish sending it.";
      contactMessage.classList.remove("text-danger");
      contactMessage.classList.add("text-success");
      contactMessage.style.display = "block";

      const subject = encodeURIComponent(`Contact from ${name}`);
      const body = encodeURIComponent(`Purpose of Contact\n\nName: ${name}\nEmail: ${email}\nPurpose: ${purpose}\n\nMessage:\n${message}`);
      window.location.href = `mailto:bs135585@gmail.com?subject=${subject}&body=${body}`;
      contactForm.reset();
    });
  }
});

