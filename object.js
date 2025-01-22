// let bike ={
//     brand : "Yamaha",
//     version : "MT 15 V2.0",
//     engine : "155CC",
// }
// console.log(bike);

// bike.mileage ="56.77km";
// bike.brakes ="Double Disk";
// console.log(bike);

// delete bike.brakes;
// console.log(bike);

// bike =undefined;
// console.log(bike);






const bike = {
    brand: "Yamaha",
    version: "MT 15 V2.0",
    engine: "155CC",
};

for(const a in bike){
    console.log(`${a}:${bike[a]}`)
}

// // Change existing properties
// bike.brand = "Honda";
// bike.engine = "200CC";

// // Add new properties
// bike.color = "Black";
// bike.price = "$3,000";

// // Delete a property
// delete bike.version;

// console.log(bike);
