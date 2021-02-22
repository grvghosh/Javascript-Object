function checknum(object){
  
  
  var types = object.types ;
  var numberData = types.numberData;
  var primenum = numberData.primeNumbers;
  var output ;
  
  if(primenum == null){
    output = -1;
    }else{
      output = primenum;
      
      }
  
  return output;
  
}

module.exports = checknum;
