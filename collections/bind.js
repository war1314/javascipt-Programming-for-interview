Function.prototype.bind = null
//函数嗅探
Function.prototype.bind = Function.prototype.bind || function (context) {
	var handler = this;
	if(typeof handler != 'function') {
		throw new Error('not a Function!')
	}
	var bindParameters = [].slice.call(arguments, 1),
		fNOP = function () {};
	fNOP.prototype = this.prototype;
	fBound = function () {   
		var bindContext = this instanceof fNOP ? this : context||this;   //考虑bind后，作为构造函数执行new操作
		bindParameters.push.apply(bindParameters,arguments);
		return handler.apply(bindContext, bindParameters);
	}
	fBound.prototype = new fNOP();   //使返回函数继承所有原本函数的原型
	return fBound;
}
  
function test(a, b,d) {
	console.log(this.c)
	console.log(d,'qwdqdqwd')
}

var obj = {
	c: 33
}
//test.bind(obj, 1, 2)(3)
