//object
const obj = {
    name: 'Olutobi Michael',
    gender: "male",
    age: 35,
    complexion: "fair",
};

let phone = {
    brand: "samsung",
    model: "galasy s22",
    price: 350000,
};
phone.color = "black";
console.log(phone);

let student = {
    name: "Michael",
    regNo: "c6/001",
    course: "backend",
    year: '2026',
    friend: ["john", "jane", "doe"]
};
console.log(student);
student.gender = "male";
console.log(student);
student.course = "science";
console.log(student);
delete student.year;
console.log(student);