const makeNoiseFunction = function () {
    alert(this.noise);
  }
  
  const cat = {
    makeNoise: makeNoiseFunction,
    noise: "Meow!"
  };
  
  const dog = {
    makeNoise: makeNoiseFunction,
    noise: "Woof!"
  };
  
  cat.makeNoise();
  dog.makeNoise();