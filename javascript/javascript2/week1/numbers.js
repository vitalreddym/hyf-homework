
// Shortest danishWord

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function getShortestWord(danishWords) {
    let shortWord = 0;
    for (let i=0; i<danishWords.length; i++) {
        if(danishWords[i].length<danishWords[shortWord].length) {
            shortWord = i;
        }
    }
    return danishWords[shortWord];
}
shortWord = getShortestWord(danishWords);
console.log( "The shortest danishword is " + shortWord);



// Find & Count Danish letters

// total number of danish letters
const danishLetters = ["æ", "å", "ø"];

function findDanishLetters (danishString) {
    let count = { total: 0 };
    for (let i = 0; i < danishString.length; i++) {
        if (danishLetters.includes(danishString[i])) {
            count.total = count.total + 1;
            if (count.hasOwnProperty(danishString[i])) {
                count[danishString[i]] += 1;
            } else {
                count[danishString[i]] = 1;
            }
        }
    } 
    console.log(count);
}

const danishString = "Jeg har en blå bil";
findDanishLetters(danishString);
const danishString2 = "Blå grød med røde bær";
findDanishLetters(danishString2);