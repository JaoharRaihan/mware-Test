// Day-1 
// //For in loop

// const person={
//     name:"Raihan",
//     age:24,
// }
// for(let a in person){
//     console.log(a,(person[a]))
// }


// //for of loop

// const a=[1,2,3,4,5,6]
// let b=0

// for(let c of a){
//     b+=c
// }
// console.log(b)


// //for loop

// for(let i=0;i<20;i++){
//     console.log(i)
// }


// //do while loop
// let p=0
// do{
//     console.log(p)
//     p++
// }while(p<5)

// //while loop

// let j=0
// while(j<10){
//     console.log(j++)
// }



// //Functions

// //function declaration

// function fname(a,b){
//     a++
//     return a+b
// }
// console.log(fname(7,8))


// //function expression

// const fname=function(a,b){
//     b++
//     return a-b
// }
// console.log(fname(7,8))


// //arrow function

// const addArrow=(a,b)=>a-b
// const addArrow=a=>a*a                //single var
// console.log(addArrow(7))


// const a=[1,2,3,4,5,6]

// const Double=a.map(num=>num*2)
// console.log(Double)


// const evens=a.filter(num=>num%3===1)
// console.log(evens)



// const a=(a="jaohar")=>`hello,${a}`
// console.log(a())
// console.log(a("Raihan"))


// const createuser =(name,age) => ({name,age})
// console.log(createuser("Raihan",24))





//clousers function

// function outerFunction(a){
//     return function innerFunction(b){
//         console.log(a,'outera',b,'innerb')
//     }
// }
// const resultfunction =outerFunction("Outside");resultfunction("inside")


// function createcounter(){
//     let count=0
//     return function(){
//         count++
//         console.log(count)
//     }
// }
// const counter =createcounter()
// counter()



// function bankaccount(balancenow){
//     let balance=balancenow
//     return {
//         deposit: function(ammount){
//             balance+= ammount
//             console.log(ammount,balancenow)
//         },
//         cheakbalance: function(){
//             console.log(balance)
//         }
//     }
// }
// const myaccount=bankaccount(100)
// myaccount.cheakbalance()
// myaccount.deposit(50)
// myaccount.cheakbalance()



// function fname(a){
//     setTimeout(function()  {
//         console.log('Hello',a)
//     }, 4000);
// }
// fname("RAihan")





//Higher-Order Function Examples









