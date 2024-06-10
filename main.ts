//      🚀 Day 24 Challenge: Start Coding! 🚀

//Question 70:
// Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5.
// Explain how the let keyword affects the visibility of the loop variable.

function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

printNumbers(); // output is 1 2 3 4 5 one by one

// Question 71:
// Compare let and const: Create two examples where let allows reassignment but const does not. 
// Try to reassign a const-declared variable and catch the error.

let age = 26;
age = 16;
console.log(age); // output is 16

const name = "Muhammad Saad";
// name = "Khizar";  // this will give an error because const is not reassignable
console.log(name); // output is Muhammad Saad


// Question 72:
// Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const.
// Show how variables declared inside the block are not accessible outside of it.


// Demonstrating block scope
{
    let blockLet = "visible inside the block";
    const blockConst = "also only inside the block";
    console.log(blockLet); // Works fine here
    console.log(blockConst); // Also works fine here
}
// This shows that `let` and `const` keep variables safe inside the block where they're defined.

