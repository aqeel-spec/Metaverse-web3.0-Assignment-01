const guests: string[] = ['Muzammal', 'Haider', 'Farooq'];
const deletedguest = guests.pop();
const deletedguestMsg =  deletedguest +  ' is not comming at today party ';
guests.push('Noman');

let msg: string = " Come and join us at 9:00 PM party ";

console.log(guests[0] + msg)
console.log(guests[1] + msg)
console.log(guests[2] + msg + '\t\n')
console.log(deletedguestMsg);