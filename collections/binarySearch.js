function deepBinarySearch(array, des, left, right) {
	var halfLen = (right + left)/2 >> 0;
	var compare = array[halfLen];
	if(right < left) {
		console.log("没有找到所需数据");
		return; 
	}
	if(array[halfLen] == des){
		return halfLen;
	}else if(des < array[halfLen]) {
		return deepBinarySearch(array, des, left, halfLen-1);
	}else {
		return deepBinarySearch(array, des, halfLen+1, right);
	}
	
}

function binarySearch(array, des) {
	return deepBinarySearch(array, des, 0, array.length-1);
}
console.info(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],1));