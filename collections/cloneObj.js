//对象复制
function deepClone(obj) {
	if(!isObject(obj)) return obj;

	var target = obj instanceof Array ? [] : {};
	for(var i in obj) {
		//value = obj[i];
		target[i] = deepClone(obj[i]);
	}
	return target;
}
//数组或者对象
function isObject(obj) {
    return obj === Object(obj);
}

var test = {a: 123, b: [1,2,3,{q:"11"}], c: {t:1}};
console.log(deepClone(test));
console.log(deepClone(test).c == test.c);
