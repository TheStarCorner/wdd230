// const townID = '5604473';


// // const apiUrl = "http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1";
// const apiUrl = `http://api.openweathermap.org/data/2.5/weather?id=${townID}&units=imperial&appid=${prestonWeatherAPI}`;
// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     console.log(jsObject);

//     const currentTemp = document.querySelector('#current-temp');
//     const weathericon = document.querySelector("#icon");

//     currentTemp.textContent = jsObject.main.temp.toFixed(0);
//     let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
//     let imgalt = jsObject.weather[0].description;
      
//     currentTemp.textContent = jsObject.main.temp.toFixed(0);
//     weathericon.setAttribute('src', imagesrc)
//     weathericon.setAttribute('alt', imgalt)
      

//   });


const prestonWeatherAPI = 'b9a27c9c28258d3a6dbb0f76016928f7';

// Preston Town ID
const townID = '5604473';
const apiUrlCurrent = `https://api.openweathermap.org/data/2.5/weather?id=${townID}&units=imperial&appid=${prestonWeatherAPI}`;
const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?id=${townID}&units=imperial&appid=${prestonWeatherAPI}`;

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const skyConditionElement = document.querySelector('#sky-condition');
const highTempElement = document.querySelector('#high-temp');
const windChillElement = document.querySelector('#wind-chill');
const humidityElement = document.querySelector('#humidity');
const windSpeedElement = document.querySelector('#wind-speed');

const forecastFirstContainer = document.querySelector('#forecast-first-half');
const forecastSecondContainer = document.querySelector('#forecast-second-half');

function calcWindChill(temp, windSpeed){
    if (temp > 50 || windSpeed < 3) {
        return 'N/A';
    }
    let windChill = 35.74 + 0.6215 * temp - 35.75 * (windSpeed ** 0.16) + 0.4275 * temp * (windSpeed ** 0.16);
    windChill = Math.round(windChill);
    return windChill + '℉';
}

// Build weather summary
fetch(apiUrlCurrent)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        skyConditionElement.textContent = `${jsonObject.weather[0].main}, ${jsonObject.main.temp}℉`;
        highTempElement.textContent = `${jsonObject.main.temp_max}℉`;
        humidityElement.textContent = `${jsonObject.main.humidity}%`;
        windSpeedElement.textContent = `${jsonObject.wind.speed} mph`
        windChillElement.textContent = calcWindChill(jsonObject.main.temp, jsonObject.wind.speed);
    });

// Build five day forecast
fetch(apiUrlForecast)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        let daysCount = 0;
        jsonObject.list.forEach((timeSeg) => {
            const dateParts = timeSeg.dt_txt.split(' ');
            const d = new Date(dateParts[0]);
            const weekday = daysOfWeek[d.getDay()];
            if (dateParts[1] == "18:00:00") {
                const dayTemp = `${timeSeg.main.temp}℉`;
                const dayWeatherImgSrc = `https://openweathermap.org/img/w/${timeSeg.weather[0].icon}.png`;
                const dayWeatherImgAlt = timeSeg.weather[0].description;

                const dayContainerElement = document.createElement('div');
                const weekdayElement = document.createElement('p');
                const dayWeatherElement = document.createElement('img');
                const dayTempElement = document.createElement('p');

                dayContainerElement.classList.add('forecast-day');
                weekdayElement.textContent = weekday;
                weekdayElement.style.fontWeight = 'bold';
                dayWeatherElement.src = dayWeatherImgSrc;
                dayWeatherElement.alt = dayWeatherImgAlt;
                dayTempElement.textContent = dayTemp

                dayContainerElement.appendChild(weekdayElement);
                dayContainerElement.appendChild(dayWeatherElement);
                dayContainerElement.appendChild(dayTempElement);
                if (daysCount < 3) {
                    forecastFirstContainer.appendChild(dayContainerElement);
                }
                else {
                    forecastSecondContainer.appendChild(dayContainerElement);
                }
                daysCount++;
            }
        });
    });

console.log(apiUrlForecast);

  