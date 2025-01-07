// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function add(element) {
//     arr.push(element);
// }

// function remove(element) {
//     const index = arr.indexOf(element);
//     if (index !== -1) {
//         arr.splice(index, 1);
//     }
// }

// function update(oldElement, newElement) {
//     const index = arr.indexOf(oldElement);
//     if (index !== -1) {
//         arr[index] = newElement;
//     }
// }

// update(7, 10); 
// remove(7);     
// add(11);       

// console.log(arr);



// const hello= ()=>{
//     console.log("hello")
//     return "hi"
// }
// let v=hello()
// console.log(v)



function mufuc(a){
    a.make="Toyota"
}
const mycar={
    brand : "Corolla",
    cc :100,
}
console.log(mycar.make)
mufuc(mycar)
console.log(mycar.make)

function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const myCar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(myCar.make); // "Honda"
  myFunc(myCar);
  console.log(myCar.make); // "Toyota"
  