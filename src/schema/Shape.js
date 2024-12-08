import BaseScheme from "./Base";

class ShapeScheme extends BaseScheme {
	objectData = {}

	constructor(...args){
		super(...args);
	}

	shape(object){
		this.objectData = object;
	}

	isValid(data){
		return (
			Object.keys(data).every((key) => this.objectData[key].isValid(data[key]))
			&& Object.keys(data).length === Object.keys(this.objectData).length
		);
	}
}

export default ShapeScheme;