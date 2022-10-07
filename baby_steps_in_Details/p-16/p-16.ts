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