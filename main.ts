////////////////    Exercise 02 ///////////////////////////////////////
const call_person: string = 'Eric';
console.log(`Hello ${call_person}, would you like to learn some Python today?`);

////////////////    Exercise 03 ///////////////////////////////////////
var nam_person: string = 'Eric';
const message: string  = '"would you like to learn some python today?" ';
let message_to_show: any = `Hello ${nam_person}, ${message}  `;

let str: any = ' ';
const titleCase = (str) => {
   const string = str
   .toLowerCase()
   .split(" ")
   .map(word => {
      return word[0]
      .toUpperCase() + word.substr(1, word.length);
   })
   .join(" ");
   return string;
}
console.log(titleCase('"would you like to learn some python today?"'));
console.log( 'General message : ----> ', message_to_show);
console.log('LOwerCase method : ----> ', message_to_show.toLowerCase());
console.log('UpperCase method : ----> ', message_to_show.toUpperCase());
console.log('TitleCase Method : ----> ', titleCase("hello eric, would you like to learn some python today?"));


////////////////    Exercise 04 ///////////////////////////////////////
const nam_person: string = 'Eric'
const message: string  = '"A person who never made a mistake never tried anything new." ';
const msg: string = "once said";
const message_to_show: any = `${nam_person} ${msg}, ${message} `;
console.log(message_to_show);

////////////////    Exercise 05 ///////////////////////////////////////
var famous_person: string = 'My favourite person are Quaid-i-Azam ; '
var message: any  = "Customize message displays here : " + famous_person;
console.log(message);


////////////////    Exercise 06 ///////////////////////////////////////
var per_name: string = "Metaverse";
var temp: string = "Developer";
console.log(`/t\twhitespaces:\t${temp}\t ${per_name} `);
console.log(` /n\nwhitespaces:\n${temp}\n ${per_name} `);
console.log(` /t/nwithoutwhitespaces:${temp}${per_name} `);


////////////////    Exercise 07 ///////////////////////////////////////
console.log(5+3);
console.log(11-3);
console.log(16 /2);
console.log(4 * 2);


////////////////    Exercise 08 ///////////////////////////////////////
let add: number = 5 + 3 ; 
let mul: number = 4 * 2 ; 
let div: number = 16 / 2 ; 
let min: number = 11 - 3 ; 

console.log(`console.log ( 5 + 3) = ${add}`);
console.log(`console.log ( 11 - 3 ) = ${min}`);
console.log(`console.log ( 4 * 2) = ${mul}`);
console.log(`console.log ( 16 / 2 ) = ${div}`);


////////////////    Exercise 09 ///////////////////////////////////////
let mynumber: number = 60 ;
let message: string = 'My favorite number is ';
console.log(`${message}  ${mynumber}`);


////////////////    Exercise 10 ///////////////////////////////////////
let myname: String = "Aqeel Shahzad";
let currentdte: any = new Date();
console.log(`//\t My name is Aqeel Shahzad -> \n\t${myname}`);
console.log(`//\t Current date is -> \n\t${currentdte}`);


////////////////    Exercise 11 ///////////////////////////////////////
let names: String[] = ['Sir Zia', 'Sir Zeeshan', 'Sir Danyal'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);


////////////////    Exercise 12 ///////////////////////////////////////
let names: string[] = ['Sir Zia shb', 'Sir Zeeshan shb', 'Sir Danyal shb'];
let msg: string = 'Hello, ' ; 
console.log(msg + names[0]);
console.log(msg + names[1]);
console.log(msg + names[2]);


////////////////    Exercise 13 ///////////////////////////////////////
let favouriteTrans: string[] = ['Honda Civic' , 'Fortuner' , 'Tesla' , 'Prado'];
let qualties: string[] = ['I love ' , 'Dream car' , 'One of the most favourite', 'Old but Amazing'];
console.log(`${qualties[0]} -> ${favouriteTrans[0]}`);
console.log(`${qualties[1]} -> ${favouriteTrans[1]}`);
console.log(`${qualties[2]} -> ${favouriteTrans[2]}`);
console.log(`${qualties[3]} -> ${favouriteTrans[3]}`);


