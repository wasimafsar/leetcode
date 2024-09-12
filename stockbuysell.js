function start() {
	const prices = [7, 1, 5, 3, 6, 4];

	let minPrice = prices[0];
	let maxPrice = 0;
	for (let i = 0; i < prices.length; i++) {
		minPrice = Math.min(minPrice, prices[i]);
		maxPrice = Math.max(maxPrice, prices[i] - minPrice);
	}

	console.log(maxPrice);
}

start();
