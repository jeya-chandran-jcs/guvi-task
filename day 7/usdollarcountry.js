const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.send();

xhr.onload = function () {
  if (xhr.status === 200) {
    var data = JSON.parse(this.response);

    data.forEach(country => {
      if (country.currencies && country.currencies.USD) {
        console.log(country.name.common);
      }
      else {
        console.error("Failed to retrieve country");
      }
    });
  } 
};
