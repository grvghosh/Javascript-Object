function changeObjValue(obj, countryName, capital, population) {

  var object = { [countryName] : { capital , population } }
  
  var data = obj.data ;
  var continents = data.continents;
  var europe = continents.europe;
  var countries = europe.countries;
  
  var created = Object.assign(countries, object);

  europe.countries = created;
  continents.europe = europe;
  data.continents = continents;

  delete created.switzerland;

  return object[countryName] ;

 }

 module.exports = changeObjValue;
