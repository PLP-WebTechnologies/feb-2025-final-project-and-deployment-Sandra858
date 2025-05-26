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

const toggles = document.querySelectorAll('main .main-content section > h3');

toggles.forEach(heading => {
  heading.style.cursor = 'pointer';

  heading.addEventListener('click', () => {
    toggles.forEach(h => {
      if (h !== heading) {
        h.nextElementSibling.classList.remove('active'); // close others
      }
    });

    const content = heading.nextElementSibling;
    content.classList.toggle('active'); // toggle clicked section
  });
});
