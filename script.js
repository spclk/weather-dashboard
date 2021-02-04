var searchEntry = document.querySelector("#magnify");
var searchHistory = document.querySelector("#recent");
var curretWeather = document.querySelector("#current");
var forecast1 = document.querySelector("#day1");
var forecast2 = document.querySelector("#day2");
var forecast3 = document.querySelector("#day3");
var forecast4 = document.querySelector("#day4");
var forecast5 = document.querySelector("#day5");

var weatherURL = "http://api.openweathermap.org/data/2.5/forecast?q=" ;
var weatherKey = "910119384e38823f5fe0923ddc62a2c5";

var cityName = "";


// &appid

searchEntry.addEventListener("click", function(event){
  var clicked = $(event.target).attr("id");
  var siblingTextArea = $(event.target).prev().val();
  console.log(clicked,siblingTextArea);
});

// localStorage.seItem();
// localStorage.getItem();