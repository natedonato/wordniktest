

var adjectives;

fetch("https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=adjective&maxCorpusCount=-1&minDictionaryCount=0&maxDictionaryCount=-1&minLength=4&maxLength=-1&limit=100&api_key=nv78jxoqw7bu1xbgfx2tb3fij73km474ft9vydfozdmckawvn")
    .then(function (response) {
        json = response.json();
        return json;
        }).then(function (myJson) {
            adjectives = myJson;
            console.log(myJson.length);
            initialize();
    });

function initialize() {

    const content = document.getElementById("content");
    content.innerText= "Ready!";
    const button = document.createElement("button");
    button.innerText = "Get New Name";
    button.addEventListener("click", generateName)
    content.appendChild(button);




    function generateName() {
        console.log(adjectives[0].word);
    }
}


