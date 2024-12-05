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
		this.addRule((value) => typeof value === 'string' && value.length > 0);

		return this;
	}

	contains(substring){
		this.addRule((value) => value.includes(substring));

		return this;
	}
};

export default BaseScheme;