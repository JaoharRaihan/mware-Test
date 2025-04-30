const prompt = require('prompt-sync')();
// let a = prompt("Enter a Number");

// if(a%5 ===0){
//     console.log("Buzz")
// }
// else{
//     console.log("Not Buzz")
// }






// let score =60

// if(score>=80 && score<=90){
//     console.log("A");
// }

// if(score>=70 && score<=79){
//     console.log("B");
// }

// if(score>=60 && score<=69){
//     console.log("C");
// }



// for(i=1;i<=6;i++){
//     console.log("Loops");
    
// }


// for(i=0;i<=20;i++){
//     if(i%2==0){
//         console.log(i);
        
//     }
// }




// let a={
//     name: "Mango",
//     Price:90,
//     Me:"Raihan"
// }
// let output=`This year the ${a.name} price is to be ${a.Price}`
// console.log(output);
// console.log("26 April",a.Me);
// let output2=`Every Bangladeshi Love ${a.name},but our goverment plan to import it to china but i dont know why!!`
// console.log(output2);





// const a={
//     name:"Apple",
//     Est:2009,
//     Service:8/10
// }

// const output=`${a.name} is a billion daller company.it's start ${a.Est},consumer ratings ${a.Service}`
// console.log(output);



// const a=prompt("Enter yOur Ex name: ")

// let output=`@${a}${a.length}`
// console.log(output);




// let marks=[85,83,46,77,88,99]

// let sum=0

// for(i of marks){
//     sum +=i
// }
// let avg=sum/marks.length
// console.log(avg);



// let prices=[250,645,300,900,50]
// let i=0

// for(let a of prices){
//     let afd=a/10
//     prices[i]=prices[i]-afd
//     console.log(`${prices[i]}`);
// i++
// }



let companys=["Microsoft","Google","Meta","Spotify"]

companys.shift()
companys.splice(2,1,"Uber")
companys.unshift()
companys.pop("Amazon")
companys.slice(1,4)
companys.concat("OrangeToolz")
console.log(`${companys}`);

