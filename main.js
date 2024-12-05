import Validator from "./src/Validator";

const v = new Validator();
const schema = v.string();

console.log(schema.contains('what').isValid('what does the fox say')); // true

// console.log(schema.contains('fox').isValid('fox say')); // false
// console.log(schema.contains('Abc').isValid('abc fox say')); // false
// console.log(schema.contains('').isValid('Hello')); // true
// console.log(schema.minLength(2).isValid("Hello"));//toBe(false);
// console.log(schema.getRules());


// console.log(schema.isValid("Hello"));//toBe(true);
// console.log(schema.isValid("Hello world!!!"));//toBe(true);
// console.log(schema.isValid(null));//toBe(false);
// console.log(schema.isValid(""));//toBe(false);
// console.log(schema.isValid(undefined));//toBe(false);

// console.log(schema.isValid(123));//toBe(true);
// console.log(schema.isValid());//toBe(true);
// console.log(schema.isValid("Almaty"));//toBe(true);

// console.log(schema.isValid(null));//toBe(false);
// console.log(schema.isValid({}));//toBe(false);
// console.log(schema.isValid([]));//toBe(false);

// console.log(schema.isValid(undefined));//toBe(true);
// console.log(schema.isValid(1 + 2));//toBe(true);
// console.log(schema.isValid(0));//toBe(true);
// console.log(schema.isValid(-10));//toBe(true);

