////////////////    Exercise 02 ///////////////////////////////////////

var call_person = 'Eric';
console.log("Hello ".concat(call_person, ", would you like to learn some Python today?"));

////////////////    Exercise 03 ///////////////////////////////////////

var nam_person = 'Eric';
var message = '"would you like to learn some python today?" ';
var message_to_show = "Hello ".concat(nam_person, ", ").concat(message, "  ");
var str = ' ';
var titleCase = function (str) {
    var string = str
        .toLowerCase()
        .split(" ")
        .map(function (word) {
        return word[0]
            .toUpperCase() + word.substr(1, word.length);
    })
        .join(" ");
    return string;
};
console.log(titleCase('"would you like to learn some python today?"'));
console.log('General message : ----> ', message_to_show);
console.log('LOwerCase method : ----> ', message_to_show.toLowerCase());
console.log('UpperCase method : ----> ', message_to_show.toUpperCase());
console.log('TitleCase Method : ----> ', titleCase("hello eric, would you like to learn some python today?"));



////////////////    Exercise 04 ///////////////////////////////////////
var nam_person = 'Eric';
var message = '"A person who never made a mistake never tried anything new." ';
var msg = "once said";
var message_to_show = "".concat(nam_person, " ").concat(msg, ", ").concat(message, " ");
console.log(message_to_show);


////////////////    Exercise 05 ///////////////////////////////////////
var famous_person = 'My favourite person are Quaid-i-Azam ; ';
var message = "Customize message displays here : " + famous_person;
console.log(message);


////////////////    Exercise 06 ///////////////////////////////////////
var per_name = "Metaverse";
var temp = "Developer";
console.log("/t\twhitespaces:\t".concat(temp, "\t ").concat(per_name, " "));
console.log(" /n\nwhitespaces:\n".concat(temp, "\n ").concat(per_name, " "));
console.log(" /t/nwithoutwhitespaces:".concat(temp).concat(per_name, " "));


////////////////    Exercise 07 ///////////////////////////////////////
console.log(5 + 3);
console.log(11 - 3);
console.log(16 / 2);
console.log(4 * 2);


////////////////    Exercise 08 ///////////////////////////////////////
var add = 5 + 3;
var mul = 4 * 2;
var div = 16 / 2;
var min = 11 - 3;
console.log("console.log ( 5 + 3) = ".concat(add));
console.log("console.log ( 11 - 3 ) = ".concat(min));
console.log("console.log ( 4 * 2) = ".concat(mul));
console.log("console.log ( 16 / 2 ) = ".concat(div));


////////////////    Exercise 09 ///////////////////////////////////////
var mynumber = 60;
var message = 'My favorite number is ';
console.log("".concat(message, "  ").concat(mynumber));


////////////////    Exercise 10 ///////////////////////////////////////
var myname = "Aqeel Shahzad";
var currentdte = new Date();
console.log("//\t My name is Aqeel Shahzad -> \n\t".concat(myname));
console.log("//\t Current date is -> \n\t".concat(currentdte));

////////////////    Exercise 11 ///////////////////////////////////////
var names = ['Sir Zia', 'Sir Zeeshan', 'Sir Danyal'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);


////////////////    Exercise 12 ///////////////////////////////////////
var names = ['Sir Zia shb', 'Sir Zeeshan shb', 'Sir Danyal shb'];
var msg = 'Hello, ';
console.log(msg + names[0]);
console.log(msg + names[1]);
console.log(msg + names[2]);


////////////////    Exercise 13 ///////////////////////////////////////
var favouriteTrans = ['Honda Civic', 'Fortuner', 'Tesla', 'Prado'];
var qualties = ['I love ', 'Dream car', 'One of the most favourite', 'Old but Amazing'];
console.log("".concat(qualties[0], " -> ").concat(favouriteTrans[0]));
console.log("".concat(qualties[1], " -> ").concat(favouriteTrans[1]));
console.log("".concat(qualties[2], " -> ").concat(favouriteTrans[2]));
console.log("".concat(qualties[3], " -> ").concat(favouriteTrans[3]));


