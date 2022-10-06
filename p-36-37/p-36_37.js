var make_shirt = function (size, text) {
    console.log("Size of your shirt is ".concat(size, "  and the message printed on it \"").concat(text, "\""));
};
make_shirt(23, 'I LOve PAKISTAN');
console.log('\n\n\t*********** Below is the result of exercise 37 *********\n');
// Task 37 exercise 
var make_shirt1 = function (size1, text1) {
    if (size1 === void 0) { size1 = 'large'; }
    if (text1 === void 0) { text1 = 'I love Javescript'; }
    console.log("I'm going to make a \"  ".concat(size1, "  t-shirt"));
    console.log("It will say, \"".concat(text1, "\" \n"));
};
make_shirt1();
make_shirt1('medium');
make_shirt1('small', 'Programming is very easy');
