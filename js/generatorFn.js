function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const generator = generatorFunction();
  console.log(generator)
  
  console.log(generator.next()); // { value: 1, done: false }
  console.log(generator.next()); // { value: 2, done: false }
  console.log(generator.next()); // { value: 3, done: false }
  console.log(generator.next()); // { value: undefined, done: true }
  