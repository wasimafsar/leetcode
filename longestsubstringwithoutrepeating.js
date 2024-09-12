function start() {
	const str = "abcabcbb";

	let left = 0;
	let right = 0;
	let longestStr = 0;
	const set = new Set();
	while (right < str.length) {
		let letter = str[right];
		if (!set.has(letter)) {
			set.add(letter);
			longestStr = Math.max(longestStr, set.size);
		} else {
			set.delete(letter);
			left++;
		}
		right++;
	}
	console.log(longestStr);
}

start();

// start both index

// keep moving right , keep adding left to set

// if letter is there in set , delete that letter , increment left

// longest str at any time will be max of itself and set size
