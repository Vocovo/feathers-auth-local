const bcrypt = require('bcryptjs');
const BCRYPT_WORK_FACTOR = 15;

console.log(`BCRYPT_WORK_FACTOR: ${BCRYPT_WORK_FACTOR}`);

module.exports = function hasher (password) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(BCRYPT_WORK_FACTOR, function (error, salt) {
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
