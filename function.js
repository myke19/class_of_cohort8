//function without parameters
function greetings(){
    console.log("Hello World")
}
greetings()

//function with parameters
function welcome(name){
    console.log(`welcome to class MR/MISS/MRS ${name}`)
}
welcome("Michael")

function add (){
    let x = 5;
    let y = 6;
    return x * y
}
console.log(add())

function addition (x , y){
    return x / y
}
console.log(addition(54, 9))

function ageCheck(age){
     return age >= 18
}

let michaelAge = ageCheck(19)
console.log(michaelAge)

function ageRange(age){
    if (age <= 18) {
        return "please leave"
    }else{
        return "buy me one bottle"
    }
}
let mikeAge = ageRange(20)
console.log(mikeAge)

//scope
//global scope
let scores = 75;

function gradingSystem(){
    if(score >= 50) {
        return "Passed!"
    }else{
        return "Failed!!!"
    }
}

//local scope
function delievery(){
    let fee = 5000
    return fee
}

//class work
function studentGrade(score){
    if(score >= 70 && score <= 100){
        return "A"
    }else if(score >= 50 && score <= 69) {
        return "B"
    }else {
        return "C"
    } 
}
console.log(studentGrade(80))

//Arrow function
const minus = (num) => {
    return num - 90
}
let min = minus(100)
