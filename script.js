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
      var nameOfCity = $("<h4>");
      var date = $("<h6>");
      var temperature = $("<p>");
      var humidity = $("<p>");
      var windSpeed = $("<p>");
      var currentIcon = $("<img>");
      $(currentWeather).append(date, nameOfCity, currentIcon, temperature, humidity, windSpeed);
      date.text(today);
      nameOfCity.text(data.name)
      temperature.text("Temperature: " + data.main.temp + "˚F");
      humidity.text("Humidity: " + data.main.humidity + "%");
      windSpeed.text("Wind speed: " + data.wind.speed + " MPH");

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
            forecastTemperature1.text("Temp: " + data.daily[1].temp.day + "˚F");
            forecastHumidity1.text("Humidity: " + data.daily[1].humidity + "%");
            forecastIcon1.attr("src","http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon +"@2x.png")
          
          // Day 2
          var date2 = $("<p>");
          var forecastIcon2 = $("<img>");
          var forecastTemperature2 = $("<p>");
          var forecastHumidity2 = $("<p>");
          $(forecast2).append(date2, forecastIcon2, forecastTemperature2, forecastHumidity2);
            date2.text(moment().add(2, 'days').format("dddd, MMMM Do YYYY"));
            forecastTemperature2.text("Temp: " + data.daily[2].temp.day + "˚F");
            forecastHumidity2.text("Humidity: " + data.daily[2].humidity + "%");
            forecastIcon2.attr("src","http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon +"@2x.png")
          
          // Day 3
          var date3 = $("<p>");
          var forecastIcon3 = $("<img>");
          var forecastTemperature3 = $("<p>");
          var forecastHumidity3 = $("<p>");
          $(forecast3).append(date3, forecastIcon3, forecastTemperature3, forecastHumidity3);
            date3.text(moment().add(3, 'days').format("dddd, MMMM Do YYYY"));
            forecastTemperature3.text("Temp: " + data.daily[3].temp.day + "˚F");
            forecastHumidity3.text("Humidity: " + data.daily[3].humidity + "%");
            forecastIcon3.attr("src","http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon +"@2x.png")

          // Day 4
          var date4 = $("<p>");
          var forecastIcon4 = $("<img>");
          var forecastTemperature4 = $("<p>");
          var forecastHumidity4 = $("<p>");
          $(forecast4).append(date4, forecastIcon4, forecastTemperature4, forecastHumidity4);
            date4.text(moment().add(4, 'days').format("dddd, MMMM Do YYYY"));
            forecastTemperature4.text("Temp: " + data.daily[4].temp.day + "˚F");
            forecastHumidity4.text("Humidity: " + data.daily[4].humidity + "%");
            forecastIcon4.attr("src","http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon +"@2x.png")

          // Day 5
          var date5 = $("<p>");
          var forecastIcon5 = $("<img>");
          var forecastTemperature5 = $("<p>");
          var forecastHumidity5 = $("<p>");
          $(forecast5).append(date5, forecastIcon5, forecastTemperature5, forecastHumidity5);
            date5.text(moment().add(5, 'days').format("dddd, MMMM Do YYYY"));
            forecastTemperature5.text("Temp: " + data.daily[5].temp.day + "˚F");
            forecastHumidity5.text("Humidity: " + data.daily[5].humidity + "%");
            forecastIcon5.attr("src","http://openweathermap.org/img/wn/" + data.daily[5].weather[0].icon +"@2x.png")
        }); 
    });
};

// Event Listener for initial search
searchEntry.addEventListener("click", function(event){
  var searchCity = $("#search").val()
  todaysWeather(searchCity)
  var recentButton = document.createElement("button");
  recentButton.textContent = searchCity;
  searchHistory.appendChild(recentButton);
});

// Event listener for previously searched cities
$("#recent").on("click", function(event){
  console.log(event.target);
  var recentlySearched = $(event.target).text();
  $("#recent").val(recentlySearched);
  todaysWeather(recentlySearched);{
  }
})
