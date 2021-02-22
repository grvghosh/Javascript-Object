function func(object){
    var third = object[2] ;
  var title = third.title ;
  var q = title[1] ;
  var r = q[0];
  
  return r.name;

}
module.exports = func;
