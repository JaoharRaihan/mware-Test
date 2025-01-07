let inventory=[];

function addItem(name,quantity,price){
    let item ={
    name : name,
    quantity : quantity,
    price : price,
    }
    inventory.push(item);
    console.log(name,quantity,price);
}
function removeItem(name){
    inventory = inventory.filter(item=>item.name!==name);
    console.log(name,"Removed");
}
function updateQuantity(name,quantity){
    let item = inventory.find(item=>item.name!==name);
    if (item){
        item.name=name;
        item.quantity=quantity;
        console.log(name,quantity);
    }else{
        console.log(name,quantity);
    }
}
function viewInventory(){
     inventory.forEach(item=>{
     console.log(`Name: ${item.name}, Quantity : ${item.quantity}, Price : ${item.price}`);
     });    
}
addItem("Apple",10,100);
addItem("Mango",20,200);
removeItem("Mango");
updateQuantity("Aplle",18);
viewInventory();
