///////Task 21
var person = {
    name: ['Farooq', 'Haider'],
    age: 32,
    bio: function () {
        console.log("".concat(this.name[0], " & ").concat(this.name[1], " are ").concat(this.age, " years old."));
        if (person.age === 32) {
            console.log("Wow both has same age 32");
        }
    },
    introduceSelf: function () {
        console.log("Hi! I'm ".concat(this.name[0], " & ").concat(this.name[1], " is my best friend."));
    }
};
console.log(person.name);
console.log(person.age);
person.bio();
person.introduceSelf();
