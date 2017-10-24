/**
 *	Capitalize method helps to implement the logic for
 *	alternate capitalization for the text content.
 *	@method Capitalize
 */
var Capitalize = function () {
	var str = 'I will see you in 2wo years',
	arr = str.split(' '),
	resultStr = '',
	result = [];

	for (var j = 0; j < arr.length; j++) {
		var i = 0,
		item = [];
		for (; i < arr[j].length; i++) {
			if (i % 2 === 0) {
				item.push(arr[j][i].toUpperCase());
			} else {
				item.push(arr[j][i].toLowerCase());
			}
		}
		result.push(item);
	}

	for (var k = 0; k < result.length; k++) {
		var resultS = result[k].toString();
		resultStr = resultStr.concat(resultS.replace(/,/g, ''));
		resultStr = resultStr.concat(" ");
	}
	console.log(resultStr);
};
Capitalize();
