/*二进制转换
通过某个递归函数将输入的数字转化为二进制字符串*/
var binaryArray = [];
function decimalToBinary(digit) {
	if(digit <= 0) {
		return binaryArray.join('');
	}
	if(digit % 2) {
		binaryArray.unshift(1)
	}else {
		binaryArray.unshift(0)
	}
	return decimalToBinary(digit>>1);
}


function decimalToBinary2(digit) {
	if(digit <= 0) {
		return '';
	}
	if(digit%2) {
		return decimalToBinary(digit>>1)+1
	}else {
		return decimalToBinary(digit>>1)+0
	}
}
console.log(decimalToBinary2(1000));
