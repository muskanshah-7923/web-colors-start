// WEB COLORS START

// Global Valuable
let colors = await loadTextFile("web-colors.txt"); 


//HTML Varoables
let outputEl = document.getElementById("container");

// Event Listener on the Update Button
document.getElementById("update-btn").addEventListener("click" , updateColors)
function updateColors() {
  //Inputs
  let colorsStr = document.getElementById("colors-in").value;
console.log(colorsStr);

// Update colors array
colors = colorsStr.split(" ");
}

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "starts-with") {
    displayStartLetter();
  } else if (selection === "includes") {
    displayIncludes();
  }
}

// MENU FUNCTIONS
// Display All Colors
function displayAll() {
  console.log("Display All Colors");
  outputEl.innerHTML = "<h2>DISPLAY ALL<h2>"

for (let color of colors) {
  outputEl.innerHTML += `<h4 style="color:${color}">${color}</h4>`;
}
}

// Display all Colors with prompted Starting Letter
function displayStartLetter() {
  console.log("Colors that Start With...");
}

// Display all colors that include provided substring
function displayIncludes() {
  console.log("Colors that Include...");
}
