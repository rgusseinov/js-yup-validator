import ArrayScheme from "./schema/Array";
import NumberScheme from "./schema/Number";
import ShapeScheme from "./schema/Shape";
import StringScheme from "./schema/String";

class Validator {

	string(){
		return new StringScheme();
	}

	number(){
		return new NumberScheme();
	}

	array(){
		return new ArrayScheme();
	}

	object(){
		return new ShapeScheme();
	}
};

export default Validator;