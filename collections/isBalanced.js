// 创建一个函数来判断给定的表达式中的大括号是否闭合

//出栈入栈思想
function isBalanced (expression) {
	var count = 0 //通过一个对象来实时跟踪括号次数
	return expression.split('').every(function(sym, index, arr) {
		if (sym === "{") {
			count++;
		}else if(sym === "}") {
			count--;
		}
		if(count < 0) {
			return false;
		}
		if(index == arr.length-1) {
			if(count != 0) {
				return false;
			}
		}
		return true
	})
}

var expression = "{{}}{}{}"
var expressionFalse = "{}{{}";

console.log(isBalanced(expression))// true
//console.log(isBalanced(expressionFalse)); // false
//console.log(isBalanced("")); // true
