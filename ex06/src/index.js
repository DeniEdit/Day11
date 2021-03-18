function multiplyArrayFunction(myArray){
    var newArray = [...myArray];
    var product = [];

    for (i=0; i<myArray.length; i++) {
        newArray = myArray[i];
        var sum = 0;

    for (j=0; j < newArray.length; j++) {
        sum += newArray[j];
    }
    var product = sum * newArray.length;
    }
    return product;
}
console.log(multiplyArrayFunction([[2],[5,6,7],[8,9]]));
console.log(multiplyArrayFunction([[2.5,2],[0.5,0.2],[8]]));
console.log(multiplyArrayFunction([[1,2],[3,4,5,6],[7,8,9]]));
module.exports = multiplyArrayFunction;