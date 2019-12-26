const express = require('express');
const app = express();
const nodemail = require('../Server/mailer');
const config = require('../Server/config');

app.get('/', (req, res) => {
    res.send('Hello Harshal Raverkar');
    let email = 'harshal.raverkar@gmail.com';
    sendEmailtoUser(email);
});
app.listen(3000);
console.log('server is started in port 3000');

function sendEmailtoUser(email) {
    try {
        let msg = '<html><p style="font-size:18px;">Dear user, <br/>Hello Harshal Raverkar How are you<br/>' +
            'Thannks for connecting with me.<br/></p>' +
            '<p style="font-size:24px;color: #555555;"><br/>Design by - Harshal Raverkar.</p></html>';
        let subject = "Invitation to join  email";
        nodemail.setUpAccount(msg, subject, config.user, email);
    }
    catch (error) {
        console.log('Problem find in sending email ! ')
    } 
}