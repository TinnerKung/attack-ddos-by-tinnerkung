var req = require('request');
var randomEmail = require('random-email');
var randomstring = require("randomstring");
var Choices = require('prompt-choices');

const phones = Math.floor(Math.random() * 9000000000) + 1000000000;
const passwords = Math.floor(Math.random() * 900000000000) + 100000000000;
const emails = randomEmail({ domain: 'mail.go.th' }); 
// const emailb = new Choices(['@gmail.com','@hotmail.com','@outlook.com','@yahoo.com','@fastmail.fm','@mail.go.th']);
// const emaila = (emails + '' ,emailb);
const forms = { email: emails, password: passwords, repassword: passwords, nickname: randomstring.generate(7) , phone: phones };


req.post({
   url: 'https://linkurl.com/index.php',
   form: forms,
   timeout: 100,
   headers: { 
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36',
      'Content-Type' : 'application/x-www-form-urlencoded' 
   },
   method: 'POST'
  },

  function (e, r, body, headers) {
      console.log(body);
      console.log(forms);
  },);
