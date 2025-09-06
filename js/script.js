// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight skill on hover
document.querySelectorAll('#skills-list li').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.background = '#fbfbfbff';
  });
  item.addEventListener('mouseleave', () => {
    item.style.background = '';
  });
});
