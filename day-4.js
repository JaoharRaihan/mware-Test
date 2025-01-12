//Function
//function Expression

//Function architecture

const sum=function(a,b){
    return a+b
}
console.log(sum(3,5));


//Examples

//sum
function sum1(a,b){
    return a+b
}
console.log(sum(5,6));


//Check if a Number is Positive

const checktf= function(a){
    return a>0
}
console.log(checktf(9));
console.log(checktf(-9));

//Find the Maximum and Minimum of Two Numbers

const Maximum=function(a,b){
    return a>b ? a:b
}
console.log(Maximum(10,75));

const Minimum =function(a,b){
    return a<b ? a:b
}
console.log(Minimum(10,75));


//Count the Number of Characters in a String

const countnum=function(a){
    return a.length
}
console.log(countnum("Raihan"))


//Find the Factorial of a Number

const factorial1 =function(a){
    let result=1
    for(let i=1;i<=a;i++){
        result *=i
    }
    return result
}
console.log(factorial1(5));


//Check for Even or Odd

const checkeo=function(a){
    return a % 2===0
}
console.log(checkeo(23));
console.log(checkeo(22));


//Find the Square of a Number

const square =function(a){
    return a*a
}
console.log(square(3));


//Reverse a String

const reverse =function(a){
    return a.split('').reverse().join('')
}
console.log(reverse("Jaohar Raihan"));
console.log(reverse("nahiaR rahoaJ"));

//Sum All Elements in an Array

const sumea=function(a){
    let b=0
    for(i=0;i<a.length;i++){
        b+=a[i]
    }
    return b++
}
console.log(sumea([1,2,3,4,5,6]));


//Find the Largest Number in an Array

const Largestnum=function(a){
    let b=a[0]
    for(let num of a){
        if(num>b){
            b=num
        }
    }
    return b
}
console.log(Largestnum([32,45,6,45,75,34]));

const lowestnum=function(a){
    let b=a[0]
    for(let num of a){
        if(num<b){
            b=num
        }
    }
    return b
}
console.log(lowestnum([4,12,34,66,3,24.3,53]));




const sum2=function(a){
    let b=0
    for(let i=0;i<a.length;i++){
        b+=a[i]
    }
    return b
}
console.log(sum2([1,2,3]))
