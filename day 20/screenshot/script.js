function captureScreenshot() {
    const url = document.getElementById("url").value;
    const apiKey = "7def307631ed4d599b2162a4ce907407";
    const screenshotContainer = document.getElementById("screenshot-container");

    // Construct the screenshot URL with the given URL and API key
    const screenshotUrl = `https://screenshot.abstractapi.com/v1/?api_key=${apiKey}&url=${url}`;

    // Clear any previous screenshots
    screenshotContainer.innerHTML = "";

    // Create an image element to display the screenshot
    const screenshotImage = document.createElement("img");
    screenshotImage.src = screenshotUrl;
    screenshotImage.alt = "Web Page Screenshot";
    screenshotImage.style.maxWidth = "100%";

    // Append the screenshot image to the container
    screenshotContainer.appendChild(screenshotImage);
}