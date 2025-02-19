window.onload = () => {
  const navMenu = document.querySelector('.nav-menu');
  const navItems = document.querySelectorAll('.nav-item');
  const hamburger = document.querySelector('.nav-toggle');
  
  const toggle = e => e.classList.toggle('is-active');
  const toggleNav = ({ target }) => Array.from(navMenu.classList).includes('is-active') ? toggle(navMenu) : null;

  hamburger.addEventListener('click', () => toggle(navMenu, 'is-active'));
  Array.from(navItems).forEach(e => e.addEventListener('click', toggleNav));
}
function typeWriter(element, text, i, speed) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(element, text, i, speed);
        }, speed);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const typingElements = document.querySelectorAll('.typing-effect');

    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        typeWriter(element, text, 0, 23);
    });
});
