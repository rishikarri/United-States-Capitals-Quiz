const sinon = require('sinon');

// const spy = sinon.spy(); 


// console.log(spy, 'spy');
// spy('Hello', 'World');

// // //now we can get information about hte call

// console.log(spy.firstCall.args);

class Animal {
  constructor(name) {
    this.name = name; 
  }

  setName(newName){
    this.name = newName;
  }
}

// create a spy for the setName function; 

// const user = {
//   setName: () => {
//     console.log('whoa');
//   }
// }

// user.setName(); 



const cat = new Animal('Ralph');
console.log(cat.name);

// create a spy for the setName function

const setNameSpy = sinon.spy(cat, 'setName');

// now anytime we call that unction, spy logs information about it

// aka, spy logs information about a function's behavior

// user.setName('Ralph Gabor');
cat.setName('Gabor');
cat.setName('Rishi');
cat.setName('Rishi');

console.log(cat.name)

console.log(setNameSpy.callCount, 'call count');

setNameSpy.restore(); 
