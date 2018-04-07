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

// spies can be conveinent to verify that a callback was called 

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

// console.log(sinon.assert.calledOnce(callBack));

setNameSpy.restore(); 


const stub = sinon.stub(); 

stub('hello'); 

console.log(stub.firstCall.args); 

// Practice using stubs 

console.log('#####################################################');


// this posts something to a database and then runs a callbcak - this is the function we are trying to test
function saveUser(user, callback) {
  $.post('/users', {
    first: user.firstname, 
    last: user.lastname
  }, callback)
}


describe('saveUser', function() {
  it ('should call callback after saving', function() {
    // emulate the post 
    const post = sinon.stub($, 'post'); 
    post.yields(); 
   

    const callback = sinon.spy(); 

    // this calls  - when post is called it doesn't actually go to the datbase
    saveUser({
      firstName: 'han',
      lastName: 'solo'
    }, callback)
  })
})