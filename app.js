var btnTranslate = document.querySelector("#btn-translate");
var textData = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";


btnTranslate.addEventListener("click",clickHandler);

function getTranslatedURL(value) {
    return serverURL + "?text=" + value;
}

function clickHandler() {
    var textValue = textData.value;
    outputDiv.innerText = "Translation in progress..."
    fetch(getTranslatedURL(textValue))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with the server, try again later.");
}
