var name = "Max";

console.log(name);

var age = 20;

console.log(age);

var hasHobbies = true;

console.log(hasHobbies);

const summarizeUser = (userName, userAge, userHasHobbies) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    ", and the user has hobbies " +
    userHasHobbies
  );
};

const add = (a, b) => a + b;

const addOne = (a) => a + 1;

const addRandom = () => 1 + 2;

console.log(summarizeUser(name, age, hasHobbies));
