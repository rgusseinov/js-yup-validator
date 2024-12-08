import { isArray, isRequired } from "../rules/rules";
import BaseScheme from "./Base";

class ArrayScheme extends BaseScheme {
	constructor(...args){
		super(...args);

		this.rules.push((value) => isArray(value) || value === null);
	}

	required(){
		this.addRule((value) => isRequired(value));

		return this;
	}

	sizeof(size){
		this.addRule((value) => isRequired(value) && value.length === size);

		return this;
	}
}

export default ArrayScheme;