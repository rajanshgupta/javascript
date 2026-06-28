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
    console.log("above 6")
}
else if (height < 6 && height > 5){
    console.log("btw 6 and 5")
}
else{
    console.log("below 5")
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
//sum from 1 to 10
let sum = 0;
for(let i = 1 ; i <= 10 ; i++){
    sum += i;
}
console.log("sum is ", sum);

let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}
//for of loop -> strings and arrays
let string = "rajansh"
let size = 0;
for(let i of string){ //iterator
    console.log(i);
    size++;
}
console.log("size of name is " , size)

//for in loop -> objects
const detail = {
// key : value

    name : "Rajansh",
    cgpa : 8,
    isPass : true,
};
for(let key in detail){
    console.log(key , "=" , detail[key]);
}

//print even no btw 1 to 100
for(num = 0 ; num<=100 ; num++){
    if (num % 2 === 0 ){
        console.log(num);
    }
}
//guess game

// let guessno = 99;
// userno = prompt("guess the no :");
// while(userno != guessno){
//     userno = prompt("wrong! guess the no again :");
// }
// console.log("you won");

//STRINGS -> immutable(can't be changed)
let str = "rajansh";
console.log(str.length);
console.log(str[3]);
//Template Literals
let specialstring = `This is a template literal ${1+2}`;//written in backtag(caps + ~)
console.log(specialstring);

const object = {
    item :"iPhone",
    price : 60000,
};
output = `price of ${object.item} is ₹${object.price} `;
console.log(output);
//for next line -> /n
//for more space -> /t

str = "rajansh";
let newstr = str.toUpperCase();//changes string in cap letters
console.log(str);
console.log(newstr);
//same for str.toLowerCase() -> changes string in lower char
//str.trim() -> helps to remove excess space
let str1 = "raj";
let str2 = "ansh";
console.log(str1.concat(str2));//helps to join two str

str = "hi";
console.log(str.replace("h" , "b"));//replace

//ARRAYS -> special types of obj, mutable(can be changed)
let marks = [197, 82, 75, 64, 36];
console.log (marks);
console.log(marks.length); //property
marks[1] = 99;
console.log (marks);
//to print all the elements
//for loop
for(let i = 0 ; i < marks.length ; i++){
    console.log(marks[i]);
}
//for of loop
for (let elem of marks) {
    console.log(elem);
}

/*Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class.*/
marks = [85, 97, 44, 37, 76, 60];
sum = 0;
for(let mark of marks){
    sum += mark;
}
console.log(`avg of marks is ${sum / marks.length} `);
let veg = ['tomato' , 'cucumber' , 'onion'];
veg.push("spinach");//add in end
console.log(veg);
veg.pop();//remove from end
console.log(veg);
//unshift() -> add on start
//shift() -> remove from start

//concat ->joins 2 arrays
let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman"];
let heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes);
console.log(marvelHeroes.slice(0 , 1));//heps to remove from 1 pos to 2nd
//to replace something in array -> splice()
console.log(dcHeroes.splice(1 , 1 , "women wander"));
console.log(dcHeroes);

//FUNCTIONS
