/* Die Satzbau-Maschine | Arrays */

/* Theorie ARRAY */

// let arr;

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
// function getSentence(wort1,wort2,wort3,wort4) {

//     const gap = " ";
//     const pkt = ".";
//     const str = wort1 + gap + 
//                 wort2 + gap + 
//                 wort3 + gap + 
//                 wort4 +
//                 pkt;

//     return str  //"Ich bin Thomas Sonntag"
// }

/*** 01a. Funktionalität mit Array 1 */

// output(getSentenceArr(["Ich","bin","Thomas","Sonntag"]))
// function getSentenceArr(arr) {

//     const gap = " ";
//     const pkt = ".";
//     const str = arr[0] + gap + 
//                 arr[1] + gap + 
//                 arr[2] + gap + 
//                 arr[3] +
//                 pkt;

//     return str;
// }

/*** 01b. Funktionalität mit Array 2 */

// Transponieren: Untereinander --> Nebeneinander 


output(getSentenceArr2(["Ich","bin","Thomas","Sonntag"]));
output(getSentenceArr2(["Ich","bin","Thomas","Sonntag","und"]));
output(getSentenceArr2(["Ich","bin","Thomas","Sonntag","und","lebe"]));
output(getSentenceArr2(["Ich","bin","Thomas","Sonntag","und","lebe","in"]));

function getSentenceArr2(arr) {

    const gap = " ";
    const pkt = ".";
    let str = "";

    for (let i = 0; i < arr.length; i++) {

        if (i != arr.length-1) {
            str += arr[i] + gap;
        } else {
            str += arr[i] + pkt;
        }        
    }
 

    return str;
}

// let str = ""; // Anfangswert
// const addStr = "Test";
// const gab = " "

// for (let i = 0; i < 5; i++) {
//     // output("in der loop " + str);
//     str = str + addStr + gab;
// }
// output("in der loop " + str);



/******* 02a Theorie: Schleifen (for-schleife) *******/

/* schleife als Wiederholungs-Struktur */

// Inkrement (untere Grenze --> obere Grenze)
// for (let i = 0; i < 10; i++) {
//      output(i);
// }

// Dekrement (obere Grenze --> untere Grenze)
// for (let i = 10; i > 0; i--) {
//     output(i);
// }

// Inkrement (var. Schrittweite)
// for (let i = 0; i < 100; i+=10) {
    // output(i);
// }


/* For-Schleife für Array-Index (Iteration) */

let arr = ["Ich","bin","der","coole","Thomas","Sonntag"]
// for (let i = 0; i < arr.length; i++) {
//        output(arr[i]);
// }
    





// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


