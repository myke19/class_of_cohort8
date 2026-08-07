//if/else
    let age = 15
if(age >= 18){
    console.log("you can vote")
}else{
    console.log("you are not eligible to vote")
}
//
let gender = "male"
if(gender === "female"){
    console.log("you are a female, use the lady's cloakroom")
}else if(gender === "non=binary"){
    console.log("use the non-binary cloakroom")
}else if(gender === "trans"){
    console.log("use the trans cloakroom")
}else{
    console.log("you are a male, use the men's cloakroom")
}
//loops
for(let i =0; i <10; i++){
    console.log(i)
}
let arrOfNames = ["James", "Jane", "Joe", "Jim", "Jess", "Esther"]
console.log(arrOfNames.length)
for(let names = 0; names <arrOfNames.length; names++){
    console.log("TECHCRUSH" + arrOfNames[names])
}

for(let x=0; x<=36; x++){
    console.log(x * 2)
}

for(let t=0; t<=12; t++){
    console.log(t * 3)
}

//while loop
let loginAttempts = 1
while(loginAttempts <= 3){
    console.log(`attempt number ${loginAttempts}`)
    loginAttempts++
}

let scores = [20, 12, 25, 15, 4, 8];
for(let newScore = 0; newScore < scores.length; newScore++){
    console.log(scores[newScore] + 20)
}