const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.send();

xhr.onload = function () {
  if (xhr.status === 200) {
    var data = JSON.parse(this.response);


    data.forEach(country => {
      console.log("Flag: " + country.flags[0]); 
      console.log("Name: " + country.name.common);
      console.log("Capital: " + country.capital[0]); 
    }
    )
}
}