////////////////    Exercise 14 ///////////////////////////////////////
let guests: string[] = ['Muzammal', 'Haider', 'Farooq'];
let msg: string = " Come and join us at 9:00 PM party ";
console.log(guests[0] + msg)
console.log(guests[1] + msg)
console.log(guests[2] + msg)


////////////////    Exercise 15 ///////////////////////////////////////
const guests: string[] = ['Muzammal', 'Haider', 'Farooq'];
const deletedguest: any = guests.pop();
const deletedguestMsg: any =  deletedguest +  ' is not comming at today party ';
guests.push('Noman');

let msg: string = " Come and join us at 9:00 PM party ";
console.log(guests[0] + msg)
console.log(guests[1] + msg)
console.log(guests[2] + msg + '\t\n')
console.log(deletedguestMsg);


////////////////    Exercise 16 ///////////////////////////////////////
const guests: string[] = ['Muzammal', 'Haider', 'Farooq'];
guests.unshift('Noman');//add element at beg
guests.splice(2,0,'Hafiz');//at middle 
guests.push('CEO');

let msg: string = " Come at my home to enjoy party according to your Lavish. ";
let msgtoCall: string = "Guey's our big dinner is ready ";

console.log(guests);
console.log(guests[0] + msg);
console.log(guests[1] + msg);
console.log(guests[2] + msg);
console.log(guests[3] + msg);
console.log(guests[4] + msg);
console.log(guests[5] + msg + '\t\n')
console.log(msgtoCall);


////////////////    Exercise 17 ///////////////////////////////////////
const guests: string[] = ['Muzammal', 'Haider', 'Farooq'];
guests.unshift('Noman');//add element at beg
guests.splice(2,0,'Hafiz');//at middle 
guests.push('CEO');

let msg: string = " please come to dinner ";
let msgtoCall: string = "Guey's our big dinner is ready ";
console.log(guests);
console.log('Sorry! we have space for only two persons ');
console.log('Hello dear : '+ guests.pop() + " we're very sorry because we cannot invite you to the dinner.");
console.log('Hello dear : '+ guests.pop() + " we're very sorry because we cannot invite you to the dinner.");
console.log('Hello dear : '+ guests.pop() + " we're very sorry because we cannot invite you to the dinner.");
console.log('Hello dear : '+ guests.pop() + " we're very sorry because we cannot invite you to the dinner."+'\n');
//invited person below 
console.log(msgtoCall);
console.log(guests.pop() + ', ' + msg);
console.log(guests.pop() + ', ' + msg);
console.log(guests);


////////////////    Exercise 18 ///////////////////////////////////////
const locations: string[] = ['new yark', 'swizer land' , 'germany','dubai'];

const alphaOrder =  [...locations]


console.log(locations);
console.log('\nAlphabatical order : ')
console.log(alphaOrder.sort());
console.log('\nOriginal Array : ');
console.log(locations);
//reverse order of aplhabatical
console.log('\nReverse alphabatical order : ');
console.log(alphaOrder.reverse());
//original array
console.log('\nOriginal Array : ');
console.log(locations);
//original order reverse
console.log('\nReverse original order array');
console.log(locations.reverse());
//again reverse original array
console.log('\n Again reverse original order array');
console.log(locations.reverse());
//change location sort 
console.log('\nReverse alphabatical order : ');
console.log(locations.sort());
//again reverse alphabatical order
console.log('\n Again reverse alphabatical order : ');
console.log(locations.reverse());


////////////////    Exercise 19 ///////////////////////////////////////
export const guests = './p-17/';
const totalPeople: number =  guests.length;
console.log('We are inviting ' + totalPeople + ' People in dinner at 9:00 PM');


////////////////    Exercise 20 ///////////////////////////////////////

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


////////////////    Exercise 21 ///////////////////////////////////////
const person = {
    name: [ 'Farooq','Haider'],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} & ${this.name[1]} are ${this.age} years old.`);
      if (person.age === 32) {
        console.log(`Wow both has same age 32`)
      } 
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]} & ${this.name[1]} is my best friend.`);
    }
};
  console.log(person.name);
  console.log(person.age);
  person.bio();
  person.introduceSelf();


