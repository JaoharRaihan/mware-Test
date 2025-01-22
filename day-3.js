//Function//
//Function Declaration


// Function Declaration archetecture//

//  function fname(a,b){
//     Satements 
// }



//Examples

//1

// function fa1(b){
//     return b*b
// }
// console.log(fa(a))
// console.log(fa1(b))




// console.log(square(5)); // 25

// function square(n) {
//   return n * n;
// }


// // console.log(square(5)); 
// const square = function (n) {
//   return n * n;
// };
// console.log(square(5));


// const a=20
// const b=10

// function multify(){
//     return a*b
// }
// console.log(multify())


// function Sum(){
//     let a=20
//     let b=10
//     let name="raihan"
// function add(){
//     return(`${name},${a + b}`)
// }
// return add
// }
// const resultFunction = Sum()
// console.log(resultFunction())


//Use loop in function

// function loop(x){
//     if(x >=10){
//         return
//     }
//     console.log(x)
//     loop(x+2)
// }
// loop(0)



// function fname(a="Raihan"){
//     return a
//     console.log(`${a}`)
// }
// fname()



//Find the Largest of Two Numbers

// function compair(a,b){
//     return a<b ? a:b
// }
// console.log(compair(10,30))



// even numbers

// function checknum(a){
//     return a % 5 === 0
// }
// console.log(checknum(6))
// console.log(checknum(9))


//Reverse a String

// function reverseastring(a){
//     let b=""
//     for(let i=a.length -1;i>=0;i--){
//         b+=a[i]
//     }
//     return b
// }
// console.log(reverseastring("Jaohar Raihan"))



//Calculate Factorial

// function factorial1(a){
//     let b=1
//     for(let i=1;i<=a;i++){
//         b*=i
//     }
//     return b
// }
// console.log(factorial1(5))



function Sumpractice(a=0){
    const arr=[1,2,3,4,5,6,7]
    for(let i=0;i<arr.length;i++){
        a+=arr[i]
    }
    return a
}
console.log(Sumpractice())

function raihanname(a){
    let b=""
    for(let i=a.length -1;i>=0;i--){
        b+=a[i]
    }
    return b
}
console.log(raihanname("Jaohar Raihan"))
console.log(Sumpractice(10))

function checktf(a){
    return a % 2===0
}
console.log(checktf(12))
console.log(Sumpractice(20))
console.log(raihanname("nahiaR rahoaJ"))
console.log(checktf(3))


function useloopwithifelse(){
    const arr=[33,35,97,75,85]
    let a=arr[0]
    let b=arr[0]
    let i=0
    while(i<arr.length){
        if(arr[i]>a){
            a=arr[i]
        }else if(arr[i]<b){
            b=arr[i]
        }
        i++
    }
    console.log(a)
    console.log(b)
}
useloopwithifelse()
console.log(Sumpractice(20))
console.log(checktf(15))
console.log(checktf(14))
// console.log(useloop())