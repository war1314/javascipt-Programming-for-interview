//数组去重

//es6 set
function unique(array) {
	return [...new Set(array)];
}

//filter，reduce实现类似
function unique(array) {
	array.sort();
	return array.filter(function(num, i, arr) {
		return num !== arr[i+1];
	});
}

//map实现 判断类型 并可统计出现次数
function unique(array) {
	var map = {};
	var temp =[];
	for(var i = 0; i<array.length; i++) {
		var cur = array[i];
		var type = Object.prototype.toString.call(cur).match(/\s(\w+)/)[1].toLowerCase();
		var mapKey = type+"-"+cur;
		if(map[mapKey]) {
			map[mapKey]++;
			continue;
		}else {
			temp.push(cur);
			map[mapKey] = 1;
		}
	}
	console.log(map);
	return temp;
};

//splice实现
function unique(array) {
	array.sort();
	for(var i=0; i < array.length; i++) {
		if(array[i] == array[i+1]) {
			array.splice(i, 1);
			i--;
		}
	}
	return array;
}


console.log(unique4([1,3,12,5,2,25,2,3,2,2]));