////////////////    Exercise 22 ///////////////////////////////////////
const persons = {
    name: {
      first: ['kia','bt','h'],
      last: 'person2',
    },
    // …
};
console.log(persons.name.first[0]);
console.log(persons.name.last);


////////////////    Exercise 23 ///////////////////////////////////////
let car: string = 'Fortuner';
let text: number = 23;
let isName: string = 'shahzad';
const arr1 = new Array(3).fill(false)
const month: any = 10; 
const year : number = 2022
const d = new Date();
const hoursInOneDay = 16 ;
const amIworkin = false;

console.log(arr1);
console.log(isName == 'shahzad');
console.log(car === 'Fortuner' );
console.log('Is current month & provided month are equal = ', month == d.getMonth() + 1);
console.log('Is current year & provided year are equal = ', year == d.getFullYear());
console.log('Hours is 1 Day = ', hoursInOneDay == d.getHours());
console.log('is text is a number which is = 23 = ', text == 12);
console.log( 'Is 10 > 13 : ', 10 > 13 ) ;
console.log( 'Is 10 < 13 : ', 10 < 13 ) ;
console.log( 'Is 10 >= 11 : ', 10 >= 11 ) ;
console.log( 'Am I working : ' , amIworkin);


////////////////    Exercise 24 ///////////////////////////////////////
var isName: string = 'Shahzad';
const year : number = 2022;
const a: number = 12;

const b = true ; 
const c = true ;
const d = false;
var arr = [2,3,4,5] ;
const same =   arr.indexOf(5);

console.log( ' a == 6 :', a == 6 );
console.log('a !== 6' ,a != 6 );
console.log(isName.toLowerCase() == isName);
console.log(isName.toUpperCase() == isName);
console.log( 'Is 10 > 13 : ', 10 > 13 ) ;
console.log( 'Is 10 < 13 : ', 10 < 13 ) ;
console.log( 'Is 10 >= 11 : ', 10 >= 11 ) ;
console.log( 'Is 10 >= 11 : ', 10 <= 11 )
console.log('both will true in (&) a && b : ', b && d );
console.log('one will true in (|) a || b : ', c || d );
// arrays value
if ( same == -1){
    console.log('value not exists in an array');
}else {
    console.log('value exists in an array ')
}


////////////////    Exercise 25 ///////////////////////////////////////
var alien_color  = 'green';
if ( alien_color == "green" ){
    console.log('You just earned a 5 points');
}else {
    console.log('sorry')
}


////////////////    Exercise 26 ///////////////////////////////////////
const alien_color: string  = 'green' ;

if ( alien_color !== 'green' ){
    console.log('You have just earned 5 pionts')
}else {
    console.log('You have just earned 10 pionts')
}


////////////////    Exercise 27 ///////////////////////////////////////
const alien_color2 = 'red';

if (alien_color2 !== 'red'){
    console.log("You just earned 5 points!")
}
else if (alien_color2 !== 'red') {
    console.log("You just earned 10 points!")
}else {
    console.log("You just earned 15 points!")
}


////////////////    Exercise 28 ///////////////////////////////////////
const myAge: number = 19;

if ( myAge < 2 ) {
    console.log("Your'r baby")
}else if ( myAge < 4 ){
    console.log("You'r a toddler")    
}else if ( myAge < 13 ){
    console.log("You'r a kid")    
}else if ( myAge < 20 ){
    console.log("You'r a teenager")    
}else if ( myAge < 65 ){
    console.log("You'r an adult")    
}else {
    console.log("You'r an adult")
}


////////////////    Exercise 29 ///////////////////////////////////////
const favorite_fruits: string[] = ['blueberries', 'salmonberries', 'peaches','apples'];

