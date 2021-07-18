require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User } = require("../models/user.model");

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

passport.serializeUser((user, done) => {
  done(null, user.googleId);
});

passport.deserializeUser((googleId, done) => {
  User.findById(googleId, (err, user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:4000/auth/google/success",
    },
    function async(req, accessToken, refreshToken, profile, done) {
      console.log(req);
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          done(null, currentUser);
        } else {
          new User({
            googleId: profile.id,
            displayName: profile.displayName,
            name: profile.name,
            picture: profile._json.picture,
            locale: profile._json.locale,
            provider: profile.provider,
          })
            .save()
            .then((newUser) => {
              done(null, currentUser);
            });
        }
      });
    }
  )
);
