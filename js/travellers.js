document.addEventListener("DOMContentLoaded", function () {

  let travellerInput = document.getElementById("travellerInput");
  let travellerDropdown = document.getElementById("travellerDropdown");

  if (!travellerInput || !travellerDropdown) return;

  let adults = 1;
  let children = 0;

  let adultCount = document.getElementById("adultCount");
  let childCount = document.getElementById("childCount");

  // Increase / Decrease Adults
  window.changeAdult = function (val) {
    adults = adults + val;

    if (adults < 1) {
      adults = 1;
    }

    adultCount.innerText = adults;
  };

  // Increase / Decrease Children
  window.changeChild = function (val) {
    children = children + val;

    if (children < 0) {
      children = 0;
    }

    childCount.innerText = children;
  };

  // Apply button
  window.applyTravellers = function () {
    travellerInput.value = adults + " Adults, " + children + " Children";
    travellerDropdown.style.display = "none";
  };

  // Open dropdown on click
  travellerInput.addEventListener("click", function (e) {
    if (travellerDropdown.style.display === "block") {
      travellerDropdown.style.display = "none";
    } else {
      travellerDropdown.style.display = "block";
    }
    e.stopPropagation();
  });

  
  travellerDropdown.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (
      e.target !== travellerInput &&
      !travellerDropdown.contains(e.target)
    ) {
      travellerDropdown.style.display = "none";
    }
  });

});
