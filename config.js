var config = require('./config');

config.email_port =  587; //tls port. ssl port use 465
config.secure =  false; // true for 465, false for other ports
config.user = 'hraverkar@gmail.com'; // generated  user
config.pass = '*IAMBEST12345';  // generated  password
//goto https://myaccount.google.com/lesssecureapps and enable less secure apps
//if your adding any other account here.
module.exports = config;