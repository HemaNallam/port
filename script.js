// Smooth Scrolling

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.getElementById(e.target.getAttribute('href').slice(1));
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Enhance Portfolio Grid (Example with image overlay)

const projectGrid = document.querySelector('.project-grid');
const projects = projectGrid.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('mouseenter', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('project-overlay');
    project.appendChild(overlay);
  });

  project.addEventListener('mouseleave', () => {
    const overlay = project.querySelector('.project-overlay');
    if (overlay) {
      project.removeChild(overlay);
    }
  });
});

// Contact Form Validation (Basic Example)
