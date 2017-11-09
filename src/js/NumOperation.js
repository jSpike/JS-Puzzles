/**
*	Method helps to demonstrate the usage of
*	method chaining.
*
*/
var NumOperation = function (valArr) {
	this.valArr = valArr;
	
	// sort the array
	this.sort = function () {
		this.valArr.sort(function (itemA, itemB) {
			return itemA - itemB;
		});
		return this;
	};
	
	// To find the sum of whole the numbers
	this.sum = function () {
		var me = this;
		me.sumVal = 0;
		me.valArr.forEach(function (d) {
			me.sumVal = me.sumVal + d;
		});
		return me;
	};
	
	// To find the mean value of the input array
	this.mean = function () {
		var me = this;
		me.sum();
		me.meanVal = (me.sumVal / me.valArr.length);
		return this;
	};

};

//Initialize object
var numObj = new NumOperation([2,4,1,67,23]);
numObj.sum().sort().mean();
console.log(numObj.sumVal,' sorted value:: '+numObj.valArr, ' Mean value:: '+ numObj.meanVal );