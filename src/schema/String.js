import BaseScheme from "./Base";

class StringScheme extends BaseScheme {
	constructor(){
		super();

		this.rules.push((value) => typeof value !== 'object');
	}

	required(){
		this.addRule((value) => value != null && value !== '');

		return this;
	}

	minLength(length){
		this.addRule((value) => value.length > length);

		return this;
	}
}

export default StringScheme;