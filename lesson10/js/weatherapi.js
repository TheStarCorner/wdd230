const prestonWeatherAPI = 'b9a27c9c28258d3a6dbb0f76016928f7';
const townID = '5604473';


// const apiUrl = "http://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b1b15e88fa797225412429c1c50c122a1";
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?id=${townID}&units=imperial&appid=${prestonWeatherAPI}`;
fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const currentTemp = document.querySelector('#current-temp');
    const weathericon = document.querySelector("#icon");

    currentTemp.textContent = jsObject.main.temp.toFixed(0);
    let imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    let imgalt = jsObject.weather[0].description;
      
    currentTemp.textContent = jsObject.main.temp.toFixed(0);
    weathericon.setAttribute('src', imagesrc)
    weathericon.setAttribute('alt', imgalt)
      

  });



  