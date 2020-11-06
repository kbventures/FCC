function Bird(name) {
    this.name = name;
  }
  
  let duck = new Bird("Donald");

  // duck inherits its prototype from the Bird constructor function. 
  // You can show this relationship with the isPrototypeOf method:
  
  Bird.prototype.isPrototypeOf(duck);
  // returns true