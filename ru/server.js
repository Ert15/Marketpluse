const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "llllvrgbdfv@gmail.com",         // <-- замени
      pass: "Zxcv1234p"             // <-- см. ниже
    },
  });

  const mailOptions = {
    from: email,
    to: "llllvrgbdfv@gmail.com",           // <-- твоя почта
    subject: "Новое сообщение с сайта MarketPulse",
    text: `Имя: ${name}\nEmail: ${email}\nСообщение:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Ошибка при отправке");
    }
    res.send("Сообщение успешно отправлено!");
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));
