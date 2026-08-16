
let name = "Michael";
let age = 35;
const student = "Backend";
console.log(typeof(name))
console.log(typeof(age))
console.log(typeof(student)) 

let shoppingList = ["Shirt", "Shoes", "Boxes", "Underwears"];
console.log(shoppingList);
console.log(typeof(shoppingList));

let num1 = 17;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

let price = 1500;
let discount = 200;
console.log(price - discount);

let a = 10;
let b = "10";
console.log(a !== b);
console.log(a === b);
//They are differ because b is a String
let score = 75;
console.log(score >= 50);

let hasTicket = true;
let hasID = false;
console.log(hasTicket && hasID);
console.log(hasTicket || hasID);

let password = "1234";
let correctPassword = "1234";
console.log(password === correctPassword);

let budget = 5000;
let itemPrice = 1200;
console.log(budget > itemPrice && budget > 0);

let Family = {
    fatherName : "Oluwatobi Michael",
    age : 35,
    complexion : "fair",
    field : "instructor",
    company : "ikoyi club1938",
}
let Mother = {
    ...Family,
    motherName : "Blessing",
    motherAge : 32,
    occupation : "operation manager",
    companyName : "link property",
    firstChildName : "Irewole",
    firstChildAge : 3,
    secondChildName : "Okikiola",
    secondChildAge : "6month",
}
console.log(Mother);

console.log(Object.keys(Mother));
console.log(Object.values(Mother));
console.log(Object.entries(Mother));

function juice (Apple) {
    try {
        if(Apple === "green") {
            throw new Error("it is green");
        }
        console.log("Data loading for user: " + Apple);
    }catch (error) {
        console.log("True: " + error.message);
    }
}
juice("green");

function studentAge(name, age){
    try {
        if(!name){
            throw new Error("name must not be empty");
        }
        if(age < 16 || age > 60) {
            throw new Error("you are not eligible. Got: " + age);
        }
        console.log("Loading age:" + name +", Age:" + age);
    }catch (error) {
        console.log("Failed:" + error.message);
    }
}
studentAge("Michael", 35);
studentAge("", 25);
studentAge("Okiki", 3);



