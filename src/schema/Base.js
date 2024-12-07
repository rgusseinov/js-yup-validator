class BaseScheme {
	rules = [];

	constructor(){
		this.rules = [];
	}

	isValid(data){
		return this.rules.every(rule => rule(data));
	}

	addRule(fn){
		this.rules.push(fn);
	}

	required(){
		throw new Error("Can't be implemented");
	}

	contains(substring){
		this.addRule((value) => value.includes(substring));

		return this;
	}
};

export default BaseScheme;