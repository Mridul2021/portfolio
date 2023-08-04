var nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("./"));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("*",function (req, res) {
  res.status(404).send('<h1>File not found</h1>');
});

let commentData = '';

app.post('/save-comment', (req, res) => {
  name1 = req.body.name1;
  email = req.body.email;
  phno = req.body.phno;
  message = req.body.message;
  console.log(name1, email, phno, message);
  res.send('Request sent Successfully!');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sender's-email@example.com', //enter sender's email address
      pass: 'Password'//enter the password
    }
  });
  
  var mailOptions = {
    from: email,
    to: 'receriver's-email@example.com', //enter receiver's email
    subject: 'A new person whats to connect',
    text: ` 
                Name: ${name1}
                Email: ${email}
                Phone: ${phno}
                message:${message}
    `
    
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

app.get('/get-comment', (req, res) => {
  res.send(commentData);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
