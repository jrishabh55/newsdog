const JwtStrategy = require("passport-jwt").Strategy;
const JwtExtract = require("passport-jwt").ExtractJwt;
const TokenStrategy = require("passport-token").Strategy;

const Admin = require("../models/admins");
const User = require("../models/users");
const config = require("./config");

module.exports = (passport) => {
	let opts = {
		jwtFromRequest: JwtExtract.fromAuthHeaderAsBearerToken(),
		secretOrKey: config.secret
	};

	passport.use(new JwtStrategy(opts, (payload, done) => {

		Admin.byId(payload._doc._id, (err, user) => {
			if (err) return done(err, false);
			else if (user) return done(null, user);
			else return done(null, false);
		});
	}));

	let options = {
		usernameHeader: "jnex-username",
		tokenHeader: "jnex-token",
	};

	passport.use(new TokenStrategy(options,
		(username, token, done) => {
			User.byUsernameAndToken(username, token, (err, user) => {
				if (err) return done(err);
				else if (user && user.isActive()) return done(null, user);
				else return done(null, false);
			});
		}
	));
};
