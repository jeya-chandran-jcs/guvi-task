const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.send();

xhr.onload = function () {
  if (xhr.status === 200) {
    var data = JSON.parse(this.response);

 
    const totalPopulation = data.reduce((acc, country) => acc + (country.population || 0), 0);
    
    console.log("Total Population: " + totalPopulation);
 
  }
}
