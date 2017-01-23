//给出一段英文连续的英文字符窜，找出重复出现次数最多的字母

function findMaxDuplicateChar(input) {
	if(typeof input!=="string") return;
	if(input.length == 1) {
    	return input;
  	}
	var charList = input.split("").sort(),
		charMap = {}, maxTime = 1, maxChars = [];
	charList.reduce(function(prev, cur, index, arr) {
		charMap[cur] || (charMap[cur]=1);
		(prev == cur) && charMap[cur]++
		(maxTime < charMap[cur]) && (maxTime = charMap[cur]);
		return cur;
	});
	for(var c in charMap) {
		if(charMap[c] == maxTime) {
			maxChars.push(c);
		}
	}
	return maxChars;
}


function fineStr(s,n,fs){
	var f=s.match(/^./)[0];
	var rf=new RegExp(f,"g");
	var nn=s.match(rf).length;
	if(nn==n)fs.push(f);
	if(nn>n){fs=[];fs.push(f);n=nn}
	s=s.replace(rf,"");
	if(s.length<n){
		return ["出现次数最多的字符是："+fs.join(","),"总次数为："+n];
	}
	return fineStr(s,n,fs);
}

function findMaxDuplicateChar2(input) {
	return fineStr("input",0,[]);
}


function findMaxDuplicateChar3(input) {
	if(typeof input!=="string") return;
	if(input.length == 1) {
    	return input;
  	}
	var sortStr = input.split("").sort().join("");
	//反向引用 连续两次及以上字符
	var reg = /(\w)\1+/g; 
	//保存正则运行结果
	var result = [];
	//记录最大次数
	var maxTime= 1; 
	//字符结果集
	var maxChars = [];
	
	while(result){
		result = reg.exec(sortStr);
		if(result){
			var rc = result[0];
			if(maxTime<rc.length){
				maxTime = rc.length;
				maxChars=[rc.charAt(0)];
			}else if(maxTime==rc.length){
				maxChars.push(rc.charAt(0));
			}
		}
	}
	return maxChars.length ? maxChars : sortStr.split("");
}


console.log(findMaxDuplicateChar3("asdddddasdafaaas"));