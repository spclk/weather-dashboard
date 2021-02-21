var searchEntry = document.querySelector("#magnify");
var searchHistory = document.querySelector("#recent");
var currentWeather = document.querySelector("#current");
var forecast1 = document.querySelector("#day1");
var forecast2 = document.querySelector("#day2");
var forecast3 = document.querySelector("#day3");
var forecast4 = document.querySelector("#day4");
var forecast5 = document.querySelector("#day5");

var currentWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var weatherKey = "&units=imperial&appid=910119384e38823f5fe0923ddc62a2c5";

var cityName = ""; 

// First API - current weather
function todaysWeather (city){
  cityName = city;
  //Moment.js API for dates
  var query = currentWeatherURL + cityName + weatherKey;
  var today = moment().format("dddd, MMMM Do YYYY");

  //Clearing out cards before populating each search result
  currentWeather.innerHTML = "";
  forecast1.innerHTML = "";
  forecast2.innerHTML = "";
  forecast3.innerHTML = "";
  forecast4.innerHTML = "";
  forecast5.innerHTML = "";

  fetch(query)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data);
      var nameOfCity = $("<p>");
      var date = $("<p>");
      var temperature = $("<p>");
      var humidity = $("<p>");
      var windSpeed = $("<p>");
      var currentIcon = $("<img>");
      $(currentWeather).append(nameOfCity, currentIcon, date, temperature, humidity, windSpeed);
      date.text(today);
      nameOfCity.text(data.name)
      temperature.text("temperature: " + data.main.temp);
      humidity.text("humidity: " + data.main.humidity);
      windSpeed.text("wind speed: " + data.wind.speed);

      currentIcon.attr("src","http://openweathermap.org/img/wn/" + data.weather[0].icon +"@2x.png")
      
      var latitude = data.coord.lat;
      var longitude = data.coord.lon;

      // Second API 
      var forecastWeatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=" + weatherKey;
      
      fetch(forecastWeatherURL)
        .then(function (response) {
          return response.json()
        })
        .then(function (data) {
          console.log(data);
          var indexUV = $("<p>");
          $(currentWeather).append(indexUV);
          indexUV.text("UV index: " + data.current.uvi);
          
          // Day 1
          var date1 = $("<p>");
          var forecastIcon1 = $("<img>");
          var forecastTemperature1 = $("<p>");
          var forecastHumidity1 = $("<p>");
          $(forecast1).append(date1, forecastIcon1, forecastTemperature1, forecastHumidity1);
            date1.text(moment().add(1, 'days').format("dddd, MMMM Do YYYY")); 
            forecastTemperature1.text("temp: " + data.daily[1].temp.day);
            forecastHumidity1.text("hum: " + data.daily[1].humidity);
          
          // Day 2
          var date2 = $("<p>");
          var forecastIcon2 = $("<img>");
          var forecastTemperature2 = $("<p>");
          var forecastHumidity2 = $("<p>");
          $(forecast2).append(date2, forecastIcon2, forecastTemperature2, forecastHumidity2);
            date2.text(moment().add(2, 'days').format("dddd, MMMM Do YYYY"));
            forecastTemperature2.text("temp: " + data.daily[2].temp.day);
            forecastHumidity2.text("hum: " + data.daily[2].humidity);
          
          // Day 3
          var date3 = $("<p>");
          var forecastIcon3 = $("<img>");
          var forecastTemperature3 = $("<p>");
          var forecastHumidity3 = $("<p>");
          $(forecast3).append(date3, forecastIcon3, forecastTemperature3, forecastHumidity3);
            date3.text(moment().add(3, 'days').format("dddd, MMMM Do YYYY"));
            forecastTemperature3.text("temp: " + data.daily[3].temp.day);
            forecastHumidity3.text("hum: " + data.daily[3].humidity);

          // Day 4
          var date4 = $("<p>");
          var forecastIcon4 = $("<img>");
          var forecastTemperature4 = $("<p>");
          var forecastHumidity4 = $("<p>");
          $(forecast4).append(date4, forecastIcon4, forecastTemperature4, forecastHumidity4);
            date4.text(moment().add(4, 'days').format("dddd, MMMM Do YYYY"));
            forecastTemperature4.text("temp: " + data.daily[4].temp.day);
            forecastHumidity4.text("hum: " + data.daily[4].humidity);

          // Day 5
          var date5 = $("<p>");
          var forecastIcon5 = $("<img>");
          var forecastTemperature5 = $("<p>");
          var forecastHumidity5 = $("<p>");
          $(forecast5).append(date5, forecastIcon5, forecastTemperature5, forecastHumidity5);
            date5.text(moment().add(5, 'days').format("dddd, MMMM Do YYYY"));
            forecastTemperature5.text("temp: " + data.daily[5].temp.day);
            forecastHumidity5.text("hum: " + data.daily[5].humidity);
        }); 
    });
};

// function forecastWeather(lat,lon) {
//   var secondAPI = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
// }


searchEntry.addEventListener("click", function(event){
  var searchCity = $("#search").val()
  todaysWeather(searchCity)
  var recentButton = document.createElement("button");
  recentButton.textContent = searchCity
  searchHistory.appendChild(recentButton)
});

$("#recent").on("click", "button", function(event){
  console.log(event.target);
})



// localStorage.setItem();
// localStorage.getItem();