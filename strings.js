const hisName = "Michael"

console.log(hisName.toUpperCase());
console.log(hisName.toLowerCase());

function lowerMe (value) {
    return value.toLowerCase();
}
console.log(lowerMe(hisName));

const trimExample = " Hello World! ";
console.log(trimExample.trim());
console.log(trimExample.trimEnd());
console.log(trimExample.trimStart());

let fileName = 'report_final_2024_pdf';

console.log(fileName.startsWith("report"));
console.log(fileName.endsWith("draft"));
console.log(fileName.endsWith("pdf"));
console.log(fileName.startsWith("2024"));

const extractExample = "Michael"
console.log(extractExample.slice(0, 3));
console.log(extractExample.slice(3));
console.log(extractExample.slice(-3));
console.log(extractExample.substring(0, 3));
console.log(extractExample.substring(3));
console.log(extractExample.substring(-3));

// replace and replaceAll
const stringText = "Michael is handsome , Michael is so smart and cute , Michael is a software developer"
//console.log(stringText.replace("Michael" , "He"))
//console.log(stringText.replaceAll("Michael" , "He"))
splittedText = stringText.split(",")
console.log(splittedText[1].replaceAll("Michael" , "He"))

//reverse
let panlindrome = "madam"
let reversed = panlindrome.split("").reverse()
console.log(reversed)

function wordCheck(word) {
    return word === word.split("").reverse().join("") ? "Yes it is a panlindrome" : "No it is not a panlindrome"
}
console.log(wordCheck("tundeednut"))