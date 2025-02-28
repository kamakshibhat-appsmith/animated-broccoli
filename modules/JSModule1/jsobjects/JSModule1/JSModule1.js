export default {
	myVar1: [1,2,3],
	myVar2: {},
	myFun1 (limit=12) {
		//	write code here
		//	this.myVar1 = [1,2,3]
		return QueryModule1.run({limit})
	},
	async myFun2 () {
			//	use async-await or promises
			//	await storeValue('varName', 'hello world')
		return QueryModule1.run({ limit: "2" })
	
	}
}