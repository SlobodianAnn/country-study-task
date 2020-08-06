

(async () => {
    let urlCountry = 'http://localhost/mapTask/countries.json';
    let urlCity = 'http://localhost/mapTask/cities.json';
    let response = await fetch(urlCountry);
    let response1 = await fetch(urlCity);
          
    let country = await response.json(); 
    let cities = await response1.json();
  
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
                      getCountry: new ObjectCountry(cities[key].country),
                  }
                 arrayObjCities.push(obj);
             }
         }
      }
      return arrayObjCities;
  }
  
  let arrayCities = ["Sant Julià de Lòria","Pas de la Casa","Ordino", "Ras al-Khaimah"];
  let testArray = new ObjectCities(arrayCities);
  console.log(testArray);
  
  function ObjectCountry(idCountry){
      for(let key in country){
          if(idCountry == key){
              this._name = country[key].name;
              this.getName = () => this._name;
              this._native = country[key].native;
              this.getNative = () => this._native;
              this._phone = country[key].phone;
              this.getPhone = () => this._phone;
              this._capital = country[key].capital;
              this.getCapital = () => this._capital
              this._currency = country[key].currency;
              this.getCurrency = () => this._currency;
              this._langs = country[key].languages;
              this.getLangs = () => this._langs;
              this.getCities = function(){
                  let arr = [];
                  for(let key in cities){
                      if (idCountry == cities[key].country){
                          arr.push(cities[key].name)
                      } 
                  }
                  return arr;
              };
              this._cities = this.getCities();
          }
      }
  }
      
  let objAE = new ObjectCountry('AE');
  let objAF = new ObjectCountry('AF');
  objAF.getCities();
  console.log(objAE);
  
  })()
  
          
  
  
  
  
  