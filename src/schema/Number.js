import BaseScheme from "./Base";

class NumberScheme extends BaseScheme {
	constructor(){
		super();

		this.rules.push((value) => typeof value === 'number');
	}

	positive(){
		this.addRule((value) => value > 0);

		return this;
	}

	range(x, y){
		this.addRule((value) => value >= x && value <= y)
	}
}

export default NumberScheme;