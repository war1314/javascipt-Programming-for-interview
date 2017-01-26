//判断2的乘方

//从二进制来看，就是1后面有n个0
function is2power(num) {
	var bitStr = num.toString(2);
	var reg = /^10*$/;
	return reg.test(bitStr);
}
/**
1       2的0次方
10      2的1次方
100     2的2次方
1000    2的3次方
10000   2的4次方
...

0        2的0次方减1
1        2的1次方减1
11       2的2次方减1
111      2的3次方减1
1111     2的4次方减1
...
**/


//使用与运算
function is2power2(num) {
	var bitStr = num,subBitStr = (num-1);
	return !(bitStr & subBitStr);
}

//使用异或运算
const is2power = function is2bit(num) {
	//运用位运算的几个规律,非常巧妙
    return (num ^ (num - 1)) === ((num << 1) - 1);
}
