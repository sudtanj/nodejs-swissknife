
export function getArrayOfYear(startYear:number,endYear:number):number[]{
	const result=[];
	for(let i=startYear;i<=endYear;i++){
		result.push(i);
	}
	return result;
}
