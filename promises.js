function start() {
	const promise = new Promise((resolve, reject) => {
		resolve(100);
		reject("failed");
	});

	promise
		.then(
			(value) => {
				alert(value);
				return value;
			},
			(failed) => {
				alert(failed);
			}
		)
		.then((value) => {
			console.log(value * 2);
			return value * 2;
		})
		.then((value) => console.log(value * 2))
		.catch((err) => alert(err));

	const ele = document.createElement("p");
	document.body.appendChild(ele);
	document.body.style.backgroundColor = "red";
}

start();
