let inventory=[]

function addItem(name,quantity,price){
    let item = {
        name:name,
        quantity:quantity,
        price:price,
    }
    inventory.push(item);
    console.log(name,quantity,price);
}
function removeItem(name){
    inventory = inventory.filter (item => item.name!== name);
    console.log(name);

}
function updateQuantity(name,quantity){
    let item =inventory.find(item=>item.name!==name);
    if(item){
        item.quantity = quantity;
        console.log(name);
    } else {
        console.log(name);
    }
}

addItem("Apple",20,200);
addItem("Mango",20,100);

removeItem("Mango");

updateQuantity("Apple",25);
viewInventory();