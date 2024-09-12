function start() {
	let data = {
		name: "wasim",
		hello: function () {
			console.log(this.name);
		},
	};
	setTimeout(() => data.hello(), 0);
}
let data2 = {
	name: "wasim afsar",
	hello: function (arg1) {
		console.log(this.name + arg1);
	},
};

function test() {
	console.log(this.hello());
}

start();
test.bind(data2)();
test.apply(data2);
test.call(data2, ["ola"]);

//cab to bind object to a function , read signature for more context
