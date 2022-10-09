fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=London,uk" +
    "&appid=199dca2af23f733a5da975cbb90a3950"
)
  .then(async (res) => res.json())
  .then((data) => {
    document.getElementById("aim").textContent = "Town: " + data.name;
    document.getElementById("temperature").innerHTML =
      "Temperature: " + Math.round(data.main.temp - 273) + "&deg;";
    document.getElementById("weather").textContent =
      "Weather: " + data.weather[0].description + data.weather[0].ico;
  });
