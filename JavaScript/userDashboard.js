// =================Chart s ==================
// Wishlist vs Purchased chart
const wishlistChart = new Chart(document.getElementById('wishlistChart'), {
  type: 'bar',
  data: {
    labels: ['Wishlist', 'Purchased'],
    datasets: [{
      label: 'Count',
      data: [40, 25],
      backgroundColor: ['#4e73df', '#1cc88a']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Wishlist vs Purchased Items' }
    }
  }
});

// Orders chart
const ordersChart = new Chart(document.getElementById('ordersChart'), {
  type: 'pie',
  data: {
    labels: ['Successful', 'Cancelled'],
    datasets: [{
      data: [75, 25],
      backgroundColor: ['#36b9cc', '#e74a3b']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      title: { display: true, text: 'Orders Status Summary' }
    }
  }
});


// =====Dis[lay for specific section=====================]
// Section toggle
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', e => {
    const sectionId = link.getAttribute('data-section');
    const href = link.getAttribute('href');

    if (sectionId || href === '#dashboard') {
      e.preventDefault();

      // Hide all dashboard sections
      document.querySelectorAll('.dashboard-section').forEach(section => {
        section.style.display = 'none';
      });

      // Show the selected section
      const targetId = sectionId || 'dashboard';
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = 'block';
      }
    }
  });
});





// ================Add bank account===================== 
// Toggle add bank account form
document.getElementById('add-bank-btn').addEventListener('click', () => {
  const form = document.getElementById('bank-form');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

// (Optional) Add basic behavior to append new bank account to list
document.getElementById('bank-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const inputs = this.querySelectorAll('input');
  const name = inputs[0].value.trim();
  const number = inputs[1].value.trim();

  if (name && number) {
    const li = document.createElement('li');
    li.textContent = `${name} - ${number}`;
    document.getElementById('bank-list').appendChild(li);
    this.reset();
    this.style.display = 'none';
  }
});


// Toogel LM & DM EVENT======================
console.log("JS Loaded");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");
  const toggleButton = document.getElementById("modeToggle");

  if (toggleButton) {
    console.log("Toggle button found");

    toggleButton.addEventListener("click", () => {
      console.log("Toggle clicked");

      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "🔆";
      } else {
        toggleButton.textContent = "🌙";
      }
    });
  } else {
    console.error("Toggle button not found!");
  }
});
