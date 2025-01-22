
function test (cb) {
    setTimeout( () => {
        cb("Task is edned")
    } , 5000)
    console.log("hello");
}

test((params)=>{
    console.log(params);
})