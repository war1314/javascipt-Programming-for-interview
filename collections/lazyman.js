function _LazyMan(name) {
	var self = this;
	this.name = name;
	this.tasks = [];
	var saymyname = function(name) {
		return function() {
			console.log("my name is "+name);
			self.next();
		}
	}(self.name);
	this.tasks.push(saymyname);
	//event loop 确保调用代码执行完毕后执行
	setTimeout(function() {
		self.next();
	}, 4);
}

_LazyMan.prototype.next = function() {
	var fn =this.tasks.shift();
	fn && fn();
}

_LazyMan.prototype.setName = function(name) {
	this.name = name;
}

_LazyMan.prototype.eat = function(something) {
	var self = this;
	function fn() {
		console.log("i'm eating"+something);
		self.next()
	}
	this.tasks.push(fn);
	return this;
}

_LazyMan.prototype.sleep = function(time) {
	var self = this;
	function fn() {
		console.log("i would sleep "+time+"ms");
		setTimeout(function(){
			self.next()
		}, time);
	}
	this.tasks.push(fn);
	return this;
}

_LazyMan.prototype.sleepFirst = function(time) {
    var self = this;
    var fn = function() {
    	console.log("Wake up after " + time + "s!");
        setTimeout(function() {
            self.next();
        }, time);
    }
    this.tasks.unshift(fn);
    return this;
}

function LazyMan(name) {
	return new _LazyMan(name);
}

LazyMan("ben").sleepFirst(100).eat("wang").sleep(5000).eat("tomato").setName("agalia");

