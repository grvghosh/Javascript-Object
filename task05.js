function fun(library){
    var library = library ;
    var prop1 = [] ;
    var prop2 = [] ;
    for(var i in library){
        if(library[i].readingStatus === true){
            var t1 = library[i].title ;
            var a1 = library[i].author ;
            var temp = {title: t1 , author: a1} ;
            prop1.push(temp);
        }else if(library[i].readingStatus === false){
            var t1 = library[i].title ;
            var a1 = library[i].author ;
            var temp = {title: t1 , author: a1} ;
            prop2.push(temp);
        }
    }
    var obj = {prop1:prop1 , prop2:prop2};
    return obj; 
}
module.exports = fun;
