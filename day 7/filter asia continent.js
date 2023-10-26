const xhr=new XMLHttpRequest();

xhr.open("GET","https://restcountries.com/v3.1/all",true)

xhr.send()
xhr.onload=function(){
    var data = JSON.parse(this.response)
    console.log(data)   
    const asiaCountries = data.filter(country => country.region === "Asia");
    console.log(asiaCountries)
}