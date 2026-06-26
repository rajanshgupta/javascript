console.log("Hello Rajansh");
myname = "rajansh"
let age = 18
console.log(myname);
console.log(age);
// Variable cannot be re-declared but can be updated. A block scope variable.
let price = 100
console.log(price);
price = 200
console.log(price);
// Variable cannot be re-declared or updated. A block scope variable.
const color = "green"
console.log(color);

// object -> collection of diff variables
const student = {
// key : value

    name : "Rajansh",
    cgpa : 7.73,
    isPass : true,
};
console.log(student["name"]); //this is how you can access the name
// OR
console.log(student.name)
student.name = "mithu"
console.log(student.name)
// we can change the variable even it is a const because const variable cannot be changed but const object's key can be changed...IMP

//Arithematic operators
let a = 5;
let b = 5;
console.log("a = ", a, "& b = ", b);
console.log("a + b = " , a + b);
console.log("a - b = " ,a - b );
console.log("a ^ b = " , a ** b); //power
a++;
console.log("a++ = " , a);//post increment
a--;
console.log("a-- = " , a);//post decrement
console.log("++a = " , ++a);//pre increment

a = 5;
b = "5"; //string -> number
console.log("a == b" , a==b);//it will show true because when there is a number in string it will change it to number
//To avoid this we use strict method ===
console.log("a === b" , a===b);
//same works for not equal to != and !==
  
//LOGICAL OPERATORS
a = 6;
b = 5;
let cond1 = a > b;
let cond2 = a === 6;
//if both condition are true then it will return true (&&)
console.log(" cond1 && cond2 = " , cond1 && cond2);
console.log(" b ===5 || b > a = ",b ===5 || b > a );//either one of cond is true it will return true
console.log("!(a === 6) = ", !( a === 6));//it will print op

//CONDITIONAL statement
age = 20;
if (age > 18) {
    console.log("you can vote");
} else {
    console.log("can't mate")
}

let mode = "dark";
let colorr;
if (mode === "dark"){
    colorr = "black"
}else {
    colorr = "white";
}
console.log(colorr);

//else if statement
let height = 6;
if(height >= 6){
    console.log("man")
}
else if (height < 6 && height > 5){
    console.log("boy")
}
else{
    console.log("child")
}
//terniary operator.-->    condition ? true output : false output
age = 14;
age>18 ? console.log("adult") : console.log("child")

// //practice ques
// let no = prompt("enter the number"); //this is used for taking input
// if (no%5 === 0){
//     console.log("multiple of 5")
// } else {
//     console.log("not")
// }


//LOOPS

