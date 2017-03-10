//给定两个字符串，判断是否颠倒字母而成的字符串，譬如Mary与Army就是同字母而顺序颠倒
function isAnagram (firstWord, secondWord) {
	if(firstWord.length !== secondWord.length) {
		return false;
	}
	return toSortStr(firstWord) === toSortStr(secondWord)

	function toSortStr (str) {
		return str.toLowerCase().split('').sort().join('');
	}
}

var firstWord = "Mary";
var secondWord = "Army";
console.log(isAnagram(firstWord, secondWord));
