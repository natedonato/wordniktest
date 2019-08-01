

var adjectives;
var nouns;

function fetchNames(type = "adjective") {
fetch(`https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=${type}&maxCorpusCount=-1&minDictionaryCount=0&maxDictionaryCount=-1&minLength=4&maxLength=-1&limit=100&api_key=nv78jxoqw7bu1xbgfx2tb3fij73km474ft9vydfozdmckawvn`)
    .then(function (response) {
        json = response.json();
        return json;
        }).then(function (myJson) {
            if(type === "adjective"){
                adjectives = myJson;
                fetchNames("noun");
            }else{
                nouns = myJson;
                initialize();
            }
            console.log(myJson.length);

            
    });
}


fetchNames();
function initialize() {

    const content = document.getElementById("content");
    content.innerText= "Ready!";
    const button = document.createElement("button");

    const name = document.createElement("p");
    button.innerText = "Get New Name";
    button.addEventListener("click", generateName)
    content.appendChild(button);
    
    content.appendChild(name);


    let i = 0;

    function getWord(array) {
        let word1 = array[i].word.slice();
        i += 1;

        if(adjectives.length <= i || nouns.length <= i){
            fetchNames();
            i = 0;
        }

        return word1;
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function generateName(){
        let word1 = capitalizeFirstLetter(getWord(adjectives));
        let word2 = capitalizeFirstLetter(getWord(nouns));
        if(word2[word2.length-1] !== "s"){word2 += "s";}

        name.innerHTML = "The " + word1 +" "+ word2;

    }
}


