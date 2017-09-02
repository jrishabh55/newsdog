let helpers = {
	exists: (val) => !(val === null || val === undefined || (typeof val === 'string' && val.trim() === "") || (typeof val !== 'number' && val.length < 1)),
	api_error: (error, code = 401, data = null) => {
		return {status: "error", error: error, code: code, data: data};
	},
	api_response: (data = null, code = 200) => {
		return {status: "ok", code: code, data: data};
	},
};

module.exports = helpers;
