var searchEntry = document.querySelector("#magnify");
var searchHistory = document.querySelector("#recent");
var curretWeather = document.querySelector("#current");
var forecast1 = document.querySelector("#day1");
var forecast2 = document.querySelector("#day2");
var forecast3 = document.querySelector("#day3");
var forecast4 = document.querySelector("#day4");
var forecast5 = document.querySelector("#day5");

var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
var weatherKey = "&units=imperial&appid=910119384e38823f5fe0923ddc62a2c5";

var cityName = ""; 

function todaysWeather (city){
  cityName = city;
  var query = weatherURL + cityName + weatherKey;
  fetch(query).
    then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data);
    });
}
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

searchEntry.addEventListener("click", function(event){
  var searchCity = $("#search").val()
  todaysWeather(searchCity)
  var recentButton = document.createElement("button");
  recentButton.textContent = searchCity
  searchHistory.appendChild(recentButton)
});

// localStorage.setItem();
// localStorage.getItem();