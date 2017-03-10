//输入一个数组和一个数字，在数组中查找两个数，使得它们的和正好是输入的那个数字。
//要求时间复杂度是O(N)。如果有多对数字的和等于输入的数字，输出任意一对即可。

function twoSum2(array, target) {
	var midNum = (target % 2 == 0) ? target/2 : null;
	var sunArray = array.map(function(num) {
		return target - num;
	});
	
	// var getArray = subArray.filter(function(sub) {
	// 	return (array.indexOf(array) > -1);
	// });
	// getArray.forEach(function(value) {
	// 	a.push(value)
	// });
}

function twoSum(array, target) {
	var midNum = (target % 2 == 0) ? target/2 : null;
	var map = {};
	array.forEach(function(num) {
		map[num] ? map[num]++ : (map[num]=1);
	});
	for(var i in  map) {
		if(midNum == i) {
			if(map[i]>1) {
				return [i,i];
			}
		}else{
			if(map[target-i])
				return [+i,target-i];
		}
	}
}

console.log(twoSum([2,2,3,6,8],11));