var magicians = ['Harry Houdini', 'David Blaine', 'Teller'];
var show_magicians = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
var old_magicions = [];
//      exercise 42 
var make_great = function (arr) {
    var great_magicians = [];
    for (var i = 0; i < arr.length; i++) {
        great_magicians.push("The Great " + arr[i]);
        old_magicions.push(arr[i]);
    }
    show_magicians(great_magicians);
};
show_magicians(magicians);
make_great(magicians);
///only comment to clear answer
console.log('\n\n *************** old magitions ************** \n');
show_magicians(old_magicions);