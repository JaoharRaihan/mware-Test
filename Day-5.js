//Promise in JavaScript

//Promise Basic Architecture

// let promise = new Promise(function(resolve, reject) {
//     resolve("Success!"); 
// });

// console.log(promise); 

//Promise Example

// let p1 = new Promise(function(resolve, reject) {
//     console.log("Identity is pending");
//     setTimeout(() => {
//         console.log("Hi,I am Raihan");
//         resolve(true);
//     }, 4000);
// });
// p1.then((value)=>{
//     console.log(value);
// })

// let p2 =new Promise(function(resolve,reject){
//     console.log("Another Identity is pendinding")
//     setTimeout(() => {
//         console.log("Hi,I am Ridita")
//         reject(true)
//     },2000);
// })
// p2.catch((error)=>{
//     console.log("Error is active");
    
// })





// let p3=new Promise((resolve,reject)=>{
//     console.log("I lost a person 5 second later you see the name")
//     setTimeout(() => {
//         console.log("Sadia Afrin Ridita")
//         resolve(true)
//     }, 5000);
// })
// p3.then((value)=>{
//     console.log(value);
// })

// let p4=new Promise((resolve,reject)=>{
//     console.log("DO you want to see two beautiful girls name? If yes wait for 5 second please")
//     setTimeout(() => {
//         console.log("Faria,Sadia")
//     }, 5000);
// })

// p4.catch((error)=>{
//     console.log(error);
// });




// let p5=new Promise((resolve,reject)=>{
//     console.log("You will see a gretest cricketer name after 5 second")
//     setTimeout(() => {
//         console.log("Shakib All Hasan")
//         resolve(true)
//     }, 3000);
// })
// p5.then((value)=>{
//     console.log("Is it True or False",value)
// })


// let p6=new Promise((resolve,reject)=>{
//     console.log("We see the greatest footballer name agter 7 second");
//     setTimeout(() => {
//         console.log("Messi");
//         reject(true)
//     }, 7000);
// })
// p6.catch((error)=>{
//     console.log("It's 100%",error);
// })



// let p7=new Promise((resolve,reject)=>{
//     console.log("Very soon we saw our playing 11");
//     setTimeout(() => {
//         console.log("Tazid,Emon,Shanto,Hridoy,Mushfiqur,Mahmudullah,Rishad,Nasum,Taskin,Nahid,Shariful")
//         resolve("Yes It's Right?")
//     }, 5000);
// })
// p7.then((Value)=>{
//     console.log("Is It Right?",Value)
// })



let p8=new Promise((resolve,reject)=>{
    console.log("You will see something after 5 second");
    setTimeout(() => {
        console.log("SOMETHING");
        reject("Yes,It's shows error sometimes")
    }, 5000);
})
p8.catch((error)=>{
    console.log("Is it sometimes show error?",error)
})


