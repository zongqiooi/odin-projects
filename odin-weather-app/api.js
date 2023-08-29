let fahButton = document.querySelector(".fah");
let celButton = document.querySelector(".cel");
let searchButton = document.querySelector(".search");
let locationSpan = document.querySelector(".location");
let temperature = document.querySelector(".temperature");
let temperatureType = document.querySelector(".temperature-type");
let backgroundColor = document.querySelector("body");

const getTemperature = async (tempType) => {
  const location = document.querySelector("input").value;
  let locationTempCel = "";

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}`,
      {
        mode: "cors",
      }
    );
    const locationData = await response.json();

    if (tempType === "celsius") {
      locationTempCel = locationData.current.temp_c;
      temperatureType.textContent = "celsius";
    } else if (tempType === "fahrenheit") {
      locationTempCel = locationData.current.temp_f;
      temperatureType.textContent = "fahrenheit";
    }

    if (locationData.current.temp_c >= 30) {
      backgroundColor.style.backgroundColor = "#ED7B7B";
    } else {
      backgroundColor.style.backgroundColor = "#F0B86E";
    }

    locationSpan.textContent = location;
    temperature.textContent = locationTempCel;
  } catch (err) {
    locationSpan.textContent = location;
    temperature.textContent = "location not found, enter a new location";
    temperatureType.textContent = "location not found, enter a new location";
    console.log(err);
  }
};

searchButton.addEventListener("click", (event) => {
  let before = Date.now();
  getTemperature("celsius");
  console.log(
    `Time elapsed for fetching data from API: ${Date.now() - before} ms`
  );
  event.preventDefault();
});

fahButton.addEventListener("click", () => {
  getTemperature("fahrenheit");
});

celButton.addEventListener("click", () => {
  getTemperature("celsius");
});
