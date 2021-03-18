var myPetsArray  = ["Dog", "Cat"];
function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    return myNewPets;
} 
myArrayFunction(myPetsArray);
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;


