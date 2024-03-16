
//  ------------------------------CHAPTER 12 & 13---------------------------------  //

// Question.1
// function checkInputType(simple) {
//   if (!isNaN(parseInt(simple))) {
//     console.log(char + " is a number.");
//   } else if (simple.charCodeAt(0) >= 65 && simple.charCodeAt(0) <= 90) {
//     console.log(simple + " is an uppercase letter.");
//   } else if (simple.charCodeAt(0) >= 97 && simple.charCodeAt(0) <= 122) {
//     console.log(simple + " is a lowercase letter.");
//   } else {
//     console.log(simple + " is not a number or letter.");
//   }
// }
// var userInput = prompt("Enter a character:");
// checkInputType(userInput);

// Question.2
// let num1 = parseInt(prompt("Enter the first number: "));
// let num2 = parseInt(prompt("Enter the second number: "));

// if (num1 > num2) {
//   console.log(num1 + " is larger than " + num2);
// } else if (num2 > num1) {
//   console.log(num2 + " is larger than " + num1);
// } else {
//   console.log(num1 + " and " + num2 + " are equal.");
// }

// Question.3
// var number = parseInt(prompt("Enter a number"));
// if (number > 0) {
//   console.log(number + " is positive.");
// } else if (number < 0) {
//   console.log(number + " is negative.");
// } else {
//   console.log(number + " is zero.");
// }

// Question.4
// var smunc1 = "i";
// var vowel = prompt("Enter a `Vowel` character");
// var smunc1 = "a";
// var smunc2 = "e";
// var smunc3 = "i";
// var smunc4 = "o";
// var smunc5 = "u";
// if (vowel === smunc1) {
//   console.log("Correct" + " " + smunc1 + " " + `is a vowel number`);
// } else if (vowel === smunc2) {
//   console.log("Correct" + " " + smunc2 + " " + `is a vowel number`);
// } else if (vowel === smunc3) {
//   console.log("Correct" + " " + smunc3 + " " + `is a vowel number`);
// } else if (vowel === smunc4) {
//   console.log("Correct" + " " + smunc4 + " " + `is a vowel number`);
// } else {
//   console.log("Please Enter A `Vowel` Nubmer");
// }

// Question.5
// var userInput = prompt("Please enter your Password");
// var userPass = "Saylani-SMIT";
// var userPass1 = "";
// if (userInput === userPass) {
//   console.log(
//     "Correct! The password you entered matches the original password"
//   );
// } else if (userInput === userPass1) {
//   console.log("“Please enter your password”");
// } else {
//   console.log("“Incorrect password”");
// }

// Question.6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
//   console.log(greeting);
// } else {
//   greeting = "Good evening";
//   console.log(greeting);
// }

// Question.7
// var hour = prompt("Enter time");
// if (hour >= 5 && hour < 12) {
//   console.log("Good Morning!");
// } else if (hour >= 12 && hour < 18) {
//   console.log("Good Afternoon!");
// } else if (hour >= 18 && hour < 21) {
//   console.log("Good Evening!");
// } else {
//   console.log("Good Night!");
// }


//  ------------------------------CHAPTER 14 to 16---------------------------------  //


// Question.1
// var studentNames = [];

// // Question.2
// var studentInfo = {
//   names: [],
//   grades: [],
// };

// // Question.3
// var fruits_arry = ["Apple", "Banana", "Orange"];

// // Question.4
// var Num_arry = [1, 2, 3];

// // Question.5
// var Bolean_arry = [true, false];

// // Question.6
// var mixed_array = ["Khubaib", 7, true];

// Question.7
// const qualifications = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M.Phil.",
//   "PhD",
// ];
// var qualificationL = document.getElementById("qualificationL");
// qualifications.forEach((qualification) => {
//   var listItem = document.createElement("li");
//   listItem.textContent = qualification;
//   qualificationL.appendChild(listItem);
// });

// Question.8

// var colors_array = ["red", "blue", "yellow", "green"];
// const colorLElement = document.getElementById("colorL");
// colorLElement.innerHTML = colors_array.join(", ");

//  ----------A-------------//
// var a = colors_array.unshift(prompt("Enter color name"));
// console.log(colors_array, a);
// const colorLElement = document.getElementById("colorL");
// colorLElement.innerHTML = colors_array.join(", ");
//  ----------B------------//
// var b = colors_array.push(prompt("Enter color name"));
// console.log(colors_array, b);
// const colorLElement = document.getElementById("colorL");
// colorLElement.innerHTML = colors_array.join(", ");
// ----------C-------------//
// var c = colors_array.unshift(
//   prompt("Enter first color name"),
//   prompt("Enter second color name")
// );
// console.log(c, colors_array);
// const colorLElement = document.getElementById("colorL");
// colorLElement.innerHTML = colors_array.join(", ");
// -----------D-----------//
// var d = colors_array.pop;
// console.log(colors_array, d);
// const colorLElement = document.getElementById("colorL");
// colorLElement.innerHTML = colors_array.join(", ");
// -----------E----------//
// var f = colors_array.pop();
// console.log(colors_array, f);
// const colorLElement = document.getElementById("colorL");
// colorLElement.innerHTML = colors_array.join(", ");
// -----------F----------//
// function addColorAtIndex() {
//   let targetIndex = parseInt(
//     prompt(
//       "Enter the index (0-" + (colors_array.length - 1) + ") to add a color:"
//     )
//   );
//   if (targetIndex < 0 || targetIndex > colors_array.length - 1) {
//     alert(
//       "Invalid index. Please enter a value between 0 and " +
//         (colors_array.length - 1)
//     );
//     return;
//   }
//   let newColor = prompt("Enter the color to add:");
//   colors_array.splice(targetIndex, 0, newColor);
//   const colorLElement = document.getElementById("colorL");
//   colorLElement.innerHTML = colors_array.join(", ");
//   alert("Color added successfully!");
// }
// addColorAtIndex();
// ----------G----------//
