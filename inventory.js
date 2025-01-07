const inventory =[]

function addItem (name,quantity,price){
    inventory.push({name,quantity,price})
    console.log(`${name},${quantity},${price}`)
}

function removeItem (name){
    let index =inventory.findIndex(item=>item.name===name)
    if(index !== -1){
        inventory.splice(index,1)
        console.log(`${name} removed`)
    }else{
        console.log(`${name} not found`)
    }
}

function updateQuantity(name,newquantity,newprice){
    let item =inventory.find(item=>item.name===name)
    if(item){
        item.quantity=item.newquantity
        item.price=item.newprice
        console.log(`${name},${newquantity},${newprice}`)
    }else{
        console.log(`${name},${newquantity},${newprice}`)
    }
}

addItem("Apple","20","200")
addItem("Orange","40","300")
addItem("Mango","60","400")
removeItem("Apple")
updateQuantity("Apple","80","1200")