const api2Url = 
'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=07407eccd051a7ab4fc81e187f4771';
fetch(api2Url)
   .then(response => response.json())
   .then(jsObject => {
       console.log(jsObject);

       const noon = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));
       console.log(noon);

       const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
       let day = 0;
       noon.forEach(forecast => {
           let thedate = new Date(forecast.dt_txt);
           document.querySelector('#dayofweek${day +1}').textContent = weekdays[thedate.getDay()];
           document.querySelector('#forecast${day + 1}').textContent = forecast.main.temp;
           day++;
       });



   });
