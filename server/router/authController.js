const router = require('express').Router();
const passport = require('../service/passport');

const User = require('../db/model/user');

router.post('/sign-in', passport.authenticate('local'), (req, res, next) => {
  res.cookie('user', JSON.stringify(req.user));
  res.sendStatus(200);
});

router.post('/sign-up', (req, res, next) => {
  const { email, password, firstName, lastName, role, location, msisdn } = req.body;
  const user = new User({ email, password, firstName, lastName, role, location, msisdn });

  user.save()
    .then((savedUser) => {
      if (savedUser) {
        req.login(savedUser, (error) => {
          if (error) {
            return next(error);
          }
        });

        res.cookie('user', JSON.stringify(req.user));
        res.status(201).send(req.user);
      }
    })
    .catch((error) => {
      console.log('error ', error);
      res.status(500).send({ error });
    })

});

router.post('/sign-out', (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.clearCookie('sessionID');
  res.clearCookie('user');
  res.sendStatus(200);
});

module.exports = router;
