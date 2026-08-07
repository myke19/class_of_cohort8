const arr = [1 , "Esther" , true , [1 , 2 , 3]]

let student1 = "Sara"
let student2 = "Samed"
let student3 = "Godwin"

let students = ["Sara" , "Samad" , "Godwin" , "Mohn"]
console.log(students[0])
console.log(students.length)
students[3] = "Michael"
console.log(students)

//adding elenment to an array
//.push
students.push("Ada")
console.log(students)

//.unshift
students.unshift("Jason")
console.log(students)

//pop
students.pop()
console.log(students)

//shift
students.shift()
console.log(students)

//includes , indexOf
console.log(students.includes("Sara"))
console.log(students.indexOf("Sara"))

//reverse , sort , slice , splide
students.reverse()
console.log("this is reverse:" ,students)

students.sort()
console.log("this is sorting:" ,students)

console.log("this is sliced:" ,students.slice(1 , 3))
console.log("this is spliced:" ,students.splice(1 , 2))
console.log("this is the array:" ,students)

//higher order array methods
//map, filter, reduce, forEach , findIndex , some , every
const numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
const doubleNumbers = numbers.map((num) => num * 2)
console.log(doubleNumbers)

const marketList = ["rice" , "beans", "garri" , "yam" , "plantain"]
const addedPrefix = marketList.map((item) => "I will buy:" + item)
console.log(addedPrefix)

//filter
const evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers)

const complexion = ["dark" , "brown" , "fair" , "white"]
const fairComplexion = complexion.filter((item) => item === "fair")
console.log(fairComplexion)

//find
const findFirstDark = complexion.find((item) => item === "dark")
console.log(findFirstDark)

//findIndex
const findIndexOfDark = complexion.findIndex((item) => item === "dark")
console.log(findIndexOfDark)

//reduce
const nums = [700, 300, 500, 1000, 2000]
const sum = nums.reduce((accumulator , currentValue) => accumulator + currentValue , 0)
console.log(sum)