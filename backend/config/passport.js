const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {}
const passport = require('passport')
const User = require('../models/userModel')

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;

passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id)

        if (!user) {
            return done(null, false)
        }

        return done(null, user)
    })
)