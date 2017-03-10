// 找出整型数组中乘积最大的三个数

// 给定一个包含整数的无序数组，要求找出乘积最大的三个数。

// greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)
function computeProductWith3 (unsorted_array) {
	array = unsorted_array.sort(function (a , b) {
		return a - b; 
	})
	var len = array.length;
	var result_1 = array[0] * array[1] * array[len-1];
	var result_2 = array.pop() * array.pop() * array.pop();
	return result_2 > result_1 ? result_2 : result_1;
}	

var unsorted_array = [-10, 7, 29, 30, 5, -10, -70];

console.log(computeProductWith3(unsorted_array))