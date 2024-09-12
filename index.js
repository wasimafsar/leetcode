function start() {
	// see function signatures more than enough intellisense as you type
	// remeber new Map(), new Set(), new WeakMap, new WeakSet . weak are for objects
	const map = new Map();
	map.set("name", "wasim");
	map.set("second", "afsar");

	// map.forEach((value, key) => {
	// 	alert(value);
	// 	alert(key);
	// });

	//alert(map.has("nae"));

	const set = new Set();
	set.add("a");
	set.add("b");
	set.add("c");
	// set.forEach((value) => {
	// 	alert(value);
	// });
	//console.log(set.entries().next().value);

	const weakMap = new WeakMap();
	const obj = { id: 2 };
	weakMap.set({ id: 1 }, "hi");
	weakMap.set(obj, "bye");
	//alert(weakMap.has(obj));

	const weakSet = new WeakSet();
	weakSet.add(obj);
	//alert(weakSet.has(obj));

	// object destructuring name of object key must match , remaining object properties can be put in rest object
	const { name, secondName, ...rest } = {
		name: "wasim",
		secondName: "Afsar",
		test: "hello",
		next: "bye",
	};
	console.log(name, secondName, rest);

	// Array destructing you can use rest here as well

	const [firstname, endName, ...temp] = ["Wasim", "Afsar", 0, 1, 2];
	console.log(firstname, endName, temp);

	// object iteration , kets , vales,
	const newObj = {
		firstName: "Wasim",
		secondName: "Afsar",
	};
	console.log(Object.keys(newObj));
	console.log(Object.values(newObj));
	Object.entries(newObj).forEach((value) => {
		console.log(value);
	});
	Object.keys(newObj).forEach((value) => {
		console.log(newObj[value]);
	});

	// array methods , see function definition via intellisense , very easy
	let fruits = ["Apple", "Orange", "banana"];
	const newFruits = fruits.map((fruit) => {
		return fruit + "hi";
	});
	//newFruits.forEach((fruit) => console.log(fruit));
	//fruits.push(12);
	//console.log(fruits);
	//const finalFruit = fruits.join("tip");
	//console.log(finalFruit);
	const finalFruits = fruits.concat("test");
	// console.log(fruits);
	// console.log(finalFruits);

	fruits
		.filter((fruit) => fruit !== "Apple")
		.forEach((fruit) => console.log(fruit));
	console.log(fruits.some((fruit) => fruit !== "ola"));
	console.log(fruits.every((fruit) => fruit !== "ola"));

	console.log(fruits.fill("0"));
	const tmpFruits = fruits.concat(
		[12, 3],
		[1, 3, [6, 7]],
		[3, 4, 5, [6, [7, 8]]]
	);
	console.log(tmpFruits.flat(Infinity));
	console.log(tmpFruits.flatMap((value) => value * 2));
	console.log(tmpFruits.includes(12));
	console.log(tmpFruits.find((value) => value == 12));

	//fruits.flatMap()
}

start();
