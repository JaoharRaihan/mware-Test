//day-2


//1 Sum of Numbers


// let a=0
// let i=1
// while(i<=100){
//     a+=i
//     i++
// }
// console.log(a)




//2  multification

// let a=10
// let i=1

// do{
//     console.log(`${a} X ${i} =${a+i}`)
//     i++
// }while(i<=10)

//3 smallest biggest number

// const arr = [34, -20, 78, 12, -5];

// let a=0
// let i=1
// while(i<arr.length){
//     if(arr[i]<a){
//         a=arr[i]
//         }
//         i++
// }
// console.log(a)

//4  odd numbers

// let a=1
// while(a<=20){
//     console.log(a)
//     a+=2
// }


//reverse
// const arr=[1,2,3,4,5,6]

// let a=[]
// i=arr.length -1
// while(i >=0){
//     a.push(arr[i])
//     i--
// }
// console.log(a)


//numbersss  to do all 

// const arr = [15, 22, 35, 8, 40];
// let a=0
// let b=0
// let i=0

// while(i<arr.length){
//     if(arr[i]<=22){
//         a+=arr[i]
//     }else if(arr[i]>=40){
//         b+=arr[i]
//     }
//     i++
// }
// console.log(a**2)
// console.log(b**2)


// a target number exit check

// const arr = [15, 33, 33, 22, 40, 33]

// let a=33
// let b=0
// let i=0
// while(i<arr.length){
//     if(arr[i]===a){
//         b++
//     }
//         i++
// }
// console.log(b)


//smallest and biggest number check

const arr = [15, 33, 63, 22, 40, 83]

let a=arr[0]
let i=0
let b=arr[0]
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