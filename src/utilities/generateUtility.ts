import voca = require('voca');

export function generateEnum(values) {
	const resultObject = new Object();
	for (let i = 0; i < values.length; i++) {
		resultObject[voca.upperCase(voca.snakeCase(values[i]))] = values[i];
	}
	console.log(JSON.stringify(resultObject, null, 4));
}

export function generateMethod(methodNames, methodArg){
	const resultObject = new Object();
	for (let i = 0; i < methodNames.length; i++) {
		console.log(voca.camelCase(methodNames[i])+"("+methodArg+"){}");
	}
}
