// // // 1. Solving problems using array functions on rest countries data.

// // // a. Get all the countries from Asia continent /region using Filter function:
// // var xhr = new XMLHttpRequest(); //Creation of xml http request xhr

// // //parsing the url
// // xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

// // xhr.send(); //Initiating the request from client side

// // //add a listener to process the request
// // xhr.onload = function (){
// //     //process the request and server will return the data
// //     if(xhr.status>=200 && xhr.status<300){
// //         //convert the raw data to js notation
// //         var data = JSON.parse(xhr.response)//get raw data
// //         data.filter((CountiesInAsia)=>{
// //             if(CountiesInAsia.region === "Asia"){
// //                 console.log(CountiesInAsia.name);
// //             }
// //         })
// //     }
// //     else{
// //         // //If ther is any error due to API endpoint or server problem
// // //     // //Then we will use else for printing error
// // console.log("Getting error while loading the website");
// //     }
// // }

// // /* Output:
// // MRFTask.js:17 Afghanistan
// // MRFTask.js:17 Armenia
// // MRFTask.js:17 Azerbaijan
// // MRFTask.js:17 Bahrain
// // MRFTask.js:17 Bangladesh
// // MRFTask.js:17 Bhutan
// // MRFTask.js:17 Brunei Darussalam
// // MRFTask.js:17 Cambodia
// // MRFTask.js:17 China
// // MRFTask.js:17 Georgia
// // MRFTask.js:17 Hong Kong
// // MRFTask.js:17 India
// // MRFTask.js:17 Indonesia
// // MRFTask.js:17 Iran (Islamic Republic of)
// // MRFTask.js:17 Iraq
// // MRFTask.js:17 Israel
// // MRFTask.js:17 Japan
// // MRFTask.js:17 Jordan
// // MRFTask.js:17 Kazakhstan
// // MRFTask.js:17 Kuwait
// // MRFTask.js:17 Kyrgyzstan
// // MRFTask.js:17 Lao People's Democratic Republic
// // MRFTask.js:17 Lebanon
// // MRFTask.js:17 Macao
// // MRFTask.js:17 Malaysia
// // MRFTask.js:17 Maldives
// // MRFTask.js:17 Mongolia
// // MRFTask.js:17 Myanmar
// // MRFTask.js:17 Nepal
// // MRFTask.js:17 Korea (Democratic People's Republic of)
// // MRFTask.js:17 Oman
// // MRFTask.js:17 Pakistan
// // MRFTask.js:17 Palestine, State of
// // MRFTask.js:17 Philippines
// // MRFTask.js:17 Qatar
// // MRFTask.js:17 Saudi Arabia
// // MRFTask.js:17 Singapore
// // MRFTask.js:17 Korea (Republic of)
// // MRFTask.js:17 Sri Lanka
// // MRFTask.js:17 Syrian Arab Republic
// // MRFTask.js:17 Taiwan
// // MRFTask.js:17 Tajikistan
// // MRFTask.js:17 Thailand
// // MRFTask.js:17 Timor-Leste
// // MRFTask.js:17 Turkey
// // MRFTask.js:17 Turkmenistan
// // MRFTask.js:17 United Arab Emirates
// // MRFTask.js:17 Uzbekistan
// // MRFTask.js:17 Viet Nam
// // MRFTask.js:17 Yemen*/

// // b. Get all the countries with a population of less than 2 lakhs using Filter function
// var xhr = new XMLHttpRequest(); //Creation of xml http request xhr

// //parsing the url
// xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

// xhr.send(); //Initiating the request from client side

// //add a listener to process the request
// xhr.onload = function (){
//     //process the request and server will return the data
//     if(xhr.status>=200 && xhr.status<300){
//         //convert the raw data to js notation
//         var data = JSON.parse(xhr.response)//get raw data
//         data.filter((PopulationLessThan2Lack)=>{
//             if(PopulationLessThan2Lack.population < 200000){
//                 console.log(PopulationLessThan2Lack.name);
//             }
//         })
//     }
//     else{
//         // //If ther is any error due to API endpoint or server problem
// //     // //Then we will use else for printing error
// console.log("Getting error while loading the website");
//     }
// }

// /*Output:
// MRFTask.js:98 Åland Islands
// MRFTask.js:98 American Samoa
// MRFTask.js:98 Andorra
// MRFTask.js:98 Anguilla
// MRFTask.js:98 Antarctica
// MRFTask.js:98 Antigua and Barbuda
// MRFTask.js:98 Aruba
// MRFTask.js:98 Bermuda
// MRFTask.js:98 Bonaire, Sint Eustatius and Saba
// MRFTask.js:98 Bouvet Island
// MRFTask.js:98 British Indian Ocean Territory
// MRFTask.js:98 United States Minor Outlying Islands
// MRFTask.js:98 Virgin Islands (British)
// MRFTask.js:98 Virgin Islands (U.S.)
// MRFTask.js:98 Cayman Islands
// MRFTask.js:98 Christmas Island
// MRFTask.js:98 Cocos (Keeling) Islands
// MRFTask.js:98 Cook Islands
// MRFTask.js:98 Curaçao
// MRFTask.js:98 Dominica
// MRFTask.js:98 Falkland Islands (Malvinas)
// MRFTask.js:98 Faroe Islands
// MRFTask.js:98 French Southern Territories
// MRFTask.js:98 Gibraltar
// MRFTask.js:98 Greenland
// MRFTask.js:98 Grenada
// MRFTask.js:98 Guam
// MRFTask.js:98 Guernsey
// MRFTask.js:98 Heard Island and McDonald Islands
// MRFTask.js:98 Holy See
// MRFTask.js:98 Isle of Man
// MRFTask.js:98 Jersey
// MRFTask.js:98 Kiribati
// MRFTask.js:98 Liechtenstein
// MRFTask.js:98 Marshall Islands
// MRFTask.js:98 Micronesia (Federated States of)
// MRFTask.js:98 Monaco
// MRFTask.js:98 Montserrat
// MRFTask.js:98 Nauru
// MRFTask.js:98 Niue
// MRFTask.js:98 Norfolk Island
// MRFTask.js:98 Northern Mariana Islands
// MRFTask.js:98 Palau
// MRFTask.js:98 Pitcairn
// MRFTask.js:98 Saint Barthélemy
// MRFTask.js:98 Saint Helena, Ascension and Tristan da Cunha
// MRFTask.js:98 Saint Kitts and Nevis
// MRFTask.js:98 Saint Lucia
// MRFTask.js:98 Saint Martin (French part)
// MRFTask.js:98 Saint Pierre and Miquelon
// MRFTask.js:98 Saint Vincent and the Grenadines
// MRFTask.js:98 Samoa
// MRFTask.js:98 San Marino
// MRFTask.js:98 Sao Tome and Principe
// MRFTask.js:98 Seychelles
// MRFTask.js:98 Sint Maarten (Dutch part)
// MRFTask.js:98 South Georgia and the South Sandwich Islands
// MRFTask.js:98 Svalbard and Jan Mayen
// MRFTask.js:98 Tokelau
// MRFTask.js:98 Tonga
// MRFTask.js:98 Turks and Caicos Islands
// MRFTask.js:98 Tuvalu
// MRFTask.js:98 Wallis and Futuna
// */

