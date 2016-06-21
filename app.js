var unsecurePasswordText = "password";
var colors = require('colors');
var bcrypt = require('bcrypt');
const saltRounds = 10;

const someOtherPlaintextPassword = 'not_bacon';

 bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(unsecurePasswordText, salt, function(err, hash) {
        console.log(hash.green);
        // Store hash in your password DB.
    });
});