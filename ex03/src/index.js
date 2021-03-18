var myPetsArray  = ["Dog", "Cat"];
function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    var firstPet = [];

    for (i=0; i<arr.length; i++) {
        myNewPets = myPets[i];
    }
    myNewPets.unshift("Bird", "Fish");
    return firstPet;
} 
myArrayFunction(myPetsArray);
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;