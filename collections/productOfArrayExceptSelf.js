//计算数组中元素乘积
//给定一个数组，数组中n个正整数（n>1），实现一个方法，输入这个数组，输出一个数组，数组中每个元素是除了当前元素其他元素的乘积。
/**
不要用 除法 运算
复杂度为O(n)
例如，输入[1,2,3,4]，输出[24,12,8,6]

我们可以进行两遍循环（注意，不是两层），第一遍循环，求得当前元素左边的元素的乘积，
第二遍循环，求得当前元素右边的乘积，然后将左右两边的乘积相乘，即可得到答案。
**/

function productOfArrayExceptSelf(array) {
	if (!Array.isArray(array)) return;
	var arrLen = array.length;
	var res = [1];
	/**
	获得数组左边的元素的乘积
	第一遍循环res[i]=左边元素的乘积
	**/
	for(var i = 1; i < arrLen; i++) {  
		res[i] = res[i-1] * array[i-1];
	}
	var rightValue = 1;
	/**
	第二遍循环rightValue=右边元素的乘积
	res[j] = 左边乘积 *右边乘积
	**/
	for(var j = arrLen-1; j >= 0; j--) {
		//rightValue = rightValue * (array[j+1] || 1);
   		//res[j] = res[j] * rightValue;
   		res[j] = rightValue * res[j];
   		rightValue = rightValue * array[j];
	}
	return res;
}  

console.log(productOfArrayExceptSelf([2,3,6,2]));

