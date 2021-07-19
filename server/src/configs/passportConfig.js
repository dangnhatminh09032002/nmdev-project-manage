require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { Users } = require("../models/users.model");

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Users.findById(id, (err, user) => {
    done(null, false);
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
      Users.findOne({ id: profile.id }).then((currentUser) => {
        if (currentUser) {
          done(null, currentUser);
        } else {
          new Users({
            id: profile.id,
            displayName: profile.displayName,
            name: profile.name,
            picture: profile._json.picture,
            locale: profile._json.locale,
            provider: profile.provider,
            email: profile._json.email,
            email_verified: profile._json.email_verified,
          })
            .save()
            .then((newUser) => {
              done(null, newUser);
            });
        }
      });
    }
  )
);
