// EXAMPLE 1 - Convert a Map to an Object in JavaScript

const map = new Map([
  ['name', 'Bobby'],
  ['country', 'Chile'],
]);

// ✅ Convert Map to Object
const obj = Object.fromEntries(map);
console.log(obj); // 👉️ {name: 'Bobby', country: 'Chile'}

// ✅ Convert Object to Map
const newMap = new Map(Object.entries(obj));
console.log(newMap); // 👉️ {'name' => 'Bobby', 'country' => 'Chile'}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Convert a Map to an Object using `Map.forEach()`

// const map = new Map([
//   ['name', 'Bobby'],
//   ['country', 'Chile'],
// ]);

// const obj = {};

// map.forEach((value, key) => {
//   obj[key] = value;
// });

// // 👇️ { name: 'Bobby', country: 'Chile' }
// console.log(obj);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Convert a Map to an Object using `for...of`

// const map = new Map([
//   ['name', 'Bobby'],
//   ['country', 'Chile'],
// ]);

// const obj = {};

// for (const [key, value] of map) {
//   obj[key] = value;
// }

// // 👇️ { name: 'Bobby', country: 'Chile' }
// console.log(obj);
