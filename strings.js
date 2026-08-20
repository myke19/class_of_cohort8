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