///////Task 21
const person = {
  name: [ 'Farooq','Haider'],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} & ${this.name[1]} are ${this.age} years old.`);
    if (person.age === 32) {
      console.log(`Wow both has same age 32`)
    } 
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]} & ${this.name[1]} is my best friend.`);
  }
};


  


console.log(person.name);
console.log(person.age);
person.bio();
person.introduceSelf();
