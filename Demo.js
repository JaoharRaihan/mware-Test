const inventory=[]

function addItem(name,quantity,price){
    inventory.push({name,quantity,price})
    console.log(`Name: ${name},Quantity: ${quantity},Price :${price}`)
}

function removeItem(name){
    let index =inventory.findIndex(item=>item.name===name)
    if (index!== -1){
        inventory.splice(index,1)
        console.log(`${name} Removed`)
    } else {
        console.log(`${name} Not Found`)
    }
}
function updateQuantity(name,newquantity,newPrice){
    let item =inventory.find(item=>item.name===name)
    if(item){
        item.quantity = item.newquantity
        item.newprice = item.newprice
        console.log(`Name: ${name} Quantity ${newquantity} and Price ${newPrice} Updated`)
    } else{
        console.log(`${name},${newquantity},${newPrice}`)
    }
    
}


addItem("Apple","20","90")
addItem("Orange","30","50")
addItem("Mango","10","300")
removeItem("Orange")
updateQuantity("Apple","30","120")