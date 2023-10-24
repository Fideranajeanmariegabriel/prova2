var i = 0;
var a = 0;
var b = 0;
var c = 0;

function checkAnswer(option) {
    var selectedOption = option.innerText;
    var question = option.previousElementSibling.innerText;
    var ris = document.getElementById("punteggio");
    
    a++;

    // Esempio di logica di valutazione della risposta
    if (question === "Qual è la capitale dell'Italia?" && selectedOption === "a) Roma") {
        //console.log("Risposta corretta!");
        i++;
        ris.innerText = "Score = " + i;
        //alert("Risposta corretta!" + i);
    } else {
        //console.log("Risposta errata!");
        //ris.innerText = "Score = " + i;
        //alert("Risposta errata!" + z);
        i--;
        ris.innerText = "Score = " + i;
    }
}
