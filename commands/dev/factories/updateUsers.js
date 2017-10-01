const users = require("../../../server/models/users");
const helpers = require("../../../server/helpers");

users.find({}, (err, data) => {
	if (err) {
		console.log(err);
		process.abort();
	}else {
		const text = JSON.stringify({
			"bank_name": "place holder",
			"username": "Place Holder",
			"number": "place holder",
			"type": "place holder",
			"ifsc": "place holder"
		});
		try{
			for(let i=0; i < data.length; i++) {
				const password = data[i].email;
				data[i].ref = helpers.encrypt(password, text);
				data[i].save().then(() => {
					console.log(i, "Updated");
					if(i === data.length -1 ) {
						console.log("done");
						process.abort();
					}
				});
			}
		}catch (e) {
			console.log(e);
			process.abort();
		}
	}
});
