document.addEventListener('DOMContentLoaded', () => {
    // Dynamic year
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  
    // Highlight active nav link on scroll
    const links = Array.from(document.querySelectorAll('header nav a'));
    const sections = links.map(a => document.querySelector(a.getAttribute('href')));
  
    const onScroll = () => {
      const pos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= pos) {
          links.forEach(l => l.classList.remove('active'));
          links[i].classList.add('active');
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  });
  