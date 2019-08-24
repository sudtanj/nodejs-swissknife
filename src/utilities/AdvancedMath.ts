export function sumFunction(values:number[]){
	let result=0;
	for(let i in values) {
		result += values[i];
	}
	return result;
}
