var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./../db/model/user');

passport.use(new LocalStrategy({ usernameField: 'email'},
  (email, password, done) => {
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return done(null, false);
        }

        user.comparePassword(password, (error, isEqual) => {
          if (error || isEqual === false) {
            return done(null, false);
          }

          done(null, user);
        });

      })
      .catch((error) => {
        done(error);
      });
  }
));

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    if (err) {
      return done(err);
    }
    done(null, user);
  });
});

module.exports = passport;