const bcrypt = require('bcryptjs');


module.exports = function hasher(password) {
  return new Promise((resolve, reject) => {

    bcrypt.genSalt(15, function (error, salt) {
      if (error) {
        return reject(error);
      }

      bcrypt.hash(password, salt, function (error, hashedPassword) {
        if (error) {
          return reject(error);
        }

        resolve(hashedPassword);
      });
    });
  });
};
