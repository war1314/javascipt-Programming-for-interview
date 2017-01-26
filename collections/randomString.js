//随机生成指定长度的字符串
function randomString(num) {
	var randomString = '';
	for( ; randomString.length < num ; randomString += Math.random().toString(36).substr(2));    //toString(36):10数字 + 26字母。得到所有范围
	return randomString.substring(0,num);
}

console.log(randomString(19));