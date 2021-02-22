function func(recipe){
    var serving = recipe.servings ;
    var array1 = [] ;
    for(var i = 0; i < serving.length ; ++i){
        for(var j = 1+i ; j < serving.length ; ++j){
            if(serving[i] == serving[j] && !array1.includes(serving[j]) ){
                array1.push(serving[j]);
            }
        }
    }
    var result = array1;
    for(var i = 0; i< result.length ; i++){
        result[i] = parseInt(result[i]);
    }
    console.log(result) ;
    return result  ; 
}
module.exports = func;
