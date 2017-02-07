function shuffle(array) {
	var len = array.length,seed;
	for(var i = len-1; i>0; i--) {
		seed = Math.floor(Math.random() * (i+1));
		//swap
		array[i] = [array[seed], array[seed]=array[i]][0];
	}
	return array;
}

console.log(shuffle([1,2,3,4]));

