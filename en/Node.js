const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your_email@gmail.com",
      pass: "your_app_password",
    },
  });

  const mailOptions = {
    from: email,
    to: "marketpulse@gmail.com",
    subject: "Новое сообщение с сайта MarketPulse",
    text: `Имя: ${name}\nEmail: ${email}\nСообщение:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return res.send("Ошибка: " + error);
    res.send("Сообщение отправлено!");
  });
});

app.listen(3000, () => console.log("Сервер запущен на порту 3000"));

