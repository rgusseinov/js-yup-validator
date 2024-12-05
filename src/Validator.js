import NumberScheme from "./schema/Number";
import StringScheme from "./schema/String";

class Validator {

	string(){
		return new StringScheme();
	}

	number(){
		return new NumberScheme();
	}
};

export default Validator;