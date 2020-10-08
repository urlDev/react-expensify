// const person = {
//   name: "Can",
//   age: 34,
//   location: {
//     city: "Helsinki",
//     temp: 10,
//   },
// };

// const { name = "John", age } = person;

// const { city, temp: temperature } = person.location;

// console.log(`Hello ${name}, are you ${age}?`);
// console.log(`${city} is ${temperature} degrees`);

const address = ["1299 S Juniper Street", "Philadelphia", "Penn", "34770"];

const [street, city, state] = address;

console.log(`You are in ${state}`);
