var nam_person = prompt('Please enter the name of your favourite person');

const message  = '"would you like to learn some python today?" ';
var message1  = 'Hello';

let message_to_show = `${nam_person}, ${message}  `;
let message_to_show1 =  nam_person + message1;

var a =  message;

let str = ' ';
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

document.getElementById("name").innerHTML = message_to_show;
document.getElementById("case").innerHTML = message_to_show.toLowerCase();
document.getElementById("case1").innerHTML = message_to_show.toUpperCase();
document.getElementById("case2").innerHTML = titleCase("would you like to learn some python today?");
