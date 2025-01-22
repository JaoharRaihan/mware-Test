// let shoppingDone = false;
// let childsAllowance;

// if (shoppingDone === true) {
//   childsAllowance = 10;
// } else {
//   childsAllowance = 5;
// }




// for (let step = 0; step < 5; step++) {
//     // Runs 5 times, with values of step 0 through 4.
//     console.log("Walking east one step");
//   }
  



// let n = 0;
// let x = 0;
// while (n < 3) {
//   n++;
//   x += n;
// }


// const i =0

// function dumpProps(obj, objName) {
//     let result = "";
//     for (const i in obj) {
//       result += `${objName}.${i} = ${obj[i]}<br>`;
//     }
//     result += "<hr>";
//     return result;
//   }
  



// const x = [0, 1, 2, 3, 4, 5, 6, 7];
// const a = [x, x, x, x, x];

// for (let i = 0, j = 7; i <= j; i++, j--) {
//   //                              ^
//   console.log(`a[${i}][${j}]= ${a[i][j]}`);
// }


// const x=40


// if (x > 50) {
//   console.log("Uden 50")
// } else if (x > 5) {
//   console.log("over 5")
// } else {
//   console.log("df")
// }



// const foo = 20;
// switch (foo>50) {
//   case 1:
//     console.log("negative 1");
//     break;
//   case 0: // Value of foo matches this criteria; execution starts from here
//     console.log(0);
//   // Forgotten break! Execution falls through
//   case 1: // no break statement in 'case 0:' so this case will run as well
//     console.log(1);
//     break; // Break encountered; will not continue into 'case 2:'
//   case 2:
//     console.log(2);
//     break;
//   default:
//     console.log("default");
// }
// // Logs 0 and 1





// const a=50
// switch(a){
//   case 15:
//     console.log("its fiftine")
//   break
//   case 50:
//     console.log("It's 50")
//   break
//   case 75:
//     console.log("its fiftifive")
//   break
//   default:
//     console.log("default")
// }



// const expr=["Oranges","Apples","Bananas","Cherries"]

// const expr="Apples"


// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Apples":
//     console.log("Apples are $0.32 a pound.");
//     break;
//   case "Bananas":
//     console.log("Bananas are $0.48 a pound.");
//     break;
//   case "Cherries":
//     console.log("Cherries are $3.00 a pound.");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

// console.log("Is there anything else you'd like?");





// const Animal = "Goat";
// switch (Animal) {
//   case "Cow":
//   case "Giraffe":
//   case "Dog":
//   case "Pig":
//     console.log("This animal is extinct.");
//     break;
//   case "Dinosaur":
//   default:
//     console.log("This animal is not extinct.");
// }



// const foo = 15;
// let output = "Output: ";
// switch (foo) {
//   case 0:
//     output += "So ";
//   case 1:
//     output += "What ";
//     output += "Is ";
//   case 2:
//     output += "Your ";
//   case 3:
//     output += "Name";
//   case 4:
//     output += "?";
//     console.log(output);
//     break;
//   case 5:
//     output += "!";
//     console.log(output);
//     break;
//   default:
//     console.log("Please pick a number from 0 to 5!");
// }




// const foo = 42; // foo is a number
// const result = foo + 3; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
// console.log(result); // 421


