// Your code goes here


// prints to the console after the DOM has loaded. 
document.addEventListener("DOMContentLoaded", () => {
    const p = document.getElementById('text')
    p.textContent = "This is really cool!"
})


// // To demonstrate, this is logged first, even though comes second in the load order. 
// console.log("Something")