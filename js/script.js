document.addEventListener("DOMContentLoaded", () => {

  // Load Navbar
  fetch("components/navbar.html")
    .then(response => response.text())
    .then(navbarData => {
      document.getElementById("navbar-container").innerHTML = navbarData;
    });

  // Load Footer
  fetch("components/footer.html")
    .then(response => response.text())
    .then(footerData => {
      document.getElementById("footer-container").innerHTML = footerData;
    });


  // AUTOCOMPLETE (PLAN YOUR TRIP)
  const destInput = document.getElementById("destination");
  const suggestionBox = document.getElementById("suggestions");

  const places = [
    "Goa, India",
    "Mumbai, Maharashtra, India",
    "Ahmedabad, Gujarat, India",
    "Seoul, South Korea",
    "Busan, South Korea",
    "New York, USA",
    "Paris, France",
    "Tokyo, Japan",
    "London, United Kingdom",
    "Delhi, India",
    "Bali, Indonesia",
    "Sydney, Australia",
    "Rome, Italy",
    "Barcelona, Spain",
    "Dubai, UAE",
    "Switzerland",
    "Singapore",
    "Bangkok, Thailand",
    "Cairo, Egypt",
    "Istanbul, Turkey",
    "Sweden",
    
  ];

  if (destInput && suggestionBox) {

    destInput.addEventListener("input", function () {
      let searchValue = destInput.value.toLowerCase();
      suggestionBox.innerHTML = "";

      if (searchValue === "") {
        suggestionBox.style.display = "none";
        return;
      }

      for (let i = 0; i < places.length; i++) {
        if (places[i].toLowerCase().includes(searchValue)) {

          let div = document.createElement("div");
          div.innerText = places[i];
          div.classList.add("suggestion-item");

          div.onclick = function () {
            destInput.value = places[i];
            suggestionBox.style.display = "none";
          };

          suggestionBox.appendChild(div);
        }
      }

      suggestionBox.style.display = "block";
    });

    document.addEventListener("click", function (e) {
      if (!destInput.contains(e.target) && !suggestionBox.contains(e.target)) {
        suggestionBox.style.display = "none";
      }
    });

  }



// GALLERY FILTER
const galleryButtons = document.querySelectorAll("[data-filter]");
const galleryItems = document.querySelectorAll(".masonry-item");

if (galleryButtons.length > 0 && galleryItems.length > 0) {

  galleryButtons.forEach(button => {
    button.addEventListener("click", () => {

      // Remove active class from all
      galleryButtons.forEach(btn => btn.classList.remove("active-filter"));

      // Add active class to clicked button
      button.classList.add("active-filter");

      const selected = button.dataset.filter;

      galleryItems.forEach(item => {
        const type = item.dataset.category;

        if (selected === "all" || selected === type) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

    });
  });
}

// GALLERY LIGHTBOX

const lightboxModal = document.getElementById("lightboxModal");
const lightboxImg = document.getElementById("lightboxImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let galleryImages = document.querySelectorAll(".masonry-item img");
let index = 0;

if (galleryImages.length > 0 && lightboxModal && lightboxImg) {

  // Open lightbox
  galleryImages.forEach((img, i) => {
    img.addEventListener("click", () => {
      index = i;
      lightboxImg.src = img.src;
      new bootstrap.Modal(lightboxModal).show();
    });
  });

  // NEXT button
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      index++;
      if (index >= galleryImages.length) index = 0;
      lightboxImg.src = galleryImages[index].src;
    });
  }

  // PREVIOUS button
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      index--;
      if (index < 0) index = galleryImages.length - 1;
      lightboxImg.src = galleryImages[index].src;
    });
  }
}









  // CONTACT FORM VALIDATION (CONTACT PAGE)
const contactForm = document.querySelector("#contact form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const requiredInputs = contactForm.querySelectorAll("input[required]");
    let allFilled = true;

    requiredInputs.forEach(function (input) {
      if (input.value.trim() === "") {
        allFilled = false;
      }
    });

    if (!allFilled) {
      alert("Please fill all required fields before booking.");
      return;
    }

    alert("We have received your request. It will be processed soon.");
    contactForm.reset();
  });
}


});


function initSearchButton() {
  const btn = document.getElementById("searchTripsBtn");

  if (!btn) {
    // retry until button appears
    setTimeout(initSearchButton, 100);
    return;
  }

  btn.addEventListener("click", function () {
    const destination = document.getElementById("destination").value.trim();
    const dates = document.querySelectorAll("#plan input[type='date']");
    const fromDate = dates[0].value;
    const toDate = dates[1].value;

    if (!destination || !fromDate || !toDate) {
      alert("Please fill all trip details.");
      return;
    }

    window.location.href = "packages.html";
  });

  console.log("Search Trips button is NOW ready!");
}

initSearchButton();

// document.addEventListener("click", function () {
//   console.log("PAGE CLICKED");
// });

// document.addEventListener("click", function (e) {
//   console.log("You clicked:", e.target);
// });

// setTimeout(() => {
//   const btn = document.getElementById("searchTripsBtn");
//   if (!btn) return;
//   btn.onclick = function () {
//     const destination = document.getElementById("destination").value.trim();
//     const dates = document.querySelectorAll("#plan input[type='date']");
//     if (!destination || !dates[0].value || !dates[1].value) {
//       alert("Please fill all trip details first.");
//       return;
//     }
//     window.location.href = "packages.html";
//   };
// }, 500);
