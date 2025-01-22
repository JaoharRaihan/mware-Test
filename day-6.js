let p9 = new Promise((resolve, reject) => {
    console.log("Your order is confirmed");
    setTimeout(() => {
        console.log("Very soon you will get a confirmation");
    }, 1500);
    setTimeout(() => {
        console.log("Your order is processing");
    }, 3000);
    setTimeout(() => {
        console.log("A delivery man will collect your order and contact you soon.");
    }, 5000);
    setTimeout(() => {
        console.log("If you face any problem with your order, please call this number: 01991919");
    }, 7000);
    setTimeout(() => {
        resolve("Thanks for your shopping!");
        reject("We will contact you very soon!");
    }, 10000);
});
p9.then((resolve) => {
    console.log("Hope you don't face any problems", resolve);
})
.catch((error) => {
    console.log("Hi, your order is cancelled", error);
});
