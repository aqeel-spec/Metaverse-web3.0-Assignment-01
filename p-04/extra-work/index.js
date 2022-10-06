var nam_person = prompt('Please enter the name of your favourite person');
const message  = '"A person who never made a mistake never tried anything new." ';
let msg = "once said"

let message_to_show = `${nam_person} ${msg}, ${message} `;
console.log(message_to_show);
document.getElementById("name").innerHTML = message_to_show;
