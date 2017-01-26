//找出出现奇数次的数
/**
一个无序数组里由若干个正整数，范围从1到100，其中99个整数都出现了偶数次，
只有一个整数出现了奇数次，如何找出这个出现了奇数次的整数？例如，[1,2,2,3,3,3,3,4,4]其中只有1出现了奇数次，1次


 思路：联想一下位运算，异或^运算，相同值异或得0，不同值异或得1。
 好了，那么我们可以遍历数组，将数组中的元素依次做异或运算，最后得出的值，一定是出现奇数次的值。因为，出现偶数次的值在异或运算过程中都抵消了。
**/
function findOddTimesNum(array) {
	if(!Array.isArray(array)) return;
	return array.reduce(function(pre, cur) {
		return pre ^ cur;
	})
}

console.log(findOddTimesNum([1,2,2,2,1]));