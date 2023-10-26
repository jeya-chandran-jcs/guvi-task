const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.send();

xhr.onload = function () {
  if (xhr.status === 200) {
    var data = JSON.parse(this.response);
    
    const countriesWithLowPopulation = data.filter(country => country.population < 200000);
    
    console.log(countriesWithLowPopulation);

}}
