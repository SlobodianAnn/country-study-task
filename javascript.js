
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
    }};



function ObjectCountry(array){
    for(let key in array){
        //console.log(key);
        this.getName = function(){
             this[key] = array[key].name;
        }
        console.log(array[key].name)
    }
}
    
let newObj = new ObjectCountry(country);



console.log(newObj.getName)
console.log('new obj')
console.log(newObj);



