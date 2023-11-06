// This is a single line of code

/* 
Multi-line comment
console.log(100);

console.log('Hello world!');

console.log(20, 'Hello', true);


const x = 100;

console.log(x + 10);

console.error('Alert!');

console.warn('Warning!')

console.table({name: 'Onelio', email: 'ojvwebdesign@gmail.com'});

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd('simple');

const styles = 'padding: 10px; background-color: white; color: green';

console.log('%cHello world!', styles);
*/

// Ways to declare a variable
// var, let, const

// let firstName = 'Onelio';
// let lastName = 'Viera';

// console.log(`My first name is ${firstName} and my last name is ${lastName}`);

// let age = 61;

// console.log(age)


// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = Pascal Case
// firstname = lowercase

// Re-assigning variables
// age = 62;

// console.log(age)

// let score;

// score = 10;

// console.log(score);

// if (true) {
//   score = score + 20;
// }

// console.log(score)

// const x = 100;


// const arr = [1, 2, 3, 4];

// arr.push(5);
// console.log(arr);

// const person = {
//   name: 'Onelio'
// }

// person.name = 'Onelio Viera';

// person.email = 'oney@email.com';
// person.id = 1;

// console.log(person);

// // Declare multiple values at once
// let a, b, c;

// const d = 10, e = 20, f = 30;

// console.log(d);

// const firstName = 'Sara';

// const output = firstName;

// console.log(output, typeof firstName);

// Values are store4d on stack
// const name = 'Onelio';
// const age = 61;

// Reference values are stored on the heap
// const person = {
//   name: 'Polly',
//   age: 56
// }

// let newName = name;
// newName = 'PollyJoann';

// let newPerson = person;
// newPerson.name = "Katie";

// console.log(name, newName);
// console.log(person, newPerson);

let amount = '100';
// amount = parseInt(amount);
// amount = +amount;
amount = Number(amount);

console.log(amount, typeof amount);