if ( favorite_fruits.indexOf('bananas') !== -1 ){
    console.log("You really like bananas!")
}
if ( favorite_fruits.indexOf('apples') !== -1 ){
    console.log("You really like apples!")
}
if ( favorite_fruits.indexOf('blueberries') !== -1 ){
    console.log("You really like blueberries!")
}
if ( favorite_fruits.indexOf('mangos') !== -1 ){
    console.log("You really like mangos!")
}
if ( favorite_fruits.indexOf('peaches') !== -1 ){
    console.log("You really like peaches!")
}


////////////////    Exercise 30 ///////////////////////////////////////
const usernames = ['Usman', 'Haider', 'admin', 'Farooq', 'Muzammal'];

for  (var  i = 0 ; i < usernames.length ; i++) {
    const newUser = [...usernames];
    if ( newUser.indexOf('admin') == i){
        console.log("Hello admin, would you like to see a status report?")
    }else {
        console.log("Hello " + newUser[i] + ", thank you for logging in again!")
    }
}


////////////////    Exercise 31 ///////////////////////////////////////
// const  usernames: string[] = ['admin','usman']

// if ( usernames.length !== 0  ) {
//     for ( var i = 0 ; i < usernames.length ; i++){
//         const newUser = [...usernames]
//         if ( newUser.indexOf('admin') == i ){
//             console.log('Hello admin, would you like to see a status report?')
//         }else {
//             console.log("Hello " + newUser[i] + ", thank you for logging in again!")
//         }
//     }
// }else {
//     console.log("We need to find some users!");
// }

// when array is empty
const  usernames: string[] = []

if ( usernames.length !== 0  ) {
    for ( var i = 0 ; i < usernames.length ; i++){
        const newUser = [...usernames]
        if ( newUser.indexOf('admin') == i ){
            console.log('Hello admin, would you like to see a status report?')
        }else {
            console.log("Hello " + newUser[i] + ", thank you for logging in again!")
        }
    }
}else {
    console.log("We need to find some users!");
}


////////////////    Exercise 32 ///////////////////////////////////////
const  current_users: string[] = ['eric', 'willie', 'admin', 'erin', 'Ever'];
const new_users: string[] = ['sarah', 'Willie', 'PHIL', 'ever', 'Iona'];


new_users.map((idx) => {
    if (current_users.includes(idx.toLowerCase())) {
      console.log(idx, " you will need to enter a new username");
    } else console.log("username is available");
});


////////////////    Exercise 33 ///////////////////////////////////////
let arr: any =  Array.from({length: 10}, (_, i) => i + 1);

for ( var i = 0 ; i < arr.length ; i++ ){
    if ( arr[i] == 1 ){
        console.log(arr[i] + 'st');
    }else if ( arr[i] == 2 ){
        console.log(arr[i]+ 'nd')
    }else if ( arr[i] == 3 ){
        console.log(arr[i] + 'rd')
    }else {
        console.log(arr[i] + 'th')
    }
}


////////////////    Exercise 34 ///////////////////////////////////////
const favorite_pizzas: string[] = ['pepperoni', 'hawaiian', 'veggie'];

for ( var i=0 ; i < favorite_pizzas.length ; i++ ){
    console.log(favorite_pizzas[i])
}

for ( var i=0 ; i < favorite_pizzas.length ; i++ ){
    console.log(` I really like ${favorite_pizzas[i]}`)
}
console.log('\n\n I really love pizza!')


////////////////    Exercise 35 ///////////////////////////////////////
const animals: string[] = ["dog", "lion", "tiger"]

for ( let i = 0 ; i < animals.length ; i++ ) {
    console.log( `${animals[i]} has four legs`)
}
console.log('All these have tails ')


////////////////    Exercise 36  &&& Exercise 37 ///////////////////////////////////////
const make_shirt: any = (size: any ,text: string ) => {
    console.log(`Size of your shirt is ${size}  and the message printed on it "${text}"`)
}
make_shirt(23 , 'I LOve PAKISTAN')

console.log('\n\n\t*********** Below is the result of exercise 37 *********\n')

