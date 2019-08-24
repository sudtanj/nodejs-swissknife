import * as mime from 'mime-types';
import * as _ from 'lodash';
import { advancedMimeConstant } from '../constant/AdvancedMimeConstant';

export function addExtensionToFileName(fileName: string, type: string) {
	return _.join([fileName, mime.extension(type)], '.');
}

export function addPDFExtensionToFileName(fileName: string) {
	return addExtensionToFileName(fileName, advancedMimeConstant.PDF);
}
