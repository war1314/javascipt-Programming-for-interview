//二分搜索 
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

//递归方式
function binarySearch(array, des) {
	return deepBinarySearch(array, des, 0, array.length-1);
}

//非递归方式
function binarySearch(array, des) {
	var left = 0,
		right = array.length-1,mid,midNum;
	while(left <= right) {
		mid = (left+right) >> 0;
		midNum = array[mid] ;
		if(des > midNum) {
			left = mid+1;
		}else if(des < midNum) {
			right = mid-1;
		}else {
			return mid;
		}
	}
	return -1
}
console.info(binarySearch2([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],20));