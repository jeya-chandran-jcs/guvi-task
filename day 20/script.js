function searchPianoSounds() {
    const searchQuery = document.getElementById("searchQuery").value;
    const apiUrl = `https://freesound.org/apiv2/search/text/?query=${searchQuery}&token=3DS2PN8iB5OQy9KRmyc862O5lBIoKahDWG31XqVY`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const results = data.results;
            displayResults(results);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

function displayResults(results) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    results.forEach(result => {
        const soundLink = document.createElement("a");
        soundLink.href = result.url;
        soundLink.target = "_blank";
        soundLink.textContent = result.name;
        soundLink.style.color = "white"; 
        
        resultsContainer.appendChild(soundLink);
        resultsContainer.appendChild(document.createElement("br"));
    });
}
