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
  container.innerHTML = "<p>JavaScript Indept Knowledge</p>"; // Adds a paragraph by replacing the previousconsole.log(container.innerHTML)


const h1 = document.querySelector("h1"); // first h1
    console.log(h1.textContent);

const intro = document.getElementById("intro"); // show content
    console.log(intro.innerText);


const form = document.getElementById("myDetail");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // stop page reload

    // Get form values
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    // Display result
    result.textContent = `Form submitted! Name: ${name}, Email: ${email}`;
});

 //  click the button for alert pop up
const btn = document.getElementById("btnSubmit");

btn.addEventListener("click", () => {
    alert("Button was clicked!");

    }
);

// change the color of text on mouseover
const text = document.getElementById("hoverText");

text.onmouseover = function () {
    text.style.color = "blue";  // mouse over text, color changes to blue
    text.style.fontWeight = "bold";
};

text.onmouseout = function () {
    text.style.color = "black";    // when mouse is out, text color is black
    text.style.fontWeight = "normal";
};

// to open link in a new tab
const myLink = document.getElementById("link");

myLink.addEventListener("click", (event) => {
    event.preventDefault(); 
    window.open(myLink.href, "_blank"); // Open in new tab
});
