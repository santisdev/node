const hobbies = ["Sports", "Cooking", 1];

for (let hobby of hobbies) {
  console.log(hobby);
}

console.log(hobbies.map((hobby) => "Hobby: " + hobby));
