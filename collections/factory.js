//简单工厂模式
function XMLHttpFactory () {

}
XMLHttpFactory.createXmlhttp = function () {
	var XMLHttp = null;
　　if (window.XMLHttpRequest){
　　　XMLHttp = new XMLHttpRequest()
　　}else if (window.ActiveXObject){
　　　XMLHttp = new ActiveXObject("Microsoft.XMLHTTP")
　　}
	return XMLHttp;
}

//复杂工厂模式：流程==》 先设计一个抽象类，这个类不能被实例化，只能用来派生子类，最后通过对子类的扩展实现工厂方法
function XMLHttpFactory () {

}
XMLHttpFactory.prototype = {
　　//如果真的要调用这个方法会抛出一个错误，它不能被实例化，只能用来派生子类
　　createFactory:function(){
  　　throw new Error('This is an abstract class');
　　}
}
//子类
function XHRHandler () {

}
XHRHandler.prototype = new XMLHttpFactory();
XHRHandler.prototype.constructor = XHRHandler;
XHRHandler.prototype.createXMLHttp = function {
	var XMLHttp = null;
　　if (window.XMLHttpRequest){
　　　XMLHttp = new XMLHttpRequest()
　　}else if (window.ActiveXObject){
　　　XMLHttp = new ActiveXObject("Microsoft.XMLHTTP")
　　}
	return XMLHttp;
}