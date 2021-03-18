function myBouncer(arr) {
    var newArr = [];
    for (i =0; i< arr.length; i++) {
        if(arr[i] == true){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(myBouncer([7, "ate", "", false, 9]));
module.exports = myBouncer;