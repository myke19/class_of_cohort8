try {
    //Code that might fail goes here
    let result = 10 / 2;
    console.log(result);
    undefinedFunction();
    console.log("This line will not run.");
} catch (error) {
    //This runs only if something goes wrong
    console.log("An error occurred: " + error.message + " " + error.name);
}
console.log("The program continues here");

function loadUserData(userId) {
try {
    if (userId <= 0) {
        throw new Error("user ID must be greater than 0");
    }
    console.log("Data loaded for user: " + userId);
}catch(error) {
    console.log("Failed: " + error.message);
}finally {
    console.log("Loading completed. closing connection.");
}
}
loadUserData(5);
loadUserData(-1);

function registerStudent(name, age) {
    try {
        if (!name) {
            throw new Error("Name cannot be empty");
        }
        if(age < 16 || age > 60) {
            throw new Error("Age must be between 16 and 60. Got: " +age);
        }
        console.log("Student registered: " + name +", Age: " + age);
    }catch (error) {
        console.log("Registered failed: " + error.message);
    }
}
registerStudent("Bola Okafor", 22);
registerStudent("", 22);
registerStudent("Kemi", 12);