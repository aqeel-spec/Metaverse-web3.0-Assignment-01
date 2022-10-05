

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