////////////////    Exercise 14 ///////////////////////////////////////
var guests = ['Muzammal', 'Haider', 'Farooq'];
var msg = " Come and join us at 9:00 PM party ";
console.log(guests[0] + msg);
console.log(guests[1] + msg);
console.log(guests[2] + msg);


////////////////    Exercise 15 ///////////////////////////////////////
var guests = ['Muzammal', 'Haider', 'Farooq'];
var deletedguest = guests.pop();
var deletedguestMsg = deletedguest + ' is not comming at today party ';
guests.push('Noman');
var msg = " Come and join us at 9:00 PM party ";
console.log(guests[0] + msg);
console.log(guests[1] + msg);
console.log(guests[2] + msg + '\t\n');
console.log(deletedguestMsg);


////////////////    Exercise 16 ///////////////////////////////////////
var guests = ['Muzammal', 'Haider', 'Farooq'];
guests.unshift('Noman'); //add element at beg
guests.splice(2, 0, 'Hafiz'); //at middle 
guests.push('CEO');
var msg = " Come at my home to enjoy party according to your Lavish. ";
var msgtoCall = "Guey's our big dinner is ready ";
console.log(guests);
console.log(guests[0] + msg);
console.log(guests[1] + msg);
console.log(guests[2] + msg);
console.log(guests[3] + msg);
console.log(guests[4] + msg);
console.log(guests[5] + msg + '\t\n');
console.log(msgtoCall);


////////////////    Exercise 17 ///////////////////////////////////////
var guests = ['Muzammal', 'Haider', 'Farooq'];
guests.unshift('Noman'); //add element at beg
guests.splice(2, 0, 'Hafiz'); //at middle 
guests.push('CEO');
var msg = " please come to dinner ";
var msgtoCall = "Guey's our big dinner is ready ";
console.log(guests);
console.log('Sorry! we have space for only two persons ');
console.log('Hello dear : ' + guests.pop() + " we're very sorry because we cannot invite you to the dinner.");
console.log('Hello dear : ' + guests.pop() + " we're very sorry because we cannot invite you to the dinner.");
console.log('Hello dear : ' + guests.pop() + " we're very sorry because we cannot invite you to the dinner.");
console.log('Hello dear : ' + guests.pop() + " we're very sorry because we cannot invite you to the dinner." + '\n');
//invited person below 
console.log(msgtoCall);
console.log(guests.pop() + ', ' + msg);
console.log(guests.pop() + ', ' + msg);
console.log(guests);


////////////////    Exercise 18 ///////////////////////////////////////
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locations = ['new yark', 'swizer land', 'germany', 'dubai'];
var alphaOrder = __spreadArray([], locations, true);
console.log(locations);
console.log('\nAlphabatical order : ');
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
"use strict";
exports.__esModule = true;
exports.guests = void 0;
exports.guests = './p-17/';
var totalPeople = exports.guests.length;
console.log('We are inviting ' + totalPeople + ' People in dinner at 9:00 PM');


////////////////    Exercise 20 ///////////////////////////////////////
var countries;
var cities;
var language;
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var keya = [];
countries = ['Japan', 'Pakistan', 'America', 'India', 'England'];
cities = ['Tokyo', 'Lahore', 'New York', 'Bombay', 'Canada'];
language = ['Japani', 'Urdu', 'English', 'Hindi', 'Enlish'];
keya.push('Country  ', ' City ', ' Language ');
list1.push(countries[0], cities[0], language[0]);
list2.push(countries[1], cities[1], language[1]);
list3.push(countries[2], cities[1], language[2]);
list4.push(countries[3], cities[3], language[3]);
list5.push(countries[4], cities[4], language[4]);
var result = {};
function convertToObj(a, b) {
    if (a.length != b.length || a.length == 0 || b.length == 0) {
        return null;
    }
    var obj = {};
    // Using the foreach method
    a.forEach(function (k, i) { obj[k] = b[i]; });
    return obj;
}
console.log(convertToObj(keya, list1));
console.log(convertToObj(keya, list2));
console.log(convertToObj(keya, list3));
console.log(convertToObj(keya, list4));
console.log(convertToObj(keya, list5));


