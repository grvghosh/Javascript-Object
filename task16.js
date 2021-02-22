function numWays(n ,x) {
    if(n == 0){
		return 1;
	}
	var arr = new Array(n+1);
	arr[0] = 1 ;
	for(let i = 1; i<= n ; i++){
		var total = 0 ;
		for(let j of x){
			if(i - j >=  0){
			    total += arr[i - j];
		    }
		}
		arr[i] = total ;
	}
	return arr[n];
}
function func(object) {
    var n = object.steps ;
    var x = object.ability ;
    return numWays(n ,x) ;
}
module.exports = func ;
