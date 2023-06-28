window.addEventListener("load", function() {
    const apiKey = `tYbgPD16QHOzwt9sAaZ124Klwk7KjL0mu1ogirSt`
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {           
            const rootElement = document.getElementById("root");
            if(data.media_type === "image") {
                const imageElement = createImage(data.url);
                rootElement.appendChild(imageElement);
            }
            else {
                const videoElement = createVideo(data.url);
                rootElement.appendChild(videoElement);
            }
            console.log(data);
            const titleElement = createTextElement('he', data.title, 'apod-title');
            rootElement.appendChild(titleElement);
            const explanationElement = createTextElement('p', data.explanation, 'apod-info');
            rootElement.appendChild(explanationElement);
        })
        .catch(error => {
            console.log(error);
        })
})
const createImage = function (url) {
    const imageElement = document.createElement('img');
    imageElement.classList.add('apod-image');
    imageElement.src = url;
    return imageElement;
}
const createVideo = function (url) {
    const videoElement = document.createElement('iframe');
    videoElement.classList.add('apod-video');
    videoElement.src = url;
    return videoElement;
}
const createTextElement = function(tagName, textContent, className = '') {
    const textElement = document.createElement(tagName);
    if (className !== '') {
        textElement.classList.add(className);
    }
    textElement.textContent = textContent;
    return textElement;
}