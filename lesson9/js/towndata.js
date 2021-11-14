const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (jsonObject) {
    console.table(jsonObject)  // temporary checking for valid response and data parsing
    const cities = jsonObject['towns'];
    //    alert("prophets" + prophets[1]);

    const three_cities = cities.filter((city) => city.name === "Preston" || city.name === "Soda Springs" || city.name === "Fish Haven");
    for (let i = 0; i < three_cities.length; i++) {
      let info = document.createElement('div');
      info.classList.add("citystats")
      let card = document.createElement('div');
      card.classList.add("stamp");
      let h1 = document.createElement('h1');
      let h2 = document.createElement('h2');
      let founded = document.createElement('p');
      let population = document.createElement('p');
      let precip = document.createElement('p');
      let cimg = document.createElement('img');
      //let cimg = imgtext.replace(".jpg", ".png");

      h1.textContent = three_cities[i].name;
      h2.textContent = three_cities[i].motto;
      founded.textContent = 'Year Founded: ' + three_cities[i].yearFounded;
      population.textContent = 'Population: ' + three_cities[i].currentPopulation;
      precip.textContent = 'Annual Rain Fall: ' + three_cities[i].averageRainfall;
      //cimg.src = 'images/' + cities[i].photo.replace(".jpg", ".png");
      cimg.src = `images/${three_cities[i].photo}`;

      info.appendChild(h1);
      info.appendChild(h2);
      info.appendChild(founded);
      info.appendChild(population);
      info.appendChild(precip);
      card.appendChild(info);
      card.appendChild(cimg);
      //      alert(prophets[i].name);

      document.querySelector('div.cities').appendChild(card);
    }
  });
