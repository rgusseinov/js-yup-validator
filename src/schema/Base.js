class BaseScheme {
	rules = [];
	validators = {}

	constructor(validators = {}){
		this.validators = validators;
		this.rules = [];
	}

	test(fn, ...args){
		this.addRule((value) => this.validators[fn](value, ...args));

		return this;
	}

	isValid(data){
		return this.rules.every(rule => rule(data));
	}

	addRule(fn){
		this.rules.push(fn);
	}

	contains(substring){
		this.addRule((value) => value.includes(substring));

		return this;
	}
};

export default BaseScheme;