//计算二进制中1的个数
function countOneOfBit(num) {
	return num.toString(2).split("").filter(function(value) {
		return +value;
	}).length;
}

function countOneOfBit(num) {
	var count = 0;
	while(num > 0 ===1) {
		if(num & 1) {
			count++;
		}
		num = num >> 1;
	}
	return num;
}

const countOneOfBit = function countOneOfBit(num){
    let count = 0;
    for (count =0; num; ++c){
        num &= (num -1) ; // 清除最低位的1
    }
    return count ;
}

console.log(countOneOfBit(3));