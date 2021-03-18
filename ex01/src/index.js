// Create an array here
var myArr = [2, 4, 0, 8, 10];
// End of creating an array

function myArrayFunction(arr) {
    var myItems = [...arr];
    // Only change code below this line
    myItems[2] = 6;
    // Only change code below this line
    return myItems;

}

console.log(myArrayFunction(myArr)); // Change this line
module.exports = myArrayFunction;