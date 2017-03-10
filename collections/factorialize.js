// 阶乘非递归实现
function factorialize(num) {
	if(num < 0) return -1;
    if(num == 0 || num == 1) return 1;
	var result = 1;
	while(num > 1) {
		result *= num--;
	}
	return result;
}
//递归实现
function factorialize(num) {
	if(num < 0) return -1;
    if(num == 0 || num == 1) return 1;
    return num*factorialize(num-1);
}