////////////////    Exercise 21 ///////////////////////////////////////
///////Task 21
var person = {
    name: ['Farooq', 'Haider'],
    age: 32,
    bio: function () {
        console.log("".concat(this.name[0], " & ").concat(this.name[1], " are ").concat(this.age, " years old."));
        if (person.age === 32) {
            console.log("Wow both has same age 32");
        }
    },
    introduceSelf: function () {
        console.log("Hi! I'm ".concat(this.name[0], " & ").concat(this.name[1], " is my best friend."));
    }
};
console.log(person.name);
console.log(person.age);
person.bio();
person.introduceSelf();


////////////////    Exercise 22 ///////////////////////////////////////
var persons = {
    name: {
        first: ['kia', 'bt', 'h'],
        last: 'person2'
    }
};
console.log(persons.name.first[0]);
console.log(persons.name.last);


////////////////    Exercise 23 ///////////////////////////////////////
var car = 'Fortuner';
var text = 23;
var isName = 'shahzad';
var arr1 = new Array(3).fill(false);
var month = 10;
var year = 2022;
var d = new Date();
var hoursInOneDay = 16;
var amIworkin = false;
console.log(arr1);
console.log(isName == 'shahzad');
console.log(car === 'Fortuner');
console.log('Is current month & provided month are equal = ', month == d.getMonth() + 1);
console.log('Is current year & provided year are equal = ', year == d.getFullYear());
console.log('Hours is 1 Day = ', hoursInOneDay == d.getHours());
console.log('is text is a number which is = 23 = ', text == 12);
console.log('Is 10 > 13 : ', 10 > 13);
console.log('Is 10 < 13 : ', 10 < 13);
console.log('Is 10 >= 11 : ', 10 >= 11);
console.log('Am I working : ', amIworkin);


////////////////    Exercise 24 ///////////////////////////////////////
var isName = 'Shahzad';
var year = 2022;
var a = 12;
var b = true;
var c = true;
var d = false;
var arr = [2, 3, 4, 5];
var same = arr.indexOf(5);
console.log(' a == 6 :', a == 6);
console.log('a !== 6', a != 6);
console.log(isName.toLowerCase() == isName);
console.log(isName.toUpperCase() == isName);
console.log('Is 10 > 13 : ', 10 > 13);
console.log('Is 10 < 13 : ', 10 < 13);
console.log('Is 10 >= 11 : ', 10 >= 11);
console.log('Is 10 >= 11 : ', 10 <= 11);
console.log('both will true in (&) a && b : ', b && d);
console.log('one will true in (|) a || b : ', c || d);
// arrays value
if (same == -1) {
    console.log('value not exists in an array');
}
else {
    console.log('value exists in an array ');
}


////////////////    Exercise 25 ///////////////////////////////////////
var alien_color = 'green';
if (alien_color == "green") {
    console.log('You just earned a 5 points');
}
else {
    console.log('sorry');
}


////////////////    Exercise 26 ///////////////////////////////////////
var alien_color = 'green';
if (alien_color !== 'green') {
    console.log('You have just earned 5 pionts');
}
else {
    console.log('You have just earned 10 pionts');
}


////////////////    Exercise 27 ///////////////////////////////////////
var alien_color2 = 'red';
if (alien_color2 !== 'red') {
    console.log("You just earned 5 points!");
}
else if (alien_color2 !== 'red') {
    console.log("You just earned 10 points!");
}
else {
    console.log("You just earned 15 points!");
}


