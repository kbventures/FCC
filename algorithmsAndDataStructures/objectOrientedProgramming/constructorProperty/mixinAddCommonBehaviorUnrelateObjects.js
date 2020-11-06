let flyMixin = function(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    }
  };
  // The flyMixin takes any object and gives it the fly method.
  
  let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let plane = {
    model: "777",
    numPassengers: 524
  };
  
  flyMixin(bird);
  flyMixin(plane);

  // Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. 
  // Now bird and plane can both fly:
  
  bird.fly(); // prints "Flying, wooosh!"
  plane.fly(); // prints "Flying, wooosh!"