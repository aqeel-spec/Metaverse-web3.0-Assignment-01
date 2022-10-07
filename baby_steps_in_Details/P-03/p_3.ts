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
