import { isRequired } from "../rules/rules";
import BaseScheme from "./Base";

class NumberScheme extends BaseScheme {
	constructor(...args){
		super(...args);
		
		this.rules.push((value) => value == null || typeof value === 'number');
	}

	required(){
		this.addRule((value) => isRequired(value));

		return this;
	}

	positive(){
		this.addRule((value) => value === null || value > 0);

		return this;
	}

	range(x, y){
		this.addRule((value) => value >= x && value <= y);

		return this;
	}
}

export default NumberScheme;