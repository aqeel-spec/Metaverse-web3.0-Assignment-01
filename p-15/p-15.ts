let guests: string[] = ['Muzammal', 'Haider', 'Farooq'];
let msg: string = " Come and join us at 9:00 PM party ";
let oldgst: string = 'Above are the list of old gusets';
//       here is the list of new added guests
guests.push('Noman', 'Faida');
guests.splice(2,0,'Muhammad Farooq');//at 2nd index name added
//  at this stage we have 6 guests
// I am going to remove last one
guests.pop()

console.log(guests[0] + msg)
console.log(guests[1] + msg)
console.log(guests[2] + msg)
console.log(oldgst);
console.log(guests)