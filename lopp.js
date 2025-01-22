//forlopp

// const prompt = require("prompt-sync")({ sigint: true });

// let obj ={
//     brand:"yamaha",
//     version:"MT 15 V2.0",
//     engine:"155cc",
// }
// console.log(obj)
// for(let a in obj){
//     console.log(a,obj[a])
// }




//while lopp



// let n=("Enter")
// n=Number.parseInt(n)

// let i= 0;
// while(i<n){
//     console.log(i)
//     i++
// }



// let a = 33
// let i 

// while(i != a){
//     console.log("Value not ok")
//     i=prompt("Enter value")
// }
// console.log("Value ok")






// for (let step = 0; step <= 500; step++) {
//     // Runs 5 times, with values of step 0 through 4.
//     console.log("Walking east one step");
//   }
  



//   for (let run=0; run<20;run++){
//     console.log("Walking")
//   }









// function countSelected(selectObject) {
//     let numberSelected = 0;
//     for (let i = 0; i < selectObject.options.length; i++) {
//       if (selectObject.options[i].selected) {
//         numberSelected++;
//       }
//     }
//     return numberSelected;
//   }
  
//   const btn = document.getElementById("btn");
  
//   btn.addEventListener("click", () => {
//     const musicTypes = document.selectForm.musicTypes;
//     console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
//   });
  


// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);



// let a=20
// do {
//     a+=1
//     console.log(a)
// } while(a<=50)




// let a =0

// while(a<10){
//     a++
// }
// console.log(a)



// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log("Outer loops:", x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log("Inner loops:", z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }



// let a =0
// let b=0
// fgg: while(true){
//     a+=1
//     b=0
//     console.log("Out loop",a)

//     while(true){
//         b+=1
//         if( a===5 && b===10.){
//             break fgg
//         }
//         else if(b===10){
//             break
                
//         }
//         console.log("Inner Loop",b)
//     }
// }




// let i = 0;
// let n = 0;
// while (i < 2) {
//   i++;
//   if (i === 5) {
//     continue;
//   }
//   n += i;
//   console.log(n);
// }



// let i = 0;
// let j = 10;
// checkIandJ: while (i < 4) {
//   console.log(i);
//   i += 1;
//   checkJ: while (j > 4) {
//     console.log(j);
//     j -= 1;
//     if (j % 2 === 0) {
//       continue checkJ;
//     }
//     console.log(j, "is odd.");
//   }
//   console.log("i =", i);
//   console.log("j =", j);
// }


// let result = "";

// function dumpProps(obj, objName) {

//     for (const i in obj) {
//       result += `${objName}.${i} = ${obj[i]}<br>`;
//     }
//     result += "<hr>";
//     return result;
//   }
  



// /for   in Lopp

// const arr = [3, 5, 7];
// arr.foo = "hello";

// for (const i in arr) {
//   console.log(i);
// }

// for (const i of arr) {
//   console.log(i);
// }




// // for of    loop

// const arr = [3, 6];
// arr.foo = "hello";

// for (const i in arr) {
//     console.log(i);
//   }



// for(let a=0; a<200;a++){
//     console.log("Raihan")
// }

// do{
//     a=0
//     console.log("Raihan")
// }while(a<200)


//Loops Practice

// for(let i=10;i>=1;i--){
//     console.log(i)
// }
// for(let i=0;i<=10;i++){
//     if(i===3) continue
//     console.log(i)
// }

// let a="Raihan"
// let b=''
// for(i=a.length -1;i>=0;i--){
//     b+=a[i]
// }
// console.log(b)
// let c=''
// for(j=b.length -1;j>=0;j--){
//     c+=b[j]
// }
// console.log(c)