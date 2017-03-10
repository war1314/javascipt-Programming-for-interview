function createObject (func) {
	var obj = new Object(),
		Constructor = [].shift.call(arguments)
	obj.__proto__ = Constructor.prototype;
	Constructor.apply(obj, arguments);
	return obj; 
}

function Ben(name){
  this.name = name;
};

Ben.prototype.getName = function(){
  return this.name;
}

var ben = createObject(Ben,'renhongyu')
console.log(ben.getName())
