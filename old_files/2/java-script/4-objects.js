const person = {
  name: "Max",
  age: 29,
  greet: () => {
    console.log("Hi, I am " + this.name); //this is undefined here, refers to the global scope and not the object
  },
};

console.log(person);
person.greet();

//With object
const person2 = {
  name: "Max",
  age: 29,
  greet: (obj) => {
    console.log("Hi, I am " + obj.name);
  },
};

console.log(person2);
person2.greet(person2);

//With old function
const person3 = {
  name: "Max",
  age: 29,
  greet: function () {
    console.log("Hi, I am " + this.name);
  },
};

console.log(person3);
person2.greet(person3);
