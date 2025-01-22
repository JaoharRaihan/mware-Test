// // // Variable

// // let a=30
// // const b=20
// // var c=40

// // // Data Types

// // Object,function,Array are non primative and without them all are primative

// // Arithmetic: +, -, *, /, %
// // Comparison: ==, ===, !=, !==, >, <, >=, <=
// // Logical: &&, ||, !


// // // Conditinal Expression

// const a=7
// const b=9
// if (a>b){
//     console.log("A is Greater")
// }else {
//     console.log("B is Greater");
// }


// //Loop

// for(let i=0;i<0;i++){
//     console.log("i");
// }


// let i=0
// while(i<101){
//     console.log(i);
//     i++
// }


// let Array=[1,7,5,8]

// for(let num of Array){
//     console.log(num);
// }



// for(let i in Array){
//     console.log(i);
// }



// //Function

// const p=30
// const q=20
// function o(p,q){
//    return o=p+q
// }
// console.log(o(p,q));



// const sum=function(p,q){
//     return p+q
// }
// console.log(sum(p,q));


// //Promises

// const myp= new Promise ((resolve,reject)=>{
//     let success=true
//     if (success){
//         resolve("Task Complete")
//     }else{
//         reject("Error Shows")
//     }
// })

// const np=new Promise((resolve,reject)=>{
//     console.log("Is it Worked?");
    
//     setTimeout(() => {
//         console.log("It's Working")
//     },1000);
// })




// // Promises with API

// // Promise.all

// let MyPr1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("MY Promise 1");
//     }, 1000);
// })
// let MyPr2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("MY Promise 2");
//     }, 1000);
// })
// let MyPr3=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("MY Promise 3");
//     }, 3000);
// })

// let Promise_all=Promise.all([MyPr1,MyPr2,MyPr3])
// Promise_all.then((value)=>{
//     console.log(value);
// })



// let myp1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise one")
//     }, 1000);
// })
// let MyP2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject("Promise one")
//     }, 1000);
// })
// let MyP3=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise one")
//     }, 4000);
// })
// let Promise_al=Promise.allSettled([myp1,MyP2,MyP3])
// Promise_al 
// .then((value)=>{
//     console.log(value);
// })
// // Promise_al=Promise.all([myp1,MyP2,MyP3])
// .catch((error)=>{
//     console.log(error);
// })





// //Promise.allSatteld

// let pr1= new Promise((resolve,reject)=>{
//     resolve("PAllSATTELD-1")
// })
// let pr2= new Promise((resolve,reject)=>{
//     reject("ERROR-2")
// })
// let pr3= new Promise((resolve,reject)=>{
//     resolve("PAllSATTELD-3")
// })

// let promiseall_satteld=Promise.allSettled([pr1,pr2,pr3]);
// promiseall_satteld.then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error);
// })


// //Promise.race

// let pe1= new Promise((resolve,reject)=>{
//     resolve("PRACE-1")
// })
// let pe2= new Promise((resolve,reject)=>{
//     reject("ERROR-2")
// })
// let pe3= new Promise((resolve,reject)=>{
//     resolve("PRACE-3")
// })
// let promise_race= Promise.race([pe1,pe2,pe3])
// promise_race
// .then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{
//     console.log(error);
// })




// //Promise.any

let proany1= new Promise((resolve,reject)=>{
    reject("Promiseany-1")
})
let proany2= new Promise((resolve,reject)=>{
    resolve("Promiseany-2")
})
let proany3= new Promise((resolve,reject)=>{
    resolve("Promiseany-3")
})
let Promise_any=Promise.any([proany1,proany2,proany3])
Promise_any
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.log(error);
})

