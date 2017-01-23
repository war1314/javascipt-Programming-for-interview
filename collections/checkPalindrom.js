//判断回文字符串

/**es5**/
function checkPalindrom(str) {
	return str.split("").reverse().join("") === str;
}

/**es6**/
function checkPalindrom(str="") {
	//return [...str].reverse().join("") === str;
	return rs(str) === str
}

let rs = (str) =>{
    return Array.prototype.reduceRight.apply(str,[function(pre,current){
        return pre + current;
    },'']);
}

console.info(checkPalindrom("weeeew"));