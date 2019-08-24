import * as _ from 'lodash';
import * as math from 'mathjs';
import moment = require('moment');

export function isNullOrEmpty(value: any): boolean {
	return _.isNull(value) || _.isEmpty(value);
}

export function isNullorEmptyorUndefined(value: any): boolean {
	return isNullOrEmpty(value) || _.isUndefined(value);
}

export function isNullorUndefined(value){
	return _.isNull(value) || _.isUndefined(value);
}

export function isNullorUndefinedOrNaN(value: any) {
	return isNullorUndefined(value) || _.isNaN(value);
}

export function getAllObjectMethod(value: Object) {
	return Object.getOwnPropertyNames(Object.getPrototypeOf(value));
}

export function unCamelCase(str) {
	return (
		str
		// insert a space between lower & upper
			.replace(/([a-z])([A-Z])/g, '$1 $2')
			// space before last upper in a sequence followed by lower
			.replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
			// uppercase the first character
			.replace(/^./, function(strResult) {
				return strResult.toUpperCase();
			})
	);
}


export function isUndefinedInArray(array: [], length: number) {
	for (let j = 0; j < length; j++) {
		if (!array[j]) {
			return true;
		}
	}
	return false;
}

export function isColumnPassedCriteria(array: any[][], columnNumber: number, criteriaFunction: any) {
	const transposeResult=math.transpose(array);
	const columnData=transposeResult[columnNumber];
	for (let i = 0; i < columnData.length; i++) {
		if (!criteriaFunction(columnData[i])) {
			return false;
		}
	}
	return true;
}

export function isColumnDataTypeSame(array1: any[][], array2: any[][], columnNumber: number) {
	if (_.isEqual(array1.length, array2.length)) {
		for (let i = 0; i < array1.length; i++) {
			if (!_.isEqual(typeof array1[i][columnNumber], typeof array2[i][columnNumber])) {
				return false;
			}
		}
	}
	return true;
}

export function isColumnDataTypeEqualTo(array: any[][], dataType: string, columnNumber: number) {
	for (let i = 0; i < array.length; i++) {
		if (!_.isEqual(typeof array[i][columnNumber], dataType)) {
			return false;
		}
	}
	return true;
}

export function isString(x) {
	return Object.prototype.toString.call(x) === '[object String]';
}

export function isYear(x:number){
	return _.isEqual(Math.trunc(x/10000),0);
}

export function isDate(x:string,format:string){
	return moment(x,format).isValid();
}

export function isDateNonISOFormat(x:string){
	return isDate(x,"DD/MM/YYYY");
}

export function isNumber(x){
	return !isNaN(x);
}
