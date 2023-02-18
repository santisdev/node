// Adding a new value to the array
// without modifying the original

const hobbies = ["Sports", "Cooking"];

// Option 1 - Slice
const copiedArray = hobbies.slice();
console.log(copiedArray);

// Option 2 - Spread operators
const copiedArray2 = [...hobbies];
console.log(copiedArray2);

// Option 3 - Rest operators
const toArray = (...args) => {
  return args;
};
console.log(toArray(1, 2, 3, 4));
