//函数防抖 适用场景：resize的监听事件  input框输入验证
function debounce(func, delay) {
	var debounceTask = null;
	return function() {
		var context = this,
			args = arguments;
		clearTimeout(debounceTask);
		debounceTask = setTimeout(function() {
			func.apply(context, args);
		}, delay);
	}
}

//函数节流 适用场景：scroll的监听事件 drag的监听事件
function throttle(fn, limit) {
	var inThrottle = false,
	 lastTask;
	return function() {
		var context = this,
			args = arguments;
		if(!inThrottle) {
			fn.apply(context, args);  //第一次调用被执行 不用延迟
			inThrottle = true;
			setTimeout(function() {
				inThrottle = false;
			}, limit);
		}else { //确保最后一次调用被执行
			clearTimeout(lastTask);
			lastTask = setTimeout(function() {
				fn.apply(context, args);
				inThrottle = false;
			}, limit);
		}
	}
}

//函数节流 适用场景：scroll的监听事件 drag的监听事件
function throttle(fn, threshold, scope) {
	var last,endTask
	return function() {
		var context = scope || this,
			args = arguments,
			now = Date.now();
		if(last && last + threshold > now) {
			clearTimeout(endTask);
			endTask = setTimeout(function() {
				fn.apply(context, args);
				last = now;
			}, threshold);
		}else{
			last = now;
			fn.apply(context, args);
		}
	} 
}