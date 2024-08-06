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
document.querySelector("#willkommen").innerText = "Hello " + name + ", welcome to this webpage";

// 11. Modify CSS - Select the element with the id 'text-output'
// use the style.fontSize property to set the text size to 30px
let textOutput = document.getElementById("text-output");
textOutput.style.fontSize = "60px";

// 12. Select the body element and use style.cssText to change the text color and background color

//13. Change src attribute of the image

//14. Create a new element
let newDiv = document.createElement("div");
newDiv.innerText = "Image above: Rick Astley";
document.body.append(newDiv);

//15. Create an img element
let newImg = document.createElement("img");
newImg.src = "https://pbs.twimg.com/media/GTo6sTeXAAA7Mbs.jpg";
newImg.style.width = "50%";
document.getElementById("beastholder").append(newImg);

function helloWorld(){
    let helloWorld = document.createElement("p");
    helloWorld.innerText = "Salve munde";
    document.body.append(helloWorld);
    alert("Salve munde!");
}

helloWorld();

function add2(a, b){
    alert(a + b);
}

add2(5000, 2);

let myButton = document.createElement("button");
myButton.innerText = "Another button";
document.body.append(myButton);

function handleClick(){
    alert("Button was clicked");
}

// Use Eventlistener to run the handleClick() function when button click
myButton.addEventListener('click', handleClick);

let darkModeButton = document.createElement("button");
darkModeButton.innerText = "Diskword Mode";
function darkMode(){document.body.style.cssText = "color: white; background-color: black;";}
darkModeButton.addEventListener('click', darkMode);
document.body.append(darkModeButton);

let randomColor = document.querySelector("#randomcolor");
function chooseColor(){
    let randomR = Math.floor(Math.random() * 225);
    let randomG = Math.floor(Math.random() * 225);
    let randomB = Math.floor(Math.random() * 225);
    document.body.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}
randomColor.addEventListener("click", chooseColor);