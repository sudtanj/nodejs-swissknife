export function fillObjectWithArrayKey(object:{},key:any[],defaultValues){
	key.forEach(value=>{
		object[value as string]=defaultValues;
	});
	return object;
}
