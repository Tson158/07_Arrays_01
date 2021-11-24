/* Die Satzbau-Maschine | Arrays */


/**** 01. Funktionalität mit Einzelparameter ****/
// ---> "Ich bin Thomas Sonntag"

output(getSentence("Ich","bin","Thomas","Sonntag"))
function getSentence(wort1,wort2,wort3,wort4) {

    const gap = " ";
    const pkt = ".";
    const str = wort1 + gap + 
                wort2 + gap + 
                wort3 + gap + 
                wort4 +
                pkt;

    return str  //"Ich bin Thomas Sonntag"
}




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