// c. Print the following details name, capital, flag using forEach function
// var xhr = new XMLHttpRequest(); //Creation of xml http request xhr

// //parsing the url
// xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

// xhr.send(); //Initiating the request from client side

// //add a listener to process the request
// xhr.onload = function (){
//     //process the request and server will return the data
//     if(xhr.status>=200 && xhr.status<300){
//         //convert the raw data to js notation
//         var data = JSON.parse(xhr.response)//get raw data
//         data.forEach((Country)=>{
//             console.log(`
//             Name : ${Country.name}
//             Capital : ${Country.capital}
//             Flag : ${Country.flag}
//             `)
//         })
//     }
// }
/*
MRFTask.js:190 
            Name : Afghanistan
            Capital : Kabul
            Flag : https://restcountries.eu/data/afg.svg
            
MRFTask.js:190 
            Name : Åland Islands
            Capital : Mariehamn
            Flag : https://restcountries.eu/data/ala.svg
            
MRFTask.js:190 
            Name : Albania
            Capital : Tirana
            Flag : https://restcountries.eu/data/alb.svg
            
MRFTask.js:190 
            Name : Algeria
            Capital : Algiers
            Flag : https://restcountries.eu/data/dza.svg
            
MRFTask.js:190 
            Name : American Samoa
            Capital : Pago Pago
            Flag : https://restcountries.eu/data/asm.svg
            
MRFTask.js:190 
            Name : Andorra
            Capital : Andorra la Vella
            Flag : https://restcountries.eu/data/and.svg
            
MRFTask.js:190 
            Name : Angola
            Capital : Luanda
            Flag : https://restcountries.eu/data/ago.svg
            
MRFTask.js:190 
            Name : Anguilla
            Capital : The Valley
            Flag : https://restcountries.eu/data/aia.svg
            
MRFTask.js:190 
            Name : Antarctica
            Capital : 
            Flag : https://restcountries.eu/data/ata.svg
            
MRFTask.js:190 
            Name : Antigua and Barbuda
            Capital : Saint John's
            Flag : https://restcountries.eu/data/atg.svg
            
MRFTask.js:190 
            Name : Argentina
            Capital : Buenos Aires
            Flag : https://restcountries.eu/data/arg.svg
            
MRFTask.js:190 
            Name : Armenia
            Capital : Yerevan
            Flag : https://restcountries.eu/data/arm.svg
            
MRFTask.js:190 
            Name : Aruba
            Capital : Oranjestad
            Flag : https://restcountries.eu/data/abw.svg
            
MRFTask.js:190 
            Name : Australia
            Capital : Canberra
            Flag : https://restcountries.eu/data/aus.svg
            
MRFTask.js:190 
            Name : Austria
            Capital : Vienna
            Flag : https://restcountries.eu/data/aut.svg
            
MRFTask.js:190 
            Name : Azerbaijan
            Capital : Baku
            Flag : https://restcountries.eu/data/aze.svg
            
MRFTask.js:190 
            Name : Bahamas
            Capital : Nassau
            Flag : https://restcountries.eu/data/bhs.svg
            
MRFTask.js:190 
            Name : Bahrain
            Capital : Manama
            Flag : https://restcountries.eu/data/bhr.svg
            
MRFTask.js:190 
            Name : Bangladesh
            Capital : Dhaka
            Flag : https://restcountries.eu/data/bgd.svg
            
MRFTask.js:190 
            Name : Barbados
            Capital : Bridgetown
            Flag : https://restcountries.eu/data/brb.svg
            
MRFTask.js:190 
            Name : Belarus
            Capital : Minsk
            Flag : https://restcountries.eu/data/blr.svg
            
MRFTask.js:190 
            Name : Belgium
            Capital : Brussels
            Flag : https://restcountries.eu/data/bel.svg
            
MRFTask.js:190 
            Name : Belize
            Capital : Belmopan
            Flag : https://restcountries.eu/data/blz.svg
            
MRFTask.js:190 
            Name : Benin
            Capital : Porto-Novo
            Flag : https://restcountries.eu/data/ben.svg
            
MRFTask.js:190 
            Name : Bermuda
            Capital : Hamilton
            Flag : https://restcountries.eu/data/bmu.svg
            
MRFTask.js:190 
            Name : Bhutan
            Capital : Thimphu
            Flag : https://restcountries.eu/data/btn.svg
            
MRFTask.js:190 
            Name : Bolivia (Plurinational State of)
            Capital : Sucre
            Flag : https://restcountries.eu/data/bol.svg
            
MRFTask.js:190 
            Name : Bonaire, Sint Eustatius and Saba
            Capital : Kralendijk
            Flag : https://restcountries.eu/data/bes.svg
            
MRFTask.js:190 
            Name : Bosnia and Herzegovina
            Capital : Sarajevo
            Flag : https://restcountries.eu/data/bih.svg
            
MRFTask.js:190 
            Name : Botswana
            Capital : Gaborone
            Flag : https://restcountries.eu/data/bwa.svg
            
MRFTask.js:190 
            Name : Bouvet Island
            Capital : 
            Flag : https://restcountries.eu/data/bvt.svg
            
MRFTask.js:190 
            Name : Brazil
            Capital : Brasília
            Flag : https://restcountries.eu/data/bra.svg
            
MRFTask.js:190 
            Name : British Indian Ocean Territory
            Capital : Diego Garcia
            Flag : https://restcountries.eu/data/iot.svg
            
MRFTask.js:190 
            Name : United States Minor Outlying Islands
            Capital : 
            Flag : https://restcountries.eu/data/umi.svg
            
MRFTask.js:190 
            Name : Virgin Islands (British)
            Capital : Road Town
            Flag : https://restcountries.eu/data/vgb.svg
            
MRFTask.js:190 
            Name : Virgin Islands (U.S.)
            Capital : Charlotte Amalie
            Flag : https://restcountries.eu/data/vir.svg
            
MRFTask.js:190 
            Name : Brunei Darussalam
            Capital : Bandar Seri Begawan
            Flag : https://restcountries.eu/data/brn.svg
            
MRFTask.js:190 
            Name : Bulgaria
            Capital : Sofia
            Flag : https://restcountries.eu/data/bgr.svg
            
MRFTask.js:190 
            Name : Burkina Faso
            Capital : Ouagadougou
            Flag : https://restcountries.eu/data/bfa.svg
            
MRFTask.js:190 
            Name : Burundi
            Capital : Bujumbura
            Flag : https://restcountries.eu/data/bdi.svg
            
MRFTask.js:190 
            Name : Cambodia
            Capital : Phnom Penh
            Flag : https://restcountries.eu/data/khm.svg
            
MRFTask.js:190 
            Name : Cameroon
            Capital : Yaoundé
            Flag : https://restcountries.eu/data/cmr.svg
            
MRFTask.js:190 
            Name : Canada
            Capital : Ottawa
            Flag : https://restcountries.eu/data/can.svg
            
MRFTask.js:190 
            Name : Cabo Verde
            Capital : Praia
            Flag : https://restcountries.eu/data/cpv.svg
            
MRFTask.js:190 
            Name : Cayman Islands
            Capital : George Town
            Flag : https://restcountries.eu/data/cym.svg
            
MRFTask.js:190 
            Name : Central African Republic
            Capital : Bangui
            Flag : https://restcountries.eu/data/caf.svg
            
MRFTask.js:190 
            Name : Chad
            Capital : N'Djamena
            Flag : https://restcountries.eu/data/tcd.svg
            
MRFTask.js:190 
            Name : Chile
            Capital : Santiago
            Flag : https://restcountries.eu/data/chl.svg
            
MRFTask.js:190 
            Name : China
            Capital : Beijing
            Flag : https://restcountries.eu/data/chn.svg
            
MRFTask.js:190 
            Name : Christmas Island
            Capital : Flying Fish Cove
            Flag : https://restcountries.eu/data/cxr.svg
            
MRFTask.js:190 
            Name : Cocos (Keeling) Islands
            Capital : West Island
            Flag : https://restcountries.eu/data/cck.svg
            
MRFTask.js:190 
            Name : Colombia
            Capital : Bogotá
            Flag : https://restcountries.eu/data/col.svg
            
MRFTask.js:190 
            Name : Comoros
            Capital : Moroni
            Flag : https://restcountries.eu/data/com.svg
            
MRFTask.js:190 
            Name : Congo
            Capital : Brazzaville
            Flag : https://restcountries.eu/data/cog.svg
            
MRFTask.js:190 
            Name : Congo (Democratic Republic of the)
            Capital : Kinshasa
            Flag : https://restcountries.eu/data/cod.svg
            
MRFTask.js:190 
            Name : Cook Islands
            Capital : Avarua
            Flag : https://restcountries.eu/data/cok.svg
            
MRFTask.js:190 
            Name : Costa Rica
            Capital : San José
            Flag : https://restcountries.eu/data/cri.svg
            
MRFTask.js:190 
            Name : Croatia
            Capital : Zagreb
            Flag : https://restcountries.eu/data/hrv.svg
            
MRFTask.js:190 
            Name : Cuba
            Capital : Havana
            Flag : https://restcountries.eu/data/cub.svg
            
MRFTask.js:190 
            Name : Curaçao
            Capital : Willemstad
            Flag : https://restcountries.eu/data/cuw.svg
            
MRFTask.js:190 
            Name : Cyprus
            Capital : Nicosia
            Flag : https://restcountries.eu/data/cyp.svg
            
MRFTask.js:190 
            Name : Czech Republic
            Capital : Prague
            Flag : https://restcountries.eu/data/cze.svg
            
MRFTask.js:190 
            Name : Denmark
            Capital : Copenhagen
            Flag : https://restcountries.eu/data/dnk.svg
            
MRFTask.js:190 
            Name : Djibouti
            Capital : Djibouti
            Flag : https://restcountries.eu/data/dji.svg
            
MRFTask.js:190 
            Name : Dominica
            Capital : Roseau
            Flag : https://restcountries.eu/data/dma.svg
            
MRFTask.js:190 
            Name : Dominican Republic
            Capital : Santo Domingo
            Flag : https://restcountries.eu/data/dom.svg
            
MRFTask.js:190 
            Name : Ecuador
            Capital : Quito
            Flag : https://restcountries.eu/data/ecu.svg
            
MRFTask.js:190 
            Name : Egypt
            Capital : Cairo
            Flag : https://restcountries.eu/data/egy.svg
            
MRFTask.js:190 
            Name : El Salvador
            Capital : San Salvador
            Flag : https://restcountries.eu/data/slv.svg
            
MRFTask.js:190 
            Name : Equatorial Guinea
            Capital : Malabo
            Flag : https://restcountries.eu/data/gnq.svg
            
MRFTask.js:190 
            Name : Eritrea
            Capital : Asmara
            Flag : https://restcountries.eu/data/eri.svg
            
MRFTask.js:190 
            Name : Estonia
            Capital : Tallinn
            Flag : https://restcountries.eu/data/est.svg
            
MRFTask.js:190 
            Name : Ethiopia
            Capital : Addis Ababa
            Flag : https://restcountries.eu/data/eth.svg
            
MRFTask.js:190 
            Name : Falkland Islands (Malvinas)
            Capital : Stanley
            Flag : https://restcountries.eu/data/flk.svg
            
MRFTask.js:190 
            Name : Faroe Islands
            Capital : Tórshavn
            Flag : https://restcountries.eu/data/fro.svg
            
MRFTask.js:190 
            Name : Fiji
            Capital : Suva
            Flag : https://restcountries.eu/data/fji.svg
            
MRFTask.js:190 
            Name : Finland
            Capital : Helsinki
            Flag : https://restcountries.eu/data/fin.svg
            
MRFTask.js:190 
            Name : France
            Capital : Paris
            Flag : https://restcountries.eu/data/fra.svg
            
MRFTask.js:190 
            Name : French Guiana
            Capital : Cayenne
            Flag : https://restcountries.eu/data/guf.svg
            
MRFTask.js:190 
            Name : French Polynesia
            Capital : Papeetē
            Flag : https://restcountries.eu/data/pyf.svg
            
MRFTask.js:190 
            Name : French Southern Territories
            Capital : Port-aux-Français
            Flag : https://restcountries.eu/data/atf.svg
            
MRFTask.js:190 
            Name : Gabon
            Capital : Libreville
            Flag : https://restcountries.eu/data/gab.svg
            
MRFTask.js:190 
            Name : Gambia
            Capital : Banjul
            Flag : https://restcountries.eu/data/gmb.svg
            
MRFTask.js:190 
            Name : Georgia
            Capital : Tbilisi
            Flag : https://restcountries.eu/data/geo.svg
            
MRFTask.js:190 
            Name : Germany
            Capital : Berlin
            Flag : https://restcountries.eu/data/deu.svg
            
MRFTask.js:190 
            Name : Ghana
            Capital : Accra
            Flag : https://restcountries.eu/data/gha.svg
            
MRFTask.js:190 
            Name : Gibraltar
            Capital : Gibraltar
            Flag : https://restcountries.eu/data/gib.svg
            
MRFTask.js:190 
            Name : Greece
            Capital : Athens
            Flag : https://restcountries.eu/data/grc.svg
            
MRFTask.js:190 
            Name : Greenland
            Capital : Nuuk
            Flag : https://restcountries.eu/data/grl.svg
            
MRFTask.js:190 
            Name : Grenada
            Capital : St. George's
            Flag : https://restcountries.eu/data/grd.svg
            
MRFTask.js:190 
            Name : Guadeloupe
            Capital : Basse-Terre
            Flag : https://restcountries.eu/data/glp.svg
            
MRFTask.js:190 
            Name : Guam
            Capital : Hagåtña
            Flag : https://restcountries.eu/data/gum.svg
            
MRFTask.js:190 
            Name : Guatemala
            Capital : Guatemala City
            Flag : https://restcountries.eu/data/gtm.svg
            
MRFTask.js:190 
            Name : Guernsey
            Capital : St. Peter Port
            Flag : https://restcountries.eu/data/ggy.svg
            
MRFTask.js:190 
            Name : Guinea
            Capital : Conakry
            Flag : https://restcountries.eu/data/gin.svg
            
MRFTask.js:190 
            Name : Guinea-Bissau
            Capital : Bissau
            Flag : https://restcountries.eu/data/gnb.svg
            
MRFTask.js:190 
            Name : Guyana
            Capital : Georgetown
            Flag : https://restcountries.eu/data/guy.svg
            
MRFTask.js:190 
            Name : Haiti
            Capital : Port-au-Prince
            Flag : https://restcountries.eu/data/hti.svg
            
MRFTask.js:190 
            Name : Heard Island and McDonald Islands
            Capital : 
            Flag : https://restcountries.eu/data/hmd.svg
            
MRFTask.js:190 
            Name : Holy See
            Capital : Rome
            Flag : https://restcountries.eu/data/vat.svg
            
MRFTask.js:190 
            Name : Honduras
            Capital : Tegucigalpa
            Flag : https://restcountries.eu/data/hnd.svg
            
MRFTask.js:190 
            Name : Hong Kong
            Capital : City of Victoria
            Flag : https://restcountries.eu/data/hkg.svg
            
MRFTask.js:190 
            Name : Hungary
            Capital : Budapest
            Flag : https://restcountries.eu/data/hun.svg
            
MRFTask.js:190 
            Name : Iceland
            Capital : Reykjavík
            Flag : https://restcountries.eu/data/isl.svg
            
MRFTask.js:190 
            Name : India
            Capital : New Delhi
            Flag : https://restcountries.eu/data/ind.svg
            
MRFTask.js:190 
            Name : Indonesia
            Capital : Jakarta
            Flag : https://restcountries.eu/data/idn.svg
            
MRFTask.js:190 
            Name : Côte d'Ivoire
            Capital : Yamoussoukro
            Flag : https://restcountries.eu/data/civ.svg
            
MRFTask.js:190 
            Name : Iran (Islamic Republic of)
            Capital : Tehran
            Flag : https://restcountries.eu/data/irn.svg
            
MRFTask.js:190 
            Name : Iraq
            Capital : Baghdad
            Flag : https://restcountries.eu/data/irq.svg
            
MRFTask.js:190 
            Name : Ireland
            Capital : Dublin
            Flag : https://restcountries.eu/data/irl.svg
            
MRFTask.js:190 
            Name : Isle of Man
            Capital : Douglas
            Flag : https://restcountries.eu/data/imn.svg
            
MRFTask.js:190 
            Name : Israel
            Capital : Jerusalem
            Flag : https://restcountries.eu/data/isr.svg
            
MRFTask.js:190 
            Name : Italy
            Capital : Rome
            Flag : https://restcountries.eu/data/ita.svg
            
MRFTask.js:190 
            Name : Jamaica
            Capital : Kingston
            Flag : https://restcountries.eu/data/jam.svg
            
MRFTask.js:190 
            Name : Japan
            Capital : Tokyo
            Flag : https://restcountries.eu/data/jpn.svg
            
MRFTask.js:190 
            Name : Jersey
            Capital : Saint Helier
            Flag : https://restcountries.eu/data/jey.svg
            
MRFTask.js:190 
            Name : Jordan
            Capital : Amman
            Flag : https://restcountries.eu/data/jor.svg
            
MRFTask.js:190 
            Name : Kazakhstan
            Capital : Astana
            Flag : https://restcountries.eu/data/kaz.svg
            
MRFTask.js:190 
            Name : Kenya
            Capital : Nairobi
            Flag : https://restcountries.eu/data/ken.svg
            
MRFTask.js:190 
            Name : Kiribati
            Capital : South Tarawa
            Flag : https://restcountries.eu/data/kir.svg
            
MRFTask.js:190 
            Name : Kuwait
            Capital : Kuwait City
            Flag : https://restcountries.eu/data/kwt.svg
            
MRFTask.js:190 
            Name : Kyrgyzstan
            Capital : Bishkek
            Flag : https://restcountries.eu/data/kgz.svg
            
MRFTask.js:190 
            Name : Lao People's Democratic Republic
            Capital : Vientiane
            Flag : https://restcountries.eu/data/lao.svg
            
MRFTask.js:190 
            Name : Latvia
            Capital : Riga
            Flag : https://restcountries.eu/data/lva.svg
            
MRFTask.js:190 
            Name : Lebanon
            Capital : Beirut
            Flag : https://restcountries.eu/data/lbn.svg
            
MRFTask.js:190 
            Name : Lesotho
            Capital : Maseru
            Flag : https://restcountries.eu/data/lso.svg
            
MRFTask.js:190 
            Name : Liberia
            Capital : Monrovia
            Flag : https://restcountries.eu/data/lbr.svg
            
MRFTask.js:190 
            Name : Libya
            Capital : Tripoli
            Flag : https://restcountries.eu/data/lby.svg
            
MRFTask.js:190 
            Name : Liechtenstein
            Capital : Vaduz
            Flag : https://restcountries.eu/data/lie.svg
            
MRFTask.js:190 
            Name : Lithuania
            Capital : Vilnius
            Flag : https://restcountries.eu/data/ltu.svg
            
MRFTask.js:190 
            Name : Luxembourg
            Capital : Luxembourg
            Flag : https://restcountries.eu/data/lux.svg
            
MRFTask.js:190 
            Name : Macao
            Capital : 
            Flag : https://restcountries.eu/data/mac.svg
            
MRFTask.js:190 
            Name : Macedonia (the former Yugoslav Republic of)
            Capital : Skopje
            Flag : https://restcountries.eu/data/mkd.svg
            
MRFTask.js:190 
            Name : Madagascar
            Capital : Antananarivo
            Flag : https://restcountries.eu/data/mdg.svg
            
MRFTask.js:190 
            Name : Malawi
            Capital : Lilongwe
            Flag : https://restcountries.eu/data/mwi.svg
            
MRFTask.js:190 
            Name : Malaysia
            Capital : Kuala Lumpur
            Flag : https://restcountries.eu/data/mys.svg
            
MRFTask.js:190 
            Name : Maldives
            Capital : Malé
            Flag : https://restcountries.eu/data/mdv.svg
            
MRFTask.js:190 
            Name : Mali
            Capital : Bamako
            Flag : https://restcountries.eu/data/mli.svg
            
MRFTask.js:190 
            Name : Malta
            Capital : Valletta
            Flag : https://restcountries.eu/data/mlt.svg
            
MRFTask.js:190 
            Name : Marshall Islands
            Capital : Majuro
            Flag : https://restcountries.eu/data/mhl.svg
            
MRFTask.js:190 
            Name : Martinique
            Capital : Fort-de-France
            Flag : https://restcountries.eu/data/mtq.svg
            
MRFTask.js:190 
            Name : Mauritania
            Capital : Nouakchott
            Flag : https://restcountries.eu/data/mrt.svg
            
MRFTask.js:190 
            Name : Mauritius
            Capital : Port Louis
            Flag : https://restcountries.eu/data/mus.svg
            
MRFTask.js:190 
            Name : Mayotte
            Capital : Mamoudzou
            Flag : https://restcountries.eu/data/myt.svg
            
MRFTask.js:190 
            Name : Mexico
            Capital : Mexico City
            Flag : https://restcountries.eu/data/mex.svg
            
MRFTask.js:190 
            Name : Micronesia (Federated States of)
            Capital : Palikir
            Flag : https://restcountries.eu/data/fsm.svg
            
MRFTask.js:190 
            Name : Moldova (Republic of)
            Capital : Chișinău
            Flag : https://restcountries.eu/data/mda.svg
            
MRFTask.js:190 
            Name : Monaco
            Capital : Monaco
            Flag : https://restcountries.eu/data/mco.svg
            
MRFTask.js:190 
            Name : Mongolia
            Capital : Ulan Bator
            Flag : https://restcountries.eu/data/mng.svg
            
MRFTask.js:190 
            Name : Montenegro
            Capital : Podgorica
            Flag : https://restcountries.eu/data/mne.svg
            
MRFTask.js:190 
            Name : Montserrat
            Capital : Plymouth
            Flag : https://restcountries.eu/data/msr.svg
            
MRFTask.js:190 
            Name : Morocco
            Capital : Rabat
            Flag : https://restcountries.eu/data/mar.svg
            
MRFTask.js:190 
            Name : Mozambique
            Capital : Maputo
            Flag : https://restcountries.eu/data/moz.svg
            
MRFTask.js:190 
            Name : Myanmar
            Capital : Naypyidaw
            Flag : https://restcountries.eu/data/mmr.svg
            
MRFTask.js:190 
            Name : Namibia
            Capital : Windhoek
            Flag : https://restcountries.eu/data/nam.svg
            
MRFTask.js:190 
            Name : Nauru
            Capital : Yaren
            Flag : https://restcountries.eu/data/nru.svg
            
MRFTask.js:190 
            Name : Nepal
            Capital : Kathmandu
            Flag : https://restcountries.eu/data/npl.svg
            
MRFTask.js:190 
            Name : Netherlands
            Capital : Amsterdam
            Flag : https://restcountries.eu/data/nld.svg
            
MRFTask.js:190 
            Name : New Caledonia
            Capital : Nouméa
            Flag : https://restcountries.eu/data/ncl.svg
            
MRFTask.js:190 
            Name : New Zealand
            Capital : Wellington
            Flag : https://restcountries.eu/data/nzl.svg
            
MRFTask.js:190 
            Name : Nicaragua
            Capital : Managua
            Flag : https://restcountries.eu/data/nic.svg
            
MRFTask.js:190 
            Name : Niger
            Capital : Niamey
            Flag : https://restcountries.eu/data/ner.svg
            
MRFTask.js:190 
            Name : Nigeria
            Capital : Abuja
            Flag : https://restcountries.eu/data/nga.svg
            
MRFTask.js:190 
            Name : Niue
            Capital : Alofi
            Flag : https://restcountries.eu/data/niu.svg
            
MRFTask.js:190 
            Name : Norfolk Island
            Capital : Kingston
            Flag : https://restcountries.eu/data/nfk.svg
            
MRFTask.js:190 
            Name : Korea (Democratic People's Republic of)
            Capital : Pyongyang
            Flag : https://restcountries.eu/data/prk.svg
            
MRFTask.js:190 
            Name : Northern Mariana Islands
            Capital : Saipan
            Flag : https://restcountries.eu/data/mnp.svg
            
MRFTask.js:190 
            Name : Norway
            Capital : Oslo
            Flag : https://restcountries.eu/data/nor.svg
            
MRFTask.js:190 
            Name : Oman
            Capital : Muscat
            Flag : https://restcountries.eu/data/omn.svg
            
MRFTask.js:190 
            Name : Pakistan
            Capital : Islamabad
            Flag : https://restcountries.eu/data/pak.svg
            
MRFTask.js:190 
            Name : Palau
            Capital : Ngerulmud
            Flag : https://restcountries.eu/data/plw.svg
            
MRFTask.js:190 
            Name : Palestine, State of
            Capital : Ramallah
            Flag : https://restcountries.eu/data/pse.svg
            
MRFTask.js:190 
            Name : Panama
            Capital : Panama City
            Flag : https://restcountries.eu/data/pan.svg
            
MRFTask.js:190 
            Name : Papua New Guinea
            Capital : Port Moresby
            Flag : https://restcountries.eu/data/png.svg
            
MRFTask.js:190 
            Name : Paraguay
            Capital : Asunción
            Flag : https://restcountries.eu/data/pry.svg
            
MRFTask.js:190 
            Name : Peru
            Capital : Lima
            Flag : https://restcountries.eu/data/per.svg
            
MRFTask.js:190 
            Name : Philippines
            Capital : Manila
            Flag : https://restcountries.eu/data/phl.svg
            
MRFTask.js:190 
            Name : Pitcairn
            Capital : Adamstown
            Flag : https://restcountries.eu/data/pcn.svg
            
MRFTask.js:190 
            Name : Poland
            Capital : Warsaw
            Flag : https://restcountries.eu/data/pol.svg
            
MRFTask.js:190 
            Name : Portugal
            Capital : Lisbon
            Flag : https://restcountries.eu/data/prt.svg
            
MRFTask.js:190 
            Name : Puerto Rico
            Capital : San Juan
            Flag : https://restcountries.eu/data/pri.svg
            
MRFTask.js:190 
            Name : Qatar
            Capital : Doha
            Flag : https://restcountries.eu/data/qat.svg
            
MRFTask.js:190 
            Name : Republic of Kosovo
            Capital : Pristina
            Flag : https://restcountries.eu/data/kos.svg
            
MRFTask.js:190 
            Name : Réunion
            Capital : Saint-Denis
            Flag : https://restcountries.eu/data/reu.svg
            
MRFTask.js:190 
            Name : Romania
            Capital : Bucharest
            Flag : https://restcountries.eu/data/rou.svg
            
MRFTask.js:190 
            Name : Russian Federation
            Capital : Moscow
            Flag : https://restcountries.eu/data/rus.svg
            
MRFTask.js:190 
            Name : Rwanda
            Capital : Kigali
            Flag : https://restcountries.eu/data/rwa.svg
            
MRFTask.js:190 
            Name : Saint Barthélemy
            Capital : Gustavia
            Flag : https://restcountries.eu/data/blm.svg
            
MRFTask.js:190 
            Name : Saint Helena, Ascension and Tristan da Cunha
            Capital : Jamestown
            Flag : https://restcountries.eu/data/shn.svg
            
MRFTask.js:190 
            Name : Saint Kitts and Nevis
            Capital : Basseterre
            Flag : https://restcountries.eu/data/kna.svg
            
MRFTask.js:190 
            Name : Saint Lucia
            Capital : Castries
            Flag : https://restcountries.eu/data/lca.svg
            
MRFTask.js:190 
            Name : Saint Martin (French part)
            Capital : Marigot
            Flag : https://restcountries.eu/data/maf.svg
            
MRFTask.js:190 
            Name : Saint Pierre and Miquelon
            Capital : Saint-Pierre
            Flag : https://restcountries.eu/data/spm.svg
            
MRFTask.js:190 
            Name : Saint Vincent and the Grenadines
            Capital : Kingstown
            Flag : https://restcountries.eu/data/vct.svg
            
MRFTask.js:190 
            Name : Samoa
            Capital : Apia
            Flag : https://restcountries.eu/data/wsm.svg
            
MRFTask.js:190 
            Name : San Marino
            Capital : City of San Marino
            Flag : https://restcountries.eu/data/smr.svg
            
MRFTask.js:190 
            Name : Sao Tome and Principe
            Capital : São Tomé
            Flag : https://restcountries.eu/data/stp.svg
            
MRFTask.js:190 
            Name : Saudi Arabia
            Capital : Riyadh
            Flag : https://restcountries.eu/data/sau.svg
            
MRFTask.js:190 
            Name : Senegal
            Capital : Dakar
            Flag : https://restcountries.eu/data/sen.svg
            
MRFTask.js:190 
            Name : Serbia
            Capital : Belgrade
            Flag : https://restcountries.eu/data/srb.svg
            
MRFTask.js:190 
            Name : Seychelles
            Capital : Victoria
            Flag : https://restcountries.eu/data/syc.svg
            
MRFTask.js:190 
            Name : Sierra Leone
            Capital : Freetown
            Flag : https://restcountries.eu/data/sle.svg
            
MRFTask.js:190 
            Name : Singapore
            Capital : Singapore
            Flag : https://restcountries.eu/data/sgp.svg
            
MRFTask.js:190 
            Name : Sint Maarten (Dutch part)
            Capital : Philipsburg
            Flag : https://restcountries.eu/data/sxm.svg
            
MRFTask.js:190 
            Name : Slovakia
            Capital : Bratislava
            Flag : https://restcountries.eu/data/svk.svg
            
MRFTask.js:190 
            Name : Slovenia
            Capital : Ljubljana
            Flag : https://restcountries.eu/data/svn.svg
            
MRFTask.js:190 
            Name : Solomon Islands
            Capital : Honiara
            Flag : https://restcountries.eu/data/slb.svg
            
MRFTask.js:190 
            Name : Somalia
            Capital : Mogadishu
            Flag : https://restcountries.eu/data/som.svg
            
MRFTask.js:190 
            Name : South Africa
            Capital : Pretoria
            Flag : https://restcountries.eu/data/zaf.svg
            
MRFTask.js:190 
            Name : South Georgia and the South Sandwich Islands
            Capital : King Edward Point
            Flag : https://restcountries.eu/data/sgs.svg
            
MRFTask.js:190 
            Name : Korea (Republic of)
            Capital : Seoul
            Flag : https://restcountries.eu/data/kor.svg
            
MRFTask.js:190 
            Name : South Sudan
            Capital : Juba
            Flag : https://restcountries.eu/data/ssd.svg
            
MRFTask.js:190 
            Name : Spain
            Capital : Madrid
            Flag : https://restcountries.eu/data/esp.svg
            
MRFTask.js:190 
            Name : Sri Lanka
            Capital : Colombo
            Flag : https://restcountries.eu/data/lka.svg
            
MRFTask.js:190 
            Name : Sudan
            Capital : Khartoum
            Flag : https://restcountries.eu/data/sdn.svg
            
MRFTask.js:190 
            Name : Suriname
            Capital : Paramaribo
            Flag : https://restcountries.eu/data/sur.svg
            
MRFTask.js:190 
            Name : Svalbard and Jan Mayen
            Capital : Longyearbyen
            Flag : https://restcountries.eu/data/sjm.svg
            
MRFTask.js:190 
            Name : Swaziland
            Capital : Lobamba
            Flag : https://restcountries.eu/data/swz.svg
            
MRFTask.js:190 
            Name : Sweden
            Capital : Stockholm
            Flag : https://restcountries.eu/data/swe.svg
            
MRFTask.js:190 
            Name : Switzerland
            Capital : Bern
            Flag : https://restcountries.eu/data/che.svg
            
MRFTask.js:190 
            Name : Syrian Arab Republic
            Capital : Damascus
            Flag : https://restcountries.eu/data/syr.svg
            
MRFTask.js:190 
            Name : Taiwan
            Capital : Taipei
            Flag : https://restcountries.eu/data/twn.svg
            
MRFTask.js:190 
            Name : Tajikistan
            Capital : Dushanbe
            Flag : https://restcountries.eu/data/tjk.svg
            
MRFTask.js:190 
            Name : Tanzania, United Republic of
            Capital : Dodoma
            Flag : https://restcountries.eu/data/tza.svg
            
MRFTask.js:190 
            Name : Thailand
            Capital : Bangkok
            Flag : https://restcountries.eu/data/tha.svg
            
MRFTask.js:190 
            Name : Timor-Leste
            Capital : Dili
            Flag : https://restcountries.eu/data/tls.svg
            
MRFTask.js:190 
            Name : Togo
            Capital : Lomé
            Flag : https://restcountries.eu/data/tgo.svg
            
MRFTask.js:190 
            Name : Tokelau
            Capital : Fakaofo
            Flag : https://restcountries.eu/data/tkl.svg
            
MRFTask.js:190 
            Name : Tonga
            Capital : Nuku'alofa
            Flag : https://restcountries.eu/data/ton.svg
            
MRFTask.js:190 
            Name : Trinidad and Tobago
            Capital : Port of Spain
            Flag : https://restcountries.eu/data/tto.svg
            
MRFTask.js:190 
            Name : Tunisia
            Capital : Tunis
            Flag : https://restcountries.eu/data/tun.svg
            
MRFTask.js:190 
            Name : Turkey
            Capital : Ankara
            Flag : https://restcountries.eu/data/tur.svg
            
MRFTask.js:190 
            Name : Turkmenistan
            Capital : Ashgabat
            Flag : https://restcountries.eu/data/tkm.svg
            
MRFTask.js:190 
            Name : Turks and Caicos Islands
            Capital : Cockburn Town
            Flag : https://restcountries.eu/data/tca.svg
            
MRFTask.js:190 
            Name : Tuvalu
            Capital : Funafuti
            Flag : https://restcountries.eu/data/tuv.svg
            
MRFTask.js:190 
            Name : Uganda
            Capital : Kampala
            Flag : https://restcountries.eu/data/uga.svg
            
MRFTask.js:190 
            Name : Ukraine
            Capital : Kiev
            Flag : https://restcountries.eu/data/ukr.svg
            
MRFTask.js:190 
            Name : United Arab Emirates
            Capital : Abu Dhabi
            Flag : https://restcountries.eu/data/are.svg
            
MRFTask.js:190 
            Name : United Kingdom of Great Britain and Northern Ireland
            Capital : London
            Flag : https://restcountries.eu/data/gbr.svg
            
MRFTask.js:190 
            Name : United States of America
            Capital : Washington, D.C.
            Flag : https://restcountries.eu/data/usa.svg
            
MRFTask.js:190 
            Name : Uruguay
            Capital : Montevideo
            Flag : https://restcountries.eu/data/ury.svg
            
MRFTask.js:190 
            Name : Uzbekistan
            Capital : Tashkent
            Flag : https://restcountries.eu/data/uzb.svg
            
MRFTask.js:190 
            Name : Vanuatu
            Capital : Port Vila
            Flag : https://restcountries.eu/data/vut.svg
            
MRFTask.js:190 
            Name : Venezuela (Bolivarian Republic of)
            Capital : Caracas
            Flag : https://restcountries.eu/data/ven.svg
            
MRFTask.js:190 
            Name : Viet Nam
            Capital : Hanoi
            Flag : https://restcountries.eu/data/vnm.svg
            
MRFTask.js:190 
            Name : Wallis and Futuna
            Capital : Mata-Utu
            Flag : https://restcountries.eu/data/wlf.svg
            
MRFTask.js:190 
            Name : Western Sahara
            Capital : El Aaiún
            Flag : https://restcountries.eu/data/esh.svg
            
MRFTask.js:190 
            Name : Yemen
            Capital : Sana'a
            Flag : https://restcountries.eu/data/yem.svg
            
MRFTask.js:190 
            Name : Zambia
            Capital : Lusaka
            Flag : https://restcountries.eu/data/zmb.svg
            
MRFTask.js:190 
            Name : Zimbabwe
            Capital : Harare
            Flag : https://restcountries.eu/data/zwe.svg
            
*/



