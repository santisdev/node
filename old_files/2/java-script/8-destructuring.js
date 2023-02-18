const person = {
  name: "Max",
  age: 29,
  greet: () => {
    console.log("Hi, I am " + this.name); //this is undefined here, refers to the global scope and not the object
  },
};

const printName = (personData) => {
  console.log(personData.name);
};

// Destructuring
const printNameDestructuring = ({ name }) => {
  console.log(name);
};

const { name, age } = person;
console.log(name, age);

const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;
