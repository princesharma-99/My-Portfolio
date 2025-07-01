// Skill bar animation
const bars = document.querySelectorAll(".animated-bar");
function animateBars() {
  bars.forEach(bar => {
    const value = bar.style.getPropertyValue("--progress");
    bar.style.width = value;
  });
}
window.addEventListener("scroll", () => {
  const section = document.querySelector("#skills");
  if (section.getBoundingClientRect().top < window.innerHeight - 100) {
    animateBars();
  }
});

// Typewriter effect
const text = "Full Stack Developer!";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
window.onload = typeWriter;

// Dark/Light toggle
document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.getElementById("toggle-mode").innerText =
    document.body.classList.contains("light-mode") ? "🌞" : "🌙";
});
