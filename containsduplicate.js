function start(nums) {
	const set = new Set(nums);
	return set.size !== nums.length;
}

const nums = [1, 2, 1, 3, 4];
console.log(start(nums));
