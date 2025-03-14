const GEMINI_API_KEY = "AIzaSyDsg0SEeUzdMhXYvZymmPogjgIOYdqArbk"; // 🔹 Replace with your actual API key

async function fetchPlaceDetails(place) {
  const query = `Tell me about ${place}. 
        - What is the best time to visit?  
        - What is the weather like?  
        - What are the local specialties and cuisines?`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=${AIzaSyDsg0SEeUzdMhXYvZymmPogjgIOYdqArbk}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: { text: query } }),
    }
  );

  const data = await response.json();
  return data.candidates ? data.candidates[0].output : "No details found.";
}

document.addEventListener("DOMContentLoaded", async function () {
  let place = localStorage.getItem("searchedPlace");
  document.getElementById("place-name").innerText = `Place: ${place}`;

  if (place) {
    let info = await fetchPlaceDetails(place);

    // Extract details using regular expressions or splitting text
    let bestTime = info.match(/Best time to visit:\s*(.*)/i);
    let weather = info.match(/Weather:\s*(.*)/i);
    let specialties = info.match(/Local specialties:\s*(.*)/i);

    document.getElementById("best-time").innerText = bestTime
      ? bestTime[1]
      : "Not available.";
    document.getElementById("weather").innerText = weather
      ? weather[1]
      : "Not available.";
    document.getElementById("specialties").innerText = specialties
      ? specialties[1]
      : "Not available.";
  } else {
    document.getElementById("result-container").innerHTML =
      "<p>No place searched.</p>";
  }
});
