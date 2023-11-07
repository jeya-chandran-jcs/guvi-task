function getRandomCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search?api_key=live_idSPZewlvu8x7N4lOKrNi2HwfMpDMayp7o3t5R9ix7vgXMJMtOmd8zdGiWyjgHtH')
        .then(response => response.json())
        .then(data => {
            const catImage = document.getElementById('catImage');
            catImage.src = data[0].url;
        })
        .catch(error => {
            console.error('Error fetching cat image:', error);
        });
}

getRandomCatImage(); // Fetch a random cat image on page load