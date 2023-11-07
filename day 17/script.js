document.addEventListener("DOMContentLoaded", function () {
    const countries = [
        { name: "India", code: "IN" },
        { name: "Pakistan", code: "PK" },
        { name: "China", code: "CN" },
    ];

    // Function  card
    function createCard(countryData) {
        const card = document.createElement("div");
        card.classList.add("custom-card", "mb-3");

        card.innerHTML = `
            <div class="card">
                <h5 class="card-title">${countryData.name}</h5>
                <img class="card-img-top" src="${countryData.flag}" alt="${countryData.name} Flag">
                <div class="card-body">
                    <p class="card-text">Region: ${countryData.region}</p>
                    <button class="btn btn-primary" data-country-name="${countryData.name}">Click for weather</button>
                </div>
            </div>
        `;

        document.getElementById("card-container").appendChild(card);

        //  event listener Click for weather
        const weatherButton = card.querySelector("button");
        weatherButton.addEventListener("click", function () {
            fetchWeatherData(this.getAttribute("data-country-name"));
        });
    }

    //fetch weather data
    function fetchWeatherData(countryName) {
        // Use your OpenWeatherMap API key
        const apiKey = "c8b56c354e1812e5a24ec3861e6c5063";
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=${apiKey}`)
            .then((response) => response.json())
            .then((data) => {
                // Extract the max temperature and display it in the alert
                const maxTemp = data.main.temp_max;
                alert(`Max Temperature for ${countryName}: ${maxTemp}°C`);
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    }

    // create cards for each country
    countries.forEach((country) => {
        fetchCountryData(country.name);
    });

    // fetch country data and flag URLs
    function fetchCountryData(countryName) {
        let flagUrl;
        switch (countryName) {
            case "India":
                flagUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png";
                break;
            case "Pakistan":
                flagUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/2560px-Flag_of_Pakistan.svg.png";
                break;
            case "China":
                flagUrl = "https://c4.wallpaperflare.com/wallpaper/419/878/450/china-flag-chinese-prc-chinese-flag-hd-wallpaper-preview.jpg";
                break;
            default:
                flagUrl = "URL_TO_DEFAULT_FLAG"; // Replace with a default flag URL if needed
        }

        createCard({
            name: countryName,
            flag: flagUrl,
            region: "Region Information",  // Replace with actual region data
        });
    }
});
