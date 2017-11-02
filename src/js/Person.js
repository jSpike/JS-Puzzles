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

//using bind method
var bindRef = personObj.getPersonLog.bind({
		'name': 'Perry',
		'dept': 'Income Tax'
	}, 'Hi', 'Clerk');

bindRef();

 ##  ##  ##  ##  ##  ##  ## Array Copy Method ##  ##  ##  ##  ##  ##  ##
var numArr = [1, 2, 3, 4];
var copyArr = numArr;
copyArr.push(5);
console.log("numArr = " + numArr, "copyArr = " + copyArr); // both arrays are same because it shares the same referance

// Method 1 - copy begin to end
/*	The slice() method returns a shallow copy of a portion of an array into a new array.
 * object selected from begin to end (end not included).
 * The original array will not be modified.
 */
copyArr = numArr.slice(0, numArr.length);
copyArr.push(6);
console.log("numArr = " + numArr, "copyArr = " + copyArr);

// Method 2 - copy begin to default end length 
copyArr = numArr.slice(0);
copyArr.push(7);
console.log("numArr = " + numArr, "copyArr = " + copyArr);

// Method 3 - copy the entire array
copyArr = numArr.slice();
copyArr.push(8);
console.log("numArr = " + numArr, "copyArr = " + copyArr);
