function func(object){
    var title=[];
    for(var i = 0; i< object.length ; i++){
        title.push( object[i].title) ;
    }
    return title ; 
}
module.exports = func;
