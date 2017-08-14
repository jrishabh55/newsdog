const helpers = {
	exists: (val) => !(val === null || val === undefined || val.trim() === ""),
	api_error: (error, code = 401, data = null) => {
		return {status: "error", error: error, code: code, data: data};
	},
	api_response: (data = null, code = 200) => {
		return {status: "ok", code: code, data: data};
	},
};

module.exports = helpers;
