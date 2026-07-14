//console.log('Hello');
//console.log('I like pizza!');
//window.alert(`This is an alert!`);
//window.alert(`I like pizza!`);

//This is a comment
/*
document.getElementById("myH1").textContent = 'hello';
document.getElementById("myP").textContent = 'I like pizza';*
*/
//let x;
//let y;

//x = 2333
//console.log(x);
// 1. Locate the GUI button within the document
const myButton = document.getElementById("myGuiButton");

// 2. Define what happens when the button is clicked
function handleButtonClick() {
  alert("GUI Button Clicked successfully!");
}

// 3. Attach the click event handler to the button
myButton.addEventListener("click", handleButtonClick);
