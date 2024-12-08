import ArrayScheme from "./schema/Array";
import NumberScheme from "./schema/Number";
import ShapeScheme from "./schema/Shape";
import StringScheme from "./schema/String";

class Validator {
	customValidators = {}

	constructor(){
		this.customValidators = {
			string: {}, number: {}, array: {}, object: {}
		}
	}

	addValidator(type, name, fn){
		if (!Object.prototype.hasOwnProperty.call(this.customValidators, type)) {
      throw new Error(`Method ${type} not exist`);
    }

		if (typeof fn !== "function") {
			throw new Error(`${name} must be a function.`);
		}

		if (this.customValidators[type][name]) {
			throw new Error(`Validator ${name} already exists for ${type}.`);
		}

		this.customValidators[type][name] = fn;
	}

	string(){
		return new StringScheme(this.customValidators.string);
	}

	number(){
		return new NumberScheme(this.customValidators.number);
	}

	array(){
		return new ArrayScheme(this.customValidators.array);
	}

	object(){
		return new ShapeScheme(this.customValidators.object);
	}
};

export default Validator;