
function runWithDebugger(callbackFunction, optionalArray){
	debugger;

	if (arguments.length > 1) {
		var args = callbackFunction.apply(this, optionalArray);
	} else {
		callbackFunction();
	}
};

// TESTS:

//1. no arguments
function sayHello(){
	console.log('Hello World!');
}
runWithDebugger(sayHello);

//2. one argument passed in
function sayHelloTo(name) {
  console.log('Hello ' + name + '!');
}
runWithDebugger(sayHelloTo, ['Ben']);

//3. multiple arguments passed in
function sayHelloToFullName(firstName, lastName) {
  console.log('Hello ' + firstName + ' ' + lastName + '!');
}
