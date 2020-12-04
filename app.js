var translateBtn = document.querySelector("#bt-translate");

// to read input
var translateIn = document.querySelector("#text-space");

// output shown
var translateOut = document.querySelector("#output");

//url taken from funtranslation.com
var url = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslationURL(input) {
    return url + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("Error occurred!");
    alert("Something wrong with the server, please try again");
}

/* making clickHandler() fncn as soon
 the click event triggers */
    translateBtn.addEventListener("click", btnClickHandler);

    function btnClickHandler() {
        console.log("button clicked.");

        // taking input
        var input = translateIn.value;

        /* fetch(getTranslationURL(input))
            .then(response => response.json())
            .then(json => console.log(json.contents.translated))
            .catch(errorHandler); */

            //caling server for processing
            fetch(getTranslationURL(input))
                .then(response => response.json())
                .then(json=> {
                    var translatedText= json.contents.translated;

                    //instead of showing on console, we show in outputDIV
                    translateOut.innerText= translatedText;
                })
                .catch(errorHandler);
    };