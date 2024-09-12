function start() {
	const arr = [1, 2, 3, 4];
	let finalArray = [];
	for (let i = 0; i < arr.length; i++) {
		let leftArray = arr.slice(0, i);
		if (i === 0) {
			leftArray = [1];
		}
		let rightArray = arr.slice(i + 1, arr.length);
		console.log(leftArray, rightArray);
		const leftProd = leftArray.reduce((previousValue, currentValue) => {
			return previousValue * currentValue;
		}, 1);
		console.log("leftProd", leftProd);
		const rightProd = rightArray.reduce((previousValue, currentValue) => {
			return previousValue * currentValue;
		}, 1);
		console.log("rightProd", rightProd);
		const finalresult = leftProd * rightProd;
		finalArray.push(finalresult);
	}
	console.log(finalArray);
}

start();
