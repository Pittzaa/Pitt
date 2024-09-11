const bcrypt = require('bcryptjs');

const password = 'remoteconnectschool@gmail.com';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, hash) {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Hashed Password:', hash);
});
