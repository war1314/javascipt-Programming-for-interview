//找出数组的最大差值

function getMaxProfit(arr) {
	var max = Math.max.apply(Math, arr);
	var min = Math.min.apply(Math, arr);
	return max-min;
}

function getMaxProfit2(list) {
	if(!list instanceof Array) return;
	tailList = Array.prototype.slice.call(list, 1);
	console.log(tailList);
	var profitMap = tailList.reduce(function(prev, cur, index) {
		if(prev.min > cur) {
			prev.min = cur;
		}
		if(prev.max < cur) {
			prev.max = cur;
		}
		return prev;
	}, {min: list[0], max: list[0]});
	return profitMap.max - profitMap.min;
}
console.log(getMaxProfit2([1,2,3,33,6]));