function myMutation(arr){
    if(arr == "")
    return true;
    else{
        return false;
    }
}
myMutation(["hello", "hey"]);
myMutation(["hello", "Hello"]);
myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
myMutation(["Marry", "Army"]);
myMutation(["Mary", "Aarmy"]);
myMutation(["Alien", "line"]);
myMutation(["floor", "for"]);
myMutation(["hello", "neo"]);
myMutation(["voodoo", "no"]);
myMutation(["ate", "date"]);
myMutation(["Tiger", "Zebra"]);
myMutation(["Noel", "Ole"]);
console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Marry", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));
module.exports = myMutation;