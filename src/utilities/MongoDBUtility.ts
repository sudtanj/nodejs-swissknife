import { createSchema, typedModel } from 'ts-mongoose';

export async function saveObjectToMongoDB(constant: Object, inputData: Object) {
	let newDocument = null;
	newDocument = getMongooseModel(constant);
	const newDocumentInstance = new newDocument(inputData);
	return newDocumentInstance.save();
}

export function getMongooseModel(constant) {
	const schema = createSchema(constant.schema);
	try {
		return typedModel(constant.collectionName);
	} catch (e) {
		return typedModel(constant.collectionName, schema);
	}
}