// // d. Print the total population of countries using reduce function
// //Set up html request.
// var xhr = new XMLHttpRequest(); //Creation of xml http request xhr

// //Pasing the url
// xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

// xhr.send(); //initiating the request from client side

// //add a listener to process the request
// xhr.onload = function () {
//     //process the request and server will return the data
//     if (xhr.status >= 200 && xhr.status < 300) {
//         //conver the raw data to js notation
//         var data = JSON.parse(xhr.response)//get raw data
//         let output = data.map((Allpopulation) => Allpopulation.population).reduce((acc, curr) => acc = acc + curr);
//         console.log(output);
//     }
//     else {
//         //     //If ther is any error due to API endpoint or server problem
//         //     //Then we will use else for printing error
//         console.log("Getting error while loading the website");
//     }
// }

// //Output: 7349137231

// e. Print the country which uses US Dollars as currency.
var xhr = new XMLHttpRequest(); //Creation of xml http request xhr

//Pasing the url
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.send(); //initiating the request from client side

//add a listener to process the request
xhr.onload = function () {
    //process the request and server will return the data
    if (xhr.status >= 200 && xhr.status < 300) {
        //conver the raw data to js notation
        var data = JSON.parse(xhr.response)//get raw data
        data.map((item) => item.currencies.map((x) => {
            if (x.name.includes("United States dollar")) {
                console.log(item.name);
            }
        }));
    }
    else {
        //     //If ther is any error due to API endpoint or server problem
        //     //Then we will use else for printing error
        console.log("Getting error while loading the website");
    }
}

/*
Output:
MRFTask.js:1496 Bonaire, Sint Eustatius and Saba
MRFTask.js:1496 British Indian Ocean Territory
MRFTask.js:1496 Virgin Islands (British)
MRFTask.js:1496 Virgin Islands (U.S.)
MRFTask.js:1496 Cambodia
MRFTask.js:1496 Ecuador
MRFTask.js:1496 El Salvador
MRFTask.js:1496 Guam
MRFTask.js:1496 Marshall Islands
MRFTask.js:1496 Micronesia (Federated States of)
*/