// Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});
// Close on link click
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});
// Close when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('nav') && navMenu.classList.contains('active')) {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
  }
});

// Scroll to top
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) scrollBtn.style.display = 'block';
  else scrollBtn.style.display = 'none';
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Active link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) link.classList.add('active');
  });
});

// Animate skill bars on load
const progressBars = document.querySelectorAll('.progress');
window.addEventListener('load', () => {
  progressBars.forEach(p => { p.style.width = p.getAttribute('data-width'); });
});

// Contact form handler
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Basic validation example
  if (!name || !email || !subject || !message) {
    alert('Please fill all fields.');
    return;
  }
  // Here you can integrate an email service or backend endpoint
  alert('Thank you, ' + name + '! Your message has been sent.');
  contactForm.reset();
});
