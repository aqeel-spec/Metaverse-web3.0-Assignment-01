
let countries: string[];
let cities: string[];
let language: string[];
const list1: string[] = [];
let list2: string[] = [];
let list3: string[] = [];
let list4: string[] = [];
let list5: string[] = [];
const keya: string[] = [];
countries = ['Japan' , 'Pakistan','America','India','England'];
cities = ['Tokyo' , 'Lahore','New York','Bombay','Canada'];
language = ['Japani','Urdu','English','Hindi','Enlish'];
keya.push('Country  ' , ' City ' , ' Language ')
list1.push(countries[0],cities[0],language[0]);
list2.push(countries[1],cities[1],language[1]);
list3.push(countries[2],cities[1],language[2]);
list4.push(countries[3],cities[3],language[3]);
list5.push(countries[4],cities[4],language[4]);

var result = {};
function convertToObj(a, b){
    if(a.length != b.length || a.length == 0 || b.length == 0){
     return null;
    }
    let obj = {};
     
  // Using the foreach method
    a.forEach((k, i) => {obj[k] = b[i]})
    return obj;
}


console.log(convertToObj(keya , list1));
console.log(convertToObj(keya , list2));
console.log(convertToObj(keya , list3));
console.log(convertToObj(keya , list4));
console.log(convertToObj(keya , list5));







//var allLists = {};
// const keya: string[] = [];//
// keya.push('Country  ' , ' City ' , ' Language ');

// for ( var i: any = 0 ; i < countries.length && cities.length && language.length; i++ ){
//     const country_detail: any = [];
//     console.log(country_detail)
// }
// // var result = {};
// // const country_detail: any = [];
// // country_detail.push( countries[i],cities[i],language[i]);
// // result = country_detail[i];
// // console.log('country data is ',country_detail);
// // console.log('our required result is  = ',result);

// // for ( var i: any = 0 ; i < cities.length ; i++ ){
    
// //     allLists['list1'] = country_detail;
// //     for (var j: any = 0 ; j < keya.length ; j++){
// //         console.log('country_detail data : ',country_detail);
// //         result[keya[j]] = country_detail[j];
// //     }
    
// // }
// console.log('keya data to merge ', keya);   


// console.log('all list ',allLists);
