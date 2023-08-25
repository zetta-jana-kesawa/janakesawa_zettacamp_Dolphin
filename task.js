let leastBook = "Chemistry";
const faveBook = "Biology";



const person = {firstName:"Jan", lastName:"Kess", age:32, height:173};


//update leastBook value below
leastBook = "Mathematics";

let ilove = leastBook + " " + "&" + " " + faveBook

//update faveBook value below

//change const person property below
person.firstName = "Gus";



let x = 5.6, y = x < 7, z = 10;

console.log(typeof x);
console.log(typeof y);
console.log(x + z);

document.getElementById("leastfav").innerText = leastBook;
document.getElementById("mostfav").innerText = faveBook;
document.getElementById("love").innerText = ilove;
document.getElementById("identity1").innerText = person.firstName + " " + person.lastName;
document.getElementById("identity2").innerText = person.age;
document.getElementById("identity3").innerText = person.height + "cm";