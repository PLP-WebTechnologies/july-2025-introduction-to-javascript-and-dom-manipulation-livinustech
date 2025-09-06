let studentName = ["Alice", "Opeyemi", "Paul", "Aishatu", "Suleiman"];   // Funtion name (studentName)

console.log(studentName);

let age = 30;  // 30 is a number datatype
console.log(age);

let x = 30;

for (let x = 5; x <= 30; x++) {
    console.log(x);
}   // counting rom 5 to 30

function greet(name) {
return ` Hello, ${name}!` // greet() is a function name. name is the parameter passed into the function

}  
console.log(greet("Faith")); // Output: Hello Faith!

    const fruits = ["Banana", "Mango", "Orange"];  // looping Through an array

    for (let fruit of fruits) {
    console.log(`I love ${fruit}`);
}

const container = document.getElementById("container");
  container.innerHTML = "<p>JavaScript Indept Knowledge</p>"; // Adds a paragraph by replacing the previous
  console.log(container.innerHTML)


  const h1 = document.querySelector("h1"); // first h1
  console.log(h1.textContent);

  const intro = document.getElementById("intro"); // show content
  console.log(intro.innerText);


