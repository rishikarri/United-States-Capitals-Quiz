var sinon = require('sinon');



const spy = sinon.spy(); 


console.log(spy, 'spy');
spy('Hello', 'World');

// //now we can get information about hte call

console.log(spy.firstCall.args);