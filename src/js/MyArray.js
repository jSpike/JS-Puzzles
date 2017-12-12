/**
 *	myArray object helps to describe various usage
 *	of array and operation associated with arrays
 *
 */
var myArray = {
	// initializing the array using constructor invocation
	arr: new Array('a', 'b', 'c', 'd'),
	// return the array elemnets
	getArr: function () {
		return this.arr;
	},
	// Insert element at end of the array
	usePush: function (item) {
		this.arr.push(item);
	},
	// Insert element at starting of the array
	useUnShift: function (item) {
		this.arr.unshift(item);
	},
	// Remove element at end of the array
	usePop: function () {
		this.arr.pop();
	},
	// Remove element at start of the array
	useShift: function () {
		this.arr.shift();
	},
	// Splice operation for add/remove items
	useSplice: function (index, count, items) {
		this.arr.splice(index, count, items);
	}
};

// Usage explanations
myArray.getArr();
myArray.usePush('END');
myArray.useUnShift('START');
myArray.usePop();
myArray.useShift();
myArray.useSplice(1, 1);
