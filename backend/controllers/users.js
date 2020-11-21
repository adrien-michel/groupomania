const models = require('../models');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = models.User.create({
      email: req.body.email,
      username : req.body.username,
      bio : req.body.bio,
      password: hash
    })
    .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
    .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));

};


exports.login = (req, res, next) => {
 const user = models.User.findOne({ email: req.body.email })
 .then(user => {
  if (!user) {
    return res.status(401).json({ error: 'Utilisateur non trouvé !' });
  }
  bcrypt.compare(req.body.password, user.password)
  .then(valid => {
    if (!valid) {
      return res.status(401).json({ error: 'Mot de passe incorrect !' });
    }
    res.status(200).json({
      userId: user._id,
      token: jwt.sign(
        { userId: user._id },
        'RANDOM_TOKEN_SECRET'

        )
    });
  })
  .catch(error => res.status(500).json({ error }));
})
 .catch(error => res.status(500).json({ error }));
};