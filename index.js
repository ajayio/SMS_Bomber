const express = require("express");
const cron = require("node-cron");
const fs = require("fs");
let nodemailer = require("nodemailer");

const Nexmo = require("nexmo");

const nexmo = new Nexmo({
  apiKey: "YOUR API KEY",  
  apiSecret: "API SECRET KEY"
});

const from = "Nexmo";
const to = "YOUR NUMBER";
const text = "Hi..This is Ajay";

app = express();
var i=0;
console.log("Message Sent");
cron.schedule("* * * * * *", function() {
  nexmo.message.sendSms(from, to, text);
  console.log("SMS SENT "+i+1);
  i+=1;
});

// cron.schedule("* * 21 * *", function() {
//     console.log("---------------------");
//     console.log("Running Cron Job");
//     fs.unlink("./error.log", err => {
//       if (err) throw err;
//       console.log("Error file succesfully deleted");
//     });
//   });

// create mail transporter
// let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "mailto",
//       pass: "pwd"
//     }
//   });

//   // sending emails at periodic intervals
//   cron.schedule("20 * * * Monday", function(){
//     console.log("---------------------");
//     console.log("Running Cron Job");
//     let mailOptions = {
//       from: "from mail",
//       to: "tomail",
//       subject: `Crone Job ;)`,
//       text: `Hi there, this email was automatically sent by ajay`
//     };
//     transporter.sendMail(mailOptions, function(error, info) {
//       if (error) {
//         throw error;
//       } else {
//         console.log("Email successfully sent!");
//       }
//     });
//   });

app.listen("5002", () => {
  console.log("Server start");
});
