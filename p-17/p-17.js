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
