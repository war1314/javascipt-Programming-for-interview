//寻找连续数组中的缺失数
// 给定某无序数组，其包含了 n 个连续数字中的 n - 1 个，要求以O(n)的复杂度找出缺失的数字。
function findMissingNumber(array_of_integers) {
	var start = Math.min.apply(Math, array_of_integers), //先求得上下边界
		end = Math.max.apply(Math, array_of_integers);
	var ideal_sum = (start + end)*(end - start + 1)/2;
	var reality_sum = array_of_integers.reduce(function(pre, cur) {
		return pre + cur;
	})
	return ideal_sum - reality_sum;
}

var array_of_integers = [2, 5, 1, 4, 9, 6, 3, 7];
console.log(findMissingNumber(array_of_integers));
