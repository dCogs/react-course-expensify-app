console.log('destructuring');

// const person = {
//     name: 'Dan',
//     age: 59,
//     location: {
//         city: 'Shepherdstown',
//         temp: 45
//     }
// }

// console.log(`${person.name} is ${person.age}`);

// //same as
// const {name, age} = person;
// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;
// console.log(`city is ${city} and temp is ${temperature}`);

// //can set up default values
// const {name='anonymous'} = person;

// const book = {
//     title: 'Underworld',
//     author: 'Don Delillo',
//     publisher: {
//         name: 'those guys'
//     }
// }

// const { name: publisherName = 'self-published'} = book.publisher;
// console.log(`publisher is ${publisherName}`)


// arrays
const address = ['1698 Steamboat Run Rd', 'Shepherdstown', 'WV', '25443'];
const [, city, state] = address;
console.log(`city is ${city} state is ${state}`)

const item =['Coffee (hot)','$1','$2','$3'];
const [itemName, small, medium, large] = item;
console.log(`a medium ${itemName} costs ${medium}`)