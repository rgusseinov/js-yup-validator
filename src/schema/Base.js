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
		return !this.rules.some((rule) => !rule(data)); // This improves performance, especially for large data inputs.
	}

	addRule(fn){
		this.rules.push(fn);
	}

	contains(substring){
		this.addRule((value) => typeof value === 'string' && value.includes(substring));

		return this;
	}
};

export default BaseScheme;