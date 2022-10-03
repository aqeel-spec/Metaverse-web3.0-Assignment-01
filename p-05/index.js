var famous_person = prompt('Please enter the name of your favourite person');
var message  = "Customize message displays here : " + famous_person;

console.log(message);
document.getElementById("name").innerHTML = message;
