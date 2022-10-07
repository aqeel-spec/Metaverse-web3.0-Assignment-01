var nam_person = 'Eric';
var message = '"would you like to learn some python today?" ';
var message_to_show = "Hello ".concat(nam_person, ", ").concat(message, "  ");
var str = ' ';
var titleCase = function (str) {
    var string = str
        .toLowerCase()
        .split(" ")
        .map(function (word) {
        return word[0]
            .toUpperCase() + word.substr(1, word.length);
    })
        .join(" ");
    return string;
};
console.log(titleCase('"would you like to learn some python today?"'));
console.log('General message : ----> ', message_to_show);
console.log('LOwerCase method : ----> ', message_to_show.toLowerCase());
console.log('UpperCase method : ----> ', message_to_show.toUpperCase());
console.log('TitleCase Method : ----> ', titleCase("hello eric, would you like to learn some python today?"));
