function Animal(numberOfLegs, numberOfEyes)
{
	this.legs = numberOfLegs;
	this.eyes = numberOfEyes;
}

// (1) Create a new object constructor for a Dog that
//     meets the following criteria
//     - Barks in the console
//     - Breed can be set upon creation
//     - Inherits from the Animal object
function Dog(breed){
	this.breed= breed;
	this.bark = function (){
		console.log("bark")};
}

Dog.prototype = new Animal(2,2)
// (2) Create a new dog from that object constructor
let dogShep = new Dog("sheperd")
// (3) Console log the dog's number of legs, number of
//     eyes, and breed
console.log(dogShep.legs, dogShep.eyes, dogShep.breed)

// (4) Make the dog bark
dogShep.bark()