import { isNotEmptyString, isRequired } from "../rules/rules";
import BaseScheme from "./Base";

class StringScheme extends BaseScheme {
	constructor(...args){
		super(...args);

		this.rules.push((value) => typeof value !== 'object' || value === null);
	}

	required(){
		this.addRule((value) => isRequired(value) && isNotEmptyString(value));

		return this;
	}

	minLength(length){
		this.addRule((value) => value.length > length);

		return this;
	}
}

export default StringScheme;