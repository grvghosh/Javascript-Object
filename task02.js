function checknum(object){
    var types = object.innerData ;
    var numberData = types.numberData;
    var fibnum = numberData.fibonnaci;
    var output=[] ;
    for(var i in fibnum){
        if(fibnum[i]%2==0){
            output.push(fibnum[i]);
        }
    }
    return output;
}

module.exports = checknum;
