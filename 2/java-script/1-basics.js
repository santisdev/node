var name = 'Max';

console.log(name);

var age = 20;

console.log(age);

var hasHobbies = true;

console.log(hasHobbies);

function summarizeUser(userName, userAge, userHasHobbies) {
    return (
        'Name is ' + userName +
        ', age is ' + userAge +
        ', and the user has hobbies ' + userHasHobbies
    );
}

console.log(summarizeUser(name, age, hasHobbies));