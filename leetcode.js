function start() {
	const map = new Map();
	const nums = [2, 7, 11, 15];
	const target = 9;
	// dont use foreach as it will not return value
	for (let index = 0; index < nums.length; index++) {
		// 7 9 2
		//7
		const compliment = target - nums[index];
		if (map.has(compliment)) {
			return [map.get(compliment), index];
		}
		map.set(nums[index], index);
	}
}

const data = start();
console.log(data);
