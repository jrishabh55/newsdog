const Categories = require("../../../server/models/category");

let x = 1;
function call() {
	while (x <= 20) {
		let n = new Categories({
			name: `Category ${x}`,
			meta: "{}",
		});
		n.save()
			.then(() => {
				console.log(`Category ${x} saved`);
				x++;
			}).catch(error => console.log(error));
	}
}

call();