////////////////    Exercise 28 ///////////////////////////////////////
var myAge = 19;
if (myAge < 2) {
    console.log("Your'r baby");
}
else if (myAge < 4) {
    console.log("You'r a toddler");
}
else if (myAge < 13) {
    console.log("You'r a kid");
}
else if (myAge < 20) {
    console.log("You'r a teenager");
}
else if (myAge < 65) {
    console.log("You'r an adult");
}
else {
    console.log("You'r an adult");
}



////////////////    Exercise 29 ///////////////////////////////////////
var favorite_fruits = ['blueberries', 'salmonberries', 'peaches', 'apples'];
if (favorite_fruits.indexOf('bananas') !== -1) {
    console.log("You really like bananas!");
}
if (favorite_fruits.indexOf('apples') !== -1) {
    console.log("You really like apples!");
}
if (favorite_fruits.indexOf('blueberries') !== -1) {
    console.log("You really like blueberries!");
}
if (favorite_fruits.indexOf('mangos') !== -1) {
    console.log("You really like mangos!");
}
if (favorite_fruits.indexOf('peaches') !== -1) {
    console.log("You really like peaches!");
}


////////////////    Exercise 30 ///////////////////////////////////////
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var usernames = ['Usman', 'Haider', 'admin', 'Farooq', 'Muzammal'];
for (var i = 0; i < usernames.length; i++) {
    var newUser = __spreadArray([], usernames, true);
    if (newUser.indexOf('admin') == i) {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + newUser[i] + ", thank you for logging in again!");
    }
}


////////////////    Exercise 31 ///////////////////////////////////////
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var usernames = ['Usman', 'Haider', 'admin', 'Farooq', 'Muzammal'];
for (var i = 0; i < usernames.length; i++) {
    var newUser = __spreadArray([], usernames, true);
    if (newUser.indexOf('admin') == i) {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + newUser[i] + ", thank you for logging in again!");
    }
}


////////////////    Exercise 32 ///////////////////////////////////////
var current_users = ['eric', 'willie', 'admin', 'erin', 'Ever'];
var new_users = ['sarah', 'Willie', 'PHIL', 'ever', 'Iona'];
new_users.map(function (idx) {
    if (current_users.includes(idx.toLowerCase())) {
        console.log(idx, " you will need to enter a new username");
    }
    else
        console.log("username is available");
});


////////////////    Exercise 33 ///////////////////////////////////////
var arr = Array.from({ length: 10 }, function (_, i) { return i + 1; });
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
        console.log(arr[i] + 'st');
    }
    else if (arr[i] == 2) {
        console.log(arr[i] + 'nd');
    }
    else if (arr[i] == 3) {
        console.log(arr[i] + 'rd');
    }
    else {
        console.log(arr[i] + 'th');
    }
}


////////////////    Exercise 34 ///////////////////////////////////////
var favorite_pizzas = ['pepperoni', 'hawaiian', 'veggie'];
for (var i = 0; i < favorite_pizzas.length; i++) {
    console.log(favorite_pizzas[i]);
}
for (var i = 0; i < favorite_pizzas.length; i++) {
    console.log(" I really like ".concat(favorite_pizzas[i]));
}
console.log('\n\n I really love pizza!');


////////////////    Exercise 35 ///////////////////////////////////////
var animals = ["dog", "lion", "tiger"];
for (var i = 0; i < animals.length; i++) {
    console.log("".concat(animals[i], " has four legs"));
}
console.log('All these have tails ');


////////////////    Exercise 36 && 37 ///////////////////////////////////////
var make_shirt = function (size, text) {
    console.log("Size of your shirt is ".concat(size, "  and the message printed on it \"").concat(text, "\""));
};
make_shirt(23, 'I LOve PAKISTAN');
console.log('\n\n\t*********** Below is the result of exercise 37 *********\n');
// Task 37 exercise 
var make_shirt1 = function (size1, text1) {
    if (size1 === void 0) { size1 = 'large'; }
    if (text1 === void 0) { text1 = 'I love Javescript'; }
    console.log("I'm going to make a \"  ".concat(size1, "  t-shirt"));
    console.log("It will say, \"".concat(text1, "\" \n"));
};
make_shirt1();
make_shirt1('medium');
make_shirt1('small', 'Programming is very easy');


