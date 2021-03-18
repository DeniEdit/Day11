var myPetsArray  = ["Dog", "Cat"];
function myArrayFunction(myPets) {
    var myNewPets = [...myPets];
    for (i = 0; i < myPets; i++)
    {
        myNewPets = myPets[i];
    }
    return myPetsArray;
}
myArrayFunction(myPetsArray);
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;