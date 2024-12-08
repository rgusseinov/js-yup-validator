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
		const keys = Object.keys(this.objectData);

		return (
			keys.every((key) => data.hasOwnProperty(key) && this.objectData[key].isValid(data[key])) &&
			Object.keys(data).length === keys.length
		);
	}
}

export default ShapeScheme;