////////////////    Exercise 38 &&& 39 ///////////////////////////////////////
var describe_city = function (city, country) {
    if (city === void 0) { city = 'Lahore'; }
    if (country === void 0) { country = 'Pakistan'; }
    var message = "".concat(city, " is in ").concat(country);
    console.log(message);
};
describe_city();
describe_city('Karachi');
describe_city('canada', 'England');
//////////////     Exercise 39    ///////////////
console.log("\n\n\t ********** Exercise 39 **************\n");
var city_country = function (city1, country1) {
    return ("\"".concat(city1, " , ").concat(country1, "\""));
};
var cityToVisit1 = city_country('Karachi', 'Pakistan');
var cityToVisit2 = city_country('Multan', 'Pakistan');
var cityToVisit3 = city_country('Canada', 'England');
console.log(cityToVisit1);
console.log(cityToVisit2);
console.log(cityToVisit3);


////////////////    Exercise 40 ///////////////////////////////////////
var make_album = function (title, artist) {
    var music_album = {
        album_title: title,
        artist_name: artist
    };
    return (music_album);
};
var album1 = make_album('Main Ne Usse Dekha Hai', 'Rahat Fateh Ali Khan');
var album2 = make_album('Jugni', 'Arif Lohar');
var album3 = make_album('Jeene Laga Hoon', 'Atif Aslam');
console.log(album1);
console.log(album2);
console.log(album3);


////////////////    Exercise 41 ///////////////////////////////////////
var magician = ['magician1', 'magician2', 'magician3'];
var show_magicians = function (arr) {
    arr.map(function (idx) { return console.log(idx); });
};
show_magicians(magician);


////////////////    Exercise 42 &&& 43 ///////////////////////////////////////
var magicians = ['Harry Houdini', 'David Blaine', 'Teller'];
var show_magicians = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
var old_magicions = [];
//      exercise 42 
var make_great = function (arr) {
    var great_magicians = [];
    for (var i = 0; i < arr.length; i++) {
        great_magicians.push("The Great " + arr[i]);
        old_magicions.push(arr[i]);
    }
    show_magicians(great_magicians);
};
show_magicians(magicians);
make_great(magicians);
///only comment to clear answer
console.log('\n\n *************** old magitions ************** \n');
show_magicians(old_magicions);
////////////////    Exercise 44 ///////////////////////////////////////
var make_sandwich = function (arr) {
    console.log("\n\n********I'll make you a great sandwich:************");
    for (var i = 0; i < arr.length; i++) {
        console.log("  ...adding " + arr[i] + " to your sandwich.");
    }
    console.log('Your sandwich is ready');
};
var item_toadd = ['roast beef', 'cheddar cheese', 'lettuce', 'honey dijon'];
var item_toadd1 = ['turkey', 'apple slices', 'honey mustard'];
var item_toadd2 = ['peanut butter', 'strawberry jam'];
make_sandwich(item_toadd);
console.log('\n\t /////********************** adding things to your 2nd pizza ***********');
make_sandwich(item_toadd1);
console.log('\n\t /////********************** adding things to your 3nd pizza ***********');
make_sandwich(item_toadd2);


////////////////    Exercise 45 ///////////////////////////////////////
var make_car = function (manufacture, model, options) {
    var car_dict = {
        'manufacturer': manufacture.title,
        'model': model.title
    };
    var obj = { manufacture: manufacture, model: model };
    Object.entries(options).map(function (idx) { return (obj[idx[0]] = idx[1]); });
    console.log(obj);
    return car_dict;
};
make_car('subaru', 'outback', { color: 'blue', tow_package: 'yes' });
make_car('honda', 'accord', { year: 1991, color: 'white', headlights: 'popup' });
