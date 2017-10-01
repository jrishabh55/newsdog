const crypto = require("crypto-js");
const crypto1 = require("crypto");
const request = require("request");

let helpers = {
	exists: (val) => !(val === null || val === undefined || (typeof val === "string" && val.trim() === "") || (typeof val !== "number" && val.length < 1)),
	api_error: (error, code = 401, data = null) => {
		return {status: "error", error: error, code: code, data: data};
	},
	api_response: (data = null, code = 200) => {
		return {status: "ok", code: code, data: data};
	},
	encrypt: (password, text) => {
		password = crypto1.createHash("sha256").update(password).digest("hex");
		if(typeof text !== "string") {
			text = JSON.stringify(text);
		}
		return crypto.AES.encrypt(text, password).toString();
	},

	decrypt: (password, text) => {
		password = crypto1.createHash("sha256").update(password).digest("hex");
		return crypto.AES.decrypt(text, password).toString(crypto.enc.Utf8);
	},

	notification: (title, contents, url = null, included_segments = null) => {
		return new Promise((resolve, reject) => {
			let message = {};
			message.headings = {en: title};
			message.contents = { en: contents };
			if (helpers.exists(url)) {
				message.url = url;
			}
			message.app_id = process.env.onesignalAppId;

			if(included_segments === undefined || included_segments === null) {
				message.included_segments =  ["All"];
			} else {
				message.included_segments =  included_segments;
			}
			const options = {
				method: "POST",
				uri: "https://onesignal.com/api/v1/notifications",
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Authorization": `Basic ${process.env.onesignal}`
				},
				json: true,
				body: message
			};
			request(options, (err, response) => {
				if (err) {
					return reject(err);
				} else {
					return resolve(response.body);
				}
			});
		});
	},
	excerpt: (value, length) => {
		if (!value || !length) {
			return value;
		}
		if (value.length > length) {
			return value.substr(0, length) + "...";
		}
		return value;
	}
};

module.exports = helpers;
