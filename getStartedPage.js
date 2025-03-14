document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category");

  categories.forEach((category) => {
    category.addEventListener("click", function () {
      // Remove active class from all
      categories.forEach((cat) => cat.classList.remove("active"));
      // Add active class to clicked one
      this.classList.add("active");
      // Change body background
      document.body.style.background =
        "url('raigad.jpg') no-repeat center center/cover";
    });
  });
});

// Function to change background on hover
function hoverEffect1(isHovering) {
  if (isHovering) {
    document.body.style.background =
      "url('pilgrimage.png') no-repeat center center/cover";
  } else {
    document.body.style.background =
      "url('pilgrimage.png') no-repeat center center/cover";
  }
}
function hoverEffect2(isHovering) {
  if (isHovering) {
    document.body.style.background =
      "url('beaches.png') no-repeat center center/cover";
  } else {
    document.body.style.background =
      "url('beaches.png') no-repeat center center/cover";
  }
}
function hoverEffect3(isHovering) {
  if (isHovering) {
    document.body.style.background =
      "url('RAIGAD.jpg') no-repeat center center/cover";
  } else {
    document.body.style.background =
      "url('RAIGAD.jpg') no-repeat center center/cover";
  }
}
function hoverEffect4(isHovering) {
  if (isHovering) {
    document.body.style.background =
      "url('mahabaleshwar.jpg') no-repeat center center/cover";
  } else {
    document.body.style.background =
      "url('mahabaleshwar.jpg') no-repeat center center/cover";
  }
}
