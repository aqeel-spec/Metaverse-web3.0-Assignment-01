

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


