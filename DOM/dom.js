// 1. select the element with the id 'title' using getElementById
// 2. save the reference to the element with the id 'title' to a variable
let myTitle = document.getElementById("title");

// 3. console log the new variable 
console.log(myTitle);

// 4. Use query selector to select the first h2 
document.querySelector("h2");

//5. Use query selector to select the paragraph by its class of 'description'
document.querySelector(".description");

// 6. Use query selector all to select all the h2's on the page
console.log(document.querySelectorAll("h2"));

//7. Exercise 1 Create at least 3 different elements in the body of your html file
// In your JS file select each element and log them to the console 
// Select multiple elements with querySelectorAll() and log them to the console

// 8. use innerText property to change the text of the h1 with the id 'transform
document.querySelector("#transform").innerText = "Nemo";

// 9. select the element with the id 'text-output' and use innertext to change its value to 'bar'
document.querySelector("#text-output").innerText = "bar";

// 10. Exercise 2: Welcome User
// Use a prompt()to ask the user for their name 
// Concatenate the user’s name into a welcome message
// Use a DOM method to output the welcome message into an html element
let name = prompt("Enter your name below");
document.querySelector("#willkommen").innerText = "Hello " + name + ", welcome to- never gonna give you up";

// 11. Modify CSS - Select the element with the id 'text-output'
// use the style.fontSize property to set the text size to 30px
let textOutput = document.getElementById("text-output");
textOutput.style.fontSize = "60px";

// 12. Select the body element and use style.cssText to change the text color and background color
document.body.style.cssText = "color: white; background-color: black;";

//13. Change src attribute of the image

//14. Create a new element
let newDiv = document.createElement("div");