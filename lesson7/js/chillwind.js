const temp = parseFloat(document.querySelector('.temp').textContent);
const wind = parseFloat(document.querySelector('.windspeed').textContent);
let wchill;

if (temp <= 50 && wind > 3) {
    wchill = windChill(temp, wind);
   
}
else {
    wchill = `N/A`;
} 

function windChill(temp, wind){
        let f = 35.74 + (temp * 0.6215) 
        - (35.75 * Math.pow(wind, 0.16)) 
        + (0.4275 * temp * Math.pow(wind, 0.16));
        return f.toFixed(0);
    }

document.querySelector('.windchill').innerHTML = `${wchill}°F`;
