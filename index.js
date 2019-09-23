const express = require("express");
const cron = require("node-cron");
const fs = require("fs");
let nodemailer = require("nodemailer");

const Nexmo = require("nexmo");

const nexmo = new Nexmo({
  apiKey: "fba994e6",  
  apiSecret: "CpNWQSHQs5AwiHV1"
});

const from = "Nexmo";
const to = "918428223383";
const text = "Hi..This is Ajay";

app = express();
var i=0;
console.log("Message Sent");
cron.schedule("* * * * * *", function() {
  nexmo.message.sendSms(from, to, text);
  console.log(i+1);
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
//       user: "ajay.krishnan@augustahitech.com",
//       pass: "ajay@1613002"
//     }
//   });

//   // sending emails at periodic intervals
//   cron.schedule("20 * * * Monday", function(){
//     console.log("---------------------");
//     console.log("Running Cron Job");
//     let mailOptions = {
//       from: "ajay.krishnan@augustahitech.com",
//       to: "hari25cena@gmail.com",
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
