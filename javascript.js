

(async () => {
    const urlCountry = 'http://localhost/mapTask/countries.json';
    const urlCity = 'http://localhost/mapTask/cities.json';
    const countryResponse = await fetch(urlCountry);
    const citiesResponse = await fetch(urlCity);
          
    const countries = await countryResponse.json(); 
    const cities = await citiesResponse.json();
  
    function ObjectCities(array){
      let arrayObjCities = [];
      for (let i = 0; i < array.length; i++){
         for(let key in cities){
             if(array[i] == cities[key].name){
                  let obj = {
                      name : cities[key].name,
                      getName : () => _name,
                       geoPoisition : {
                          lat : cities[key].lat,
                          lng : cities[key].lng, 
                      },
                      getGeoPosition : () => _geoPoisition,
                      getCountry: new ObjectCountry(cities[key].countries),
                  }
                 arrayObjCities.push(obj);
             }
         }
      }
      return arrayObjCities;
  }
  
  let arrayCities = ["Sant Julià de Lòria","Pas de la Casa","Ordino", "Ras al-Khaimah"];
  let citiesObj = new ObjectCities(arrayCities);
  console.log(citiesObj); // вывод массив городов-объектов 
  
  function ObjectCountry(idCountry){
      for(let key in countries){
          if(idCountry == key){
              this._name = countries[key].name;
              this.getName = () => this._name;
              this._native = countries[key].native;
              this.getNative = () => this._native;
              this._phone = countries[key].phone;
              this.getPhone = () => this._phone;
              this._capital = countries[key].capital;
              this.getCapital = () => this._capital
              this._currency = countries[key].currency;
              this.getCurrency = () => this._currency;
              this._langs = countries[key].languages;
              this.getLangs = () => this._langs;
              this.getCities = function(){
                  let arr = [];
                  for(let key in cities){
                      if (idCountry == cities[key].countries){
                          arr.push(cities[key].name)
                      } 
                  }
                  return arr;
              };
              this._cities = this.getCities();
          }
      }
  }
      
  const objAE = new ObjectCountry('AE');
  const objAF = new ObjectCountry('AF');
  objAF.getCities();
  console.log(objAE);// вывод объекта страны 
  
  })()
  
          
  
  
  
  
  