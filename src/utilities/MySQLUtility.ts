import * as _ from 'lodash';
import { Model } from "objection";


//common function
export function convertModelToPlainObject<T extends Model>(model: T) {
	const deletedKey = ['retry', '_id', 'id'];
	const convertedModel = _.omit(model, deletedKey);
	convertedModel['updatedAt'] = new Date();
	return convertedModel;
}