// Task 37 exercise 
const make_shirt1 : any = ( size1: any = 'large', text1: string = 'I love Javescript' ) => {
     console.log(`I'm going to make a "  ${size1}  t-shirt`)
     console.log(`It will say, "${text1}" \n`)
}
make_shirt1();
make_shirt1('medium');
make_shirt1( 'small' , 'Programming is very easy' )


////////////////    Exercise 38 &&& 39 ///////////////////////////////////////
var describe_city: any  = ( city: string = 'Lahore' , country:string = 'Pakistan' ) => {
    const message: string = `${city} is in ${country}`
    console.log(message) 
}
describe_city()
describe_city('Karachi')
describe_city('canada','England')


//////////////     Exercise 39    ///////////////
console.log(`\n\n\t ********** Exercise 39 **************\n`)
const city_country = (city1: string , country1: string) => {
    return (`"${city1} , ${country1}"`)
}
const cityToVisit1: string = city_country('Karachi', 'Pakistan');
const cityToVisit2: string = city_country('Multan', 'Pakistan');
const cityToVisit3: string = city_country('Canada', 'England');

console.log(cityToVisit1);
console.log(cityToVisit2);
console.log(cityToVisit3);


////////////////    Exercise 40 ///////////////////////////////////////
const make_album = ( title: string , artist: string ) => {
    const music_album = {
        album_title : title,
        artist_name  : artist,
    }
    return (music_album)
}
var album1 = make_album('Main Ne Usse Dekha Hai', 'Rahat Fateh Ali Khan');
var album2 = make_album('Jugni', 'Arif Lohar');
var album3 = make_album('Jeene Laga Hoon', 'Atif Aslam');
console.log(album1);
console.log(album2);
console.log(album3);


////////////////    Exercise 41 ///////////////////////////////////////
const magician: string[] = ['magician1', 'magician2', 'magician3'];

const show_magicians = (arr: any[]) => {
  arr.map((idx) => console.log(idx));
};
show_magicians(magician);


////////////////    Exercise 42 && 43///////////////////////////////////////
const magicians: string[] = ['Harry Houdini', 'David Blaine', 'Teller']

const show_magicians = (arr) => {
    for (let  i = 0 ; i < arr.length ; i++ ) {
        console.log(arr[i])
    }
}


let old_magicions: any[] = [];

//      exercise 42 
const make_great = (arr: any[]) =>  {
    let great_magicians: any[] = [];
    for (let i = 0 ; i < arr.length ; i++){
        great_magicians.push( "The Great " + arr[i] ) ;
        old_magicions.push(arr[i]);
    }
   show_magicians(great_magicians);
  
}
show_magicians(magicians);
make_great(magicians);

///only comment to clear answer
console.log('\n\n *************** old magitions ************** \n')
show_magicians(old_magicions)


////////////////    Exercise 44 ///////////////////////////////////////
var make_sandwich = (arr) => {
    console.log("\n\n********I'll make you a great sandwich:************")
    for (let i = 0 ; i < arr.length ; i++) {
        console.log("  ...adding " + arr[i] + " to your sandwich.");
        
    }console.log('Your sandwich is ready')
}
const item_toadd = ['roast beef', 'cheddar cheese', 'lettuce', 'honey dijon']
const item_toadd1 = ['turkey', 'apple slices', 'honey mustard'];
const item_toadd2 =  ['peanut butter', 'strawberry jam']
make_sandwich(item_toadd);

console.log('\n\t /////********************** adding things to your 2nd pizza ***********');
make_sandwich(item_toadd1);
console.log('\n\t /////********************** adding things to your 3nd pizza ***********')
make_sandwich(item_toadd2)


////////////////    Exercise 45 ///////////////////////////////////////
var make_car = (manufacture , model , options) => {

    const car_dict = {
        'manufacturer': manufacture.title,
        'model': model.title,
    }
    let obj = { manufacture, model };
 
    Object.entries(options).map((idx) => (obj[idx[0]] = idx[1]));
    console.log(obj)
    return car_dict
}
make_car('subaru', 'outback', {color : 'blue', tow_package : 'yes' });
make_car('honda', 'accord', {year : 1991, color :'white', headlights : 'popup'});
