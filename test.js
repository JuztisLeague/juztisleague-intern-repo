
// BAD: No error handling

function getBirthYear_Bad(age) {
    return 2025 - age;
}
 

function divide_Bad(a, b) {
    return a / b;
}
 

function greetUser_Bad(name) {
    console.log("Hello, " + name + "!");
}
 
 

// GOOD: With proper error handling

 
function getBirthYear_Good(age) {
    if (age < 0 || age > 150) {
        console.log("Error: Invalid age.");
        return -1;
    }
    return 2025 - age;
}
 

function divide_Good(a, b) {
    if (b === 0) {
        console.log("Error: Cannot divide by zero.");
        return -1;
    }
    return a / b;
}
 

function greetUser_Good(name) {
    if (!name) {
        console.log("Error: Name cannot be empty.");
        return;
    }
    console.log("Hello, " + name + "!");
}
 
 

 
console.log("===== BAD (No Error Handling) =====");
console.log(getBirthYear_Bad(-5));   
console.log(divide_Bad(10, 0));      
greetUser_Bad("");                  
 
console.log("");
 
console.log("===== GOOD (With Error Handling) =====");
console.log(getBirthYear_Good(-5));  
console.log(divide_Good(10, 0));     
greetUser_Good("");       