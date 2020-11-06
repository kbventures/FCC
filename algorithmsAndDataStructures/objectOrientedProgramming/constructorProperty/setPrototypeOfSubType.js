let animal = new Animal();
// There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge.
// Instead, here's an alternative approach without those disadvantages:

let animal = Object.create(Animal.prototype);
//  Object.create(obj) creates a new object, and sets obj as the new object's prototype.
//  Recall that the prototype is like the "recipe" for creating an object. By setting the prototype of animal
//  to be Animal's prototype, you are effectively giving the animal instance the same "recipe" as any other instance of
//  Animal.

animal.eat(); // prints "nom nom nom"
animal instanceof Animal; // => true


Bird.prototype = Object.create(Animal.prototype);
// Remember that the prototype is like the "recipe" for creating an object. 
// In a way, the recipe for Bird now includes all the key "ingredients" from Animal.

let duck = new Bird("Donald");
duck.eat(); // prints "nom nom nom"
// duck inherits all of Animal's properties, including the eat method.