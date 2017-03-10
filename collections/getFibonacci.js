// 生成菲波那切数列
function getFibonacci(n) {
	var array = [];
	for(var i=0; i<n; i++) {
		if(i>1){
			var prevpre = array[i-2];
			var prev = array[i-1];
			array[i] = prevpre+prev;
		}else{
			array[i] = i;
		}
	}
	return array;
}

console.log(getFibonacci(6));