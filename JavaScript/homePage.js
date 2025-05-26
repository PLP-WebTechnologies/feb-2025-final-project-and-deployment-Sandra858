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
        toggleButton.textContent = "☀️";
      } else {
        toggleButton.textContent = "🌙";
      }
    });
  } else {
    console.error("Toggle button not found!");
  }
});

// Favorite Button Event======================
// Load wishlist from localStorage
  const wishlistList = document.getElementById('wishlistList');
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  function renderWishlist() {
    wishlistList.innerHTML = '';
    wishlist.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.name;
      li.classList.add('wishlist-item');

      const removeBtn = document.createElement('button');
      removeBtn.textContent = '❌';
      removeBtn.onclick = () => removeFromWishlist(item.id);
      li.appendChild(removeBtn);

      wishlistList.appendChild(li);
    });
  }

  function addToWishlist(id, name) {
    if (!wishlist.find(item => item.id === id)) {
      wishlist.push({ id, name });
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      renderWishlist();
    }
  }

  function removeFromWishlist(id) {
    wishlist = wishlist.filter(item => item.id !== id);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    renderWishlist();
  }

  // Attach listeners to add-to-wishlist buttons
  document.querySelectorAll('.add-to-wishlist').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const name = btn.dataset.name;
      addToWishlist(id, name);
    });
  });

  // Initial render
  renderWishlist();

