// Navbar Click Effect
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-item")
      .forEach((i) => i.classList.remove("active"));
    this.classList.add("active");
  });
});

// Popup Functionality
function showPopup(type) {
  let descriptions = {
    fort: "Forts - Step into history...",
    beach: "Beaches - Welcome to the serene shores...",
    hill: "Hill Stations - Welcome to Maharashtra's...",
    pilgrimage: "Pilgrimages - The sacred heart of Maharashtra...",
  };

  document.getElementById("popup-text").innerText = descriptions[type];
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
document.getElementById("searchBtn").addEventListener("click", function () {
  let searchQuery = document.getElementById("searchInput").value.trim();

  if (searchQuery !== "") {
    localStorage.setItem("searchedPlace", searchQuery);
    window.location.href = "results.html";
  }
});
document.getElementById("searchBtn").addEventListener("click", function () {
  let searchQuery = document.getElementById("searchInput").value.trim();

  if (searchQuery !== "") {
    localStorage.setItem("searchedPlace", searchQuery);
    window.location.href = "results.html"; // Redirect to results page
  }
});
