/* Die Satzbau-Maschine | Arrays */

/* Theorie ARRAY */

let arr;

// arr = new Array(); // Konstruktor

// arr = [];   // Literal Schreibweise
// arr = [2,4,7,11];
// arr = [true,true,false];
// arr = ["Ich","bin","Thomas","Sonntag"];

// output(arr);    
// output(arr.length) // Anzahl der Elemente in diesem Array
// output(arr[0]);  // Index (Position im Array)
// output(arr[2]); // Index (3. Position im Array [0,1,2,3...])
// output(arr[arr.length-1]); // Index (Letzte Position im Array)







/**** 01. Funktionalität mit Einzelparameter ****/
// ---> "Ich bin Thomas Sonntag"

// output(getSentence("Ich","bin","Thomas","Sonntag"))
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

/*** 01a. Funktionalität mit Array 1 */

// output(getSentenceArr(["Ich","bin","Thomas","Sonntag"]))
function getSentenceArr(arr) {

    const gap = " ";
    const pkt = ".";
    const str = arr[0] + gap + 
                arr[1] + gap + 
                arr[2] + gap + 
                arr[3] +
                pkt;

    return str;
}


/******* 02a Theorie: Schleifen (for-schleife) *******/

/* schleife als Wiederholungs-Struktur */

for (let i = 0; i < 4; i++) {  // Beginn (let i=0) Ende (i<4) // i++ aufwärtszählen von i
    output(i)    
}



// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


