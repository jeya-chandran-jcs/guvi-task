function captureScreenshot() {
    const url = document.getElementById("url").value;
    const apiKey = "7def307631ed4d599b2162a4ce907407";
    const screenshotContainer = document.getElementById("screenshot-container");

    //screenshot URL and given URL and API key
    const screenshotUrl = `https://screenshot.abstractapi.com/v1/?api_key=${apiKey}&url=${url}`;

    screenshotContainer.innerHTML = "";

    // Create an image 
    const screenshotImage = document.createElement("img");
    screenshotImage.src = screenshotUrl;
    screenshotImage.alt = "Web Page Screenshot";
    screenshotImage.style.maxWidth = "100%";

    // Append the screenshot 
    screenshotContainer.appendChild(screenshotImage);
}
