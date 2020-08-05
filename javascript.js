
let country = {
    "AD": {
      "name": "Andorra",
      "native": "Andorra",
      "phone": "376",
      "continent": "EU",
      "capital": "Andorra la Vella",
      "currency": "EUR",
      "languages": [
        "ca"
      ]
    },
    "AE": {
      "name": "United Arab Emirates",
      "native": "دولة الإمارات العربية المتحدة",
      "phone": "971",
      "continent": "AS",
      "capital": "Abu Dhabi",
      "currency": "AED",
      "languages": [
        "ar"
      ]
    },
    "AF": {
        "name": "Afghanistan",
        "native": "افغانستان",
        "phone": "93",
        "continent": "AS",
        "capital": "Kabul",
        "currency": "AFN",
        "languages": [
          "ps",
          "uz",
          "tk"
        ]
    }};

let cities = [
    {
      "country": "AD",
      "name": "Sant Julià de Lòria",
      "lat": "42.46372",
      "lng": "1.49129"
    },
    {
      "country": "AD",
      "name": "Pas de la Casa",
      "lat": "42.54277",
      "lng": "1.73361"
    },
    {
      "country": "AD",
      "name": "Ordino",
      "lat": "42.55623",
      "lng": "1.53319"
    },
    {
        "country": "AF",
        "name": "Wulêswālī Bihsūd",
        "lat": "34.3436",
        "lng": "67.90567"
      },
      {
        "country": "AF",
        "name": "Kuhsān",
        "lat": "34.65389",
        "lng": "61.19778"
      },
      {
        "country": "AF",
        "name": "Lāsh",
        "lat": "35.3782",
        "lng": "64.77457"
      },
      {
        "country": "AF",
        "name": "Tukzār",
        "lat": "35.94831",
        "lng": "66.42132"
      }];

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

let arrayCities = ["Sant Julià de Lòria","Pas de la Casa","Ordino"];
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
//console.log(objAF.getCities())


//console.log(newObj.getName)
//console.log('new obj3')
//console.log(objAE);
console.log(objAF);



