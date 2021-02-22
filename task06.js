function fun(array1){
    var prop1 = [];
    var prop2 = [];
    var len;
    for(var i = 0; i< array1.length; i++){
        var temp = array1[i] ;
        if(temp.id !== null && temp.id !== "undefined" && !isNaN(temp.id) && temp.id !== 0 && Object.keys(temp).length !== 0 ){
            prop1.push(temp);
        }else {
            prop2.push(temp);  
        }  
    }
    len = array1.length - prop1.length;
    var obj = {prop1:prop1 , prop2:len}
    return obj;
}

module.exports = fun;
