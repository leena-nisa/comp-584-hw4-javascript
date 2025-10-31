// Section 1: Basic Rules and Data Types
// Exercise 1
let thisIsANewVariable = 10;
if (thisIsANewVariable === 10) {
  console.log("Exercise 1: thisIsANewVariable is equal to 10");
}

// Exercise 2
let welcomeMessage = `Hello, template strings!`;
let piApproximation = 1.1;
let isActiveUser = true;
console.log("Exercise 2:", welcomeMessage, piApproximation, isActiveUser);

// Exercise 3
let currentScore = 95;
console.log("Exercise 3: currentScore =", currentScore);

// Exercise 4
console.log("Exercise 4 (==):", "100" == 100);
console.log("Exercise 4 (===):", "100" === 100); 

// Section 2: Conditionals and Control Flow
// Exercise 5
let isWeekend = false;
let schedule;
if (isWeekend) {
  schedule = "Day off";
} else {
  schedule = "Work day";
}
console.log("Exercise 5: schedule =", schedule);

// Exercise 6
let userAge = 16;
if (userAge >= 18) {
  console.log("Exercise 6: Access Granted");
} else {
  console.log("Exercise 6: Access Denied");
}

// Exercise 7
let hasPermission = true;
let itemCount = 3;
if (hasPermission && itemCount < 5) {
  console.log("Exercise 7: Ready to process");
}

// Exercise 8
for (let i = 1; i <= 5; i++) {
  console.log("Exercise 8: iteration", i);
}

// Exercise 9
for (let i = 0; i < 10; i++) {
  if (i === 7) break;
  console.log("Exercise 9: i =", i);
}

// Exercise 10
let counter = 10;
do {
  console.log("Exercise 10: Running once");
} while (false);

// Section 3: Functions and Data Structures 
// Exercise 11
function calculateArea(width, height) {
  return width * height;
}
let resultArea = calculateArea(5, 10);
console.log("Exercise 11: resultArea =", resultArea);

// Exercise 12
let fruitList = ["Apple", "Banana"];
fruitList.push("Grape");
fruitList.shift();
console.log("Exercise 12: index of Banana =", fruitList.indexOf("Banana"));
//console.log("Exercise 12: fruitList =", fruitList);

// Exercise 13
let originalData = [1, 2, 3];
let clonedData = originalData.slice();
clonedData.push(4);
console.log("Exercise 13: originalData =", originalData);
console.log("Exercise 13: clonedData =", clonedData);

// Exercise 14
function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}
console.log("Exercise 14: Animal constructor defined");

// Exercise 15
let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");
let animalArray = [dog, cat];
console.log("Exercise 15: animalArray =", animalArray.map(a => ({ species: a.species, sound: a.sound })));