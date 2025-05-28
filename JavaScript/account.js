document.addEventListener('DOMContentLoaded', () => {
  const darkModeCheckbox = document.querySelectorAll('.toggle-group input[type="checkbox"]')[1]; // 2nd checkbox = Dark Mode

  // Load saved preference
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeCheckbox.checked = true;
  }

  // Toggle dark mode on checkbox change
  darkModeCheckbox.addEventListener('change', () => {
    if (darkModeCheckbox.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  });
});

// ======================== =====================

document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".sidebar ul li a");
  const sections = document.querySelectorAll(".main-content section");

  sidebarLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      // Only handle anchor links with hashes
      if (this.hash.startsWith("#")) {
        e.preventDefault();

        const targetId = this.hash.slice(1); // remove the '#'
        
        // Hide all sections
        sections.forEach(section => {
          section.style.display = "none";
        });

        // Show the target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.style.display = "block";
        }
      }
    });
  });

  // Optionally, show the first section by default
  sections.forEach(section => section.style.display = "none");
  if (sections[0]) sections[0].style.display = "block";
});

