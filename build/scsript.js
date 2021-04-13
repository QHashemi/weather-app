console.log("HELLO");
const cityName = document.getElementById("city");
const buttonClick = document.getElementById("submit");

const showCity = document.querySelector(".cityName");
const iconDiv = document.querySelector(".icon");
const showTemp = document.getElementById("temp");
const max = document.getElementById("max");
const hum = document.querySelector(".humad h1");
const nameWetter = document.getElementById("nameWetter");
var card = document.querySelector(".card");
var moreInfo = document.querySelector(".moreInfo");

var wind = document.querySelector("#wind");

var humadity = document.querySelector("#humadity");

var time = document.querySelector(".time");

cityName.addEventListener("keydown", getInfo);
document.addEventListener("DOMContentLoaded", getInfo);
function getInfo() {
  var city = cityName.value;
  console.log(city);

  if (city === "" || city === null || city === 0) {
    city = "perg";
  } else {
    city;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=1ce76d1d37b453e522f2a6b8f485c48b`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var wetterCity = data.name;
      var temp = Math.round(data.main.temp);
      var temp_max = Math.round(data.main.temp_max);
      var temp_min = Math.round(data.main.temp_min);
      var wetter_descrip = data.weather[0].description;
      var icon = data.weather[0].icon;
      var wind_deg = data.wind.deg;
      var wind_speed = Math.round(data.wind.speed);
      var wetterCityShort = data.sys.country;

      var humad = data.main.humidity;

      if (icon.includes("n")) {
        card.style.background = `url('./images/pexels-cliford-mervil-2469122.jpg')`;
        card.style.backgroundSize = "cover";
        card.style.backgroundRepeat = "no-repeat";
      } else {
        card.style.background = `url('./images/day2.jpg')`;
        card.style.backgroundSize = "cover";
        card.style.backgroundRepeat = "no-repeat";
      }

      showCity.innerText = wetterCity + " / " + wetterCityShort;
      showTemp.innerText = temp + "°c";

      max.innerText = temp_max + "°c ⬆ ⧸ " + temp_min + "°c ⬇";

      nameWetter.innerText = wetter_descrip;

      wind.innerText = "Speed: " + wind_speed + "km/h";

      humadity.innerText = "Humadity: " + humad + "%";

      iconDiv.style.background = `url('http://openweathermap.org/img/wn/${icon}@2x.png')`;
      iconDiv.style.backgroundSize = "cover";
      iconDiv.style.backgroundRepeat = "no-repeat";

      //GET TIME OF THE CITY

      var cityTime = new Date();

    });
}

var taggle = true;

hum.addEventListener("click", () => {
  if (hum.innerText == "►") {
    moreInfo.style.left = "-10px";
    hum.innerText = "◄ ";
  } else {
    moreInfo.style.left = "-200px";
    hum.innerText = "►";
  }
});


