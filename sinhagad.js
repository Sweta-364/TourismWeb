// Initialize Google Map
function initMap() {
  const sinhagad = { lat: 18.366, lng: 73.755 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: sinhagad,
  });

  new google.maps.Marker({
    position: sinhagad,
    map,
    title: "Sinhagad Fort",
  });
}

// Hotel Data
const hotels = [
  {
    name: "Hotel Kondhana Fort",
    fees: 1200,
    rating: 4.5,
    image: "kondhana.png",
  },
  { name: "Sinhagad Retreat", fees: 1500, rating: 4.8, image: "retreat.png" },
  { name: "Nature Stay", fees: 800, rating: 4.2, image: "natureStay.png" },
  { name: "Fort View Lodge", fees: 1000, rating: 4.0, image: "fortView.png" },
];

// Guides Data
const guides = [
  { name: "Cityzest", rating: 4.9, reviews: 28, contact: "07942696086" },
  { name: "Ashish Yadav", rating: 4.0, reviews: 13, contact: "07947109337" },
  { name: "Gaurish Modi", rating: 4.3, reviews: 15, contact: "08371845904" },
  { name: "AllGuider", rating: 3.9, reviews: 25, contact: "08371845904" },
];

const hotelList = document.getElementById("hotel-list");
const sortSelect = document.getElementById("sort");
const guideList = document.getElementById("guide-list");
const guideSortSelect = document.getElementById("guide-sort");

// Function to display hotels dynamically
const displayHotels = (hotelArray) => {
  hotelList.innerHTML = hotelArray
    .map(
      (hotel) => `
        <div class="hotel">
          <img src="${hotel.image}" alt="${hotel.name}" class="hotel-img">
          <div class="hotel-info">
            <h3>${hotel.name}</h3>
            <p>Fees: ₹${hotel.fees}</p>
            <p>Rating: ⭐${hotel.rating}</p>
          </div>
        </div>
      `
    )
    .join(""); // Optimized for better performance
};
const displayGuides = (guideArray) => {
  guideList.innerHTML = guideArray
    .map(
      (guide, index) => `
        <div class="guide">
          <h3>${index + 1}) <strong>${guide.name}</strong> (${guide.rating} - ${
        guide.reviews
      } ratings)</h3>
          <p>Open 24 Hrs</p>
          <p>Contact No. ${guide.contact}</p>
          <div class="guide-buttons">
            <button class="enquire-btn">Enquire Now</button>
            <a href="https://wa.me/${
              guide.contact
            }" target="_blank" class="whatsapp-btn">
              <img src="whatsapp.png" alt="WhatsApp">
            </a>
          </div>
        </div>
      `
    )
    .join("");
};
// Function to handle sorting
const handleSort = () => {
  const sortBy = sortSelect.value;
  let sortedHotels = [...hotels];

  sortedHotels.sort((a, b) => {
    if (sortBy === "fees") return a.fees - b.fees; // Low to High
    if (sortBy === "ratings") return b.rating - a.rating; // High to Low
    if (sortBy === "high-low") return b.fees - a.fees; // High to Low
  });

  displayHotels(sortedHotels);
};

// Sorting function for guides
const sortGuides = () => {
  let sortedGuides = [...guides];

  sortedGuides.sort((a, b) => b.rating - a.rating);

  displayGuides(sortedGuides);
};

// Initialize sorting & display
sortSelect.addEventListener("change", handleSort);
document.addEventListener("DOMContentLoaded", () => {
  displayHotels(hotels);
});

// Event Listeners
guideSortSelect.addEventListener("change", sortGuides);
document.addEventListener("DOMContentLoaded", () => {
  displayGuides(guides);
});

// Chatbot Click Event
document.getElementById("chatbot").addEventListener("click", () => {
  alert("Chatbot functionality coming soon!");
});
