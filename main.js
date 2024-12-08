import Validator from "./src/Validator";
const v = new Validator();
const schema = v.string();

console.log(schema.isValid("Hi"));