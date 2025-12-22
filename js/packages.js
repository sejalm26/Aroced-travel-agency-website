document.addEventListener("DOMContentLoaded", () => {

  const wishBtns = document.querySelectorAll(".wishlist-btn");
  const bookBtns = document.querySelectorAll(".pkg-book-btn");

  wishBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".package-card");

      const item = {
        id: card.querySelector("h5").textContent.toLowerCase().replace(/\s/g, ""),
        title: card.querySelector("h5").textContent,
        desc: card.querySelector("p").textContent,
        image: card.querySelector("img").src
      };

      addToWishlist(item);

      // HEART TURN RED
      btn.classList.toggle("active");
      btn.innerHTML = "❤️";
    });
  });

  bookBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "contact.html";
    });
  });

    // ✅ PACKAGE POPUP LOGIC
  const cards = document.querySelectorAll(".package-card");
  const modalEl = document.getElementById("packageModal");

  if (cards.length && modalEl) {
    const bsModal = new bootstrap.Modal(modalEl);

    const titleEl = document.getElementById("packageModalLabel");
    const imgEl = document.getElementById("packageModalImg");
    const nightsEl = document.getElementById("packageModalNights");
    const infoEl = document.getElementById("packageModalInfo");
    const locationEl = document.getElementById("packageModalLocation");
    const ratingEl = document.getElementById("packageModalRating");
    const includesEl = document.getElementById("packageModalIncludes");
    const highlightsEl = document.getElementById("packageModalHighlights");
    const priceEl = document.getElementById("packageModalPrice");

    cards.forEach(card => {
      card.addEventListener("click", (e) => {

        if (
          e.target.closest(".wishlist-btn") ||
          e.target.closest(".pkg-book-btn")
        ) {
          return;
        }

        titleEl.textContent = card.dataset.title;
        imgEl.src = card.dataset.img;
        nightsEl.textContent = card.dataset.nights;
        infoEl.textContent = card.dataset.info;
        locationEl.textContent = "📍 " + card.dataset.location;
        ratingEl.textContent = "⭐ Rating: " + card.dataset.rating;
        highlightsEl.textContent = card.dataset.highlights;
        priceEl.textContent = "Package Price: " + card.dataset.price;

        includesEl.innerHTML = "";

        card.dataset.includes.split(",").forEach(item => {
          const li = document.createElement("li");
          li.textContent = item.trim();
          includesEl.appendChild(li);
        });

        bsModal.show();
      });
    });
  }

  

});