var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = "Last Updated: " + mm + '/' + dd + '/' + yyyy;
document.write(today);

let nLastModif = Date.parse(document.lastModified);


/* credit: Hamburger video */
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */

  /* Credit: Virtual Lab */
  let d = new Date();
  document.getElementById("copyrightyear").textContent = d.getFullYear();

  const options = {
    weekday :'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }

  document.getElementById("currentDate").textContent = d.toLocaleDateString('emg-UK', options);

  function bannerCalculator() {
    
    const d = new Date();
    const today = d.getDay();
    const pancake = document.querySelector(".pancakeFri");
    
    if (today == 5) {
        pancake.style.display = 'block';
    
    }
    
    else {
        pancake.style.display = 'none';
    }
    }
    bannerCalculator();