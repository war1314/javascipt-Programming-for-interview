// 给定两个数组，要求求出两个数组的交集，注意，交集中的元素应该是唯一的。
function intersection(firstArray, secondArray) {
	 var firstMap = firstArray.reduce(function (pre, cur) {
	 	if (!pre[cur]) {
	 		pre[cur] = 1
	 	}
	 	return pre;
	 }, {})
	 var intersection = [];
	 secondArray.forEach(function(item) {
		if (firstMap[item] == 1) {
			intersection.push(item)
			firstMap[item]++;
		}
	 })
	 return intersection;
}

var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

console.log(intersection(firstArray, secondArray)); // [2, 1]