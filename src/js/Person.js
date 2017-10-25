/**
 *	Method or constructor function to initialize the
 *	parameter with the arguments.
 *	Primary intention of the class is to demonstrat the
 *	usage of call,apply and bind method. Function invocation
 *	using this method and the usability with different approch
 *	@constructor Person
 *	@param {String} name
 *	@param {String} dept
 */
var Person = function (name, dept) {
	this.name = name,
	this.dept = dept;
};
/**
 *	method that helps to log the detils
 *	@method getPersonLog
 *	@param {String} intoStr
 *	@param {String} designation
 */
Person.prototype.getPersonLog = function (intoStr, designation) {
	console.log(intoStr + " " + this.name + " : " + this.dept + " working as a " + designation);
	return (intoStr + " " + this.name + " : " + this.dept + " working as a " + designation);
};

//	To initialize person object
var personObj = new Person('Kelly', 'Low and order');
personObj.getPersonLog('Welcome', 'Police');

// using call method
personObj.getPersonLog.call({
	'name': 'John',
	'dept': 'Education'
}, 'Hello', 'Teacher');

// using apply method
personObj.getPersonLog.apply({
	'name': 'Terry',
	'dept': 'Information Technology'
}, ['Hi', 'Programmer']);
