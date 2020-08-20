 (async () => {
    let urlCountry = 'http://localhost/mapTask/countries.json';
    let urlCity = 'http://localhost/mapTask/cities.json';
    let countryResponse  = await fetch(urlCountry);
    let citiesResponse = await fetch(urlCity);
          
    let country = await countryResponse.json(); 
    let cities = await citiesResponse.json();
  
    class ObjectCountry {
      constructor(idCountry){
          for(let key in country){
              if(idCountry == key){
                  this._name = country[key].name;
                  this._native = country[key].native;
                  this._phone = country[key].phone;
                  this._capital = country[key].capital;
                  this._currency = country[key].currency;
                  this._langs = country[key].languages;
                  this._cities = this.getCities(idCountry);
              }
          }
      }
      getName(){return this._name}
      getNative(){return this._native} 
      getPhone(){return this._phone} 
      getCapital(){return this._capital} 
      getCurrency(){return this._currency}
      getLangs(){return this._langs}
      getCities(idCountry){
          let objectsСityArray = cities.filter((el) => (idCountry === el.country));
          let citiesArray = objectsСityArray.map((el) => el.name);
          return citiesArray;
      }}
  
      class ObjectCities{
          constructor(array){
              let arrayObjCities = array.map(function(el, index, array){
                  for(let key in cities){
                      if(el == cities[key].name){
                          return {
                              name : cities[key].name,
                              getName : function(){return this.name},
                              geoPoisition : {
                                  lat : cities[key].lat,
                                  lng : cities[key].lng, 
                              },
                              getGeoPosition : function(){return this.geoPoisition},
                              getCountry: new ObjectCountry(cities[key].country),
                          }
                      } 
                  }
              })
          return arrayObjCities;
          }
      }
  
  let arrayCities = ["Sant Julià de Lòria","Pas de la Casa","Ordino", "Ras al-Khaimah"];
  let citiesObj = new ObjectCities(arrayCities);
  console.log(citiesObj); 
  console.log(citiesObj[0].getGeoPosition()) // вывод массив городов-объектов 
  
  let objAE = new ObjectCountry('AE');
  let objAF = new ObjectCountry('AF');
  let check = objAF.getCities('AD');
  
  console.log(objAE);// вывод объекта страны  
  
  })()
  
