import BaseScheme from "./Base";

class ArrayScheme extends BaseScheme {
	constructor(){
		super();

		this.rules.push((value) => Array.isArray(value) || value === null);
	}

	required(){
		this.addRule((value) => value != null);

		return this;
	}

	sizeof(size){
		this.addRule((value) => value.length === size);

		return this;
	}
}

export default ArrayScheme;