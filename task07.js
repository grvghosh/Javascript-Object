function fun(persons){
    var totalScore = 0 ;
    for(var i = 0; i< persons.length ; i++){
        if(persons[i].isForceUser === true){
            totalScore = totalScore +  persons[i].pilotingScore + persons[i].shootingScore ;
        }
    }
    return totalScore ;
}
module.exports = fun;
