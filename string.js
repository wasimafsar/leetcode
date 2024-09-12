function start() {
	let str = "Wasim Afsar";

	console.log(`${str} hi`);
	let newStr = str.replace("Wasim", "Rumaan");
	console.log(`${newStr} hi`);
	console.log(str.split("s"));
	console.log(
		str.trim(),
		str.toLowerCase(),
		str.indexOf("f"),
		str.charAt(6),
		str.concat("khan"),
		str.endsWith("Afsar"),
		str.endsWith("afsar"),
		str.slice(3, 6),
		str.padEnd(20, "s"),
		str.search("afsar"),
		str.startsWith("afsar", 6),
		str.toUpperCase()
	);

	let date = new Date();
	console.log(date.setDate(new Date(2024)));
}

start();
