import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/contact/test", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend działa poprawnie",
    time: new Date().toISOString(),
  });
});

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const mailOptions = {
    from: `"Formularz WWW" <${process.env.EMAIL_USER}>`,
    to: "d.uszynski@uszynskiconsulting.pl",
    replyTo: email,
    subject: `Nowa wiadomość: ${firstName} ${lastName}`,
    text: `Imię ${firstName}\nNazwisko: ${lastName}\nEmail: ${email}\nTelefon: ${phone}\nWiadomość: ${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
    <h2 style="color: #2c4575; border-bottom: 2px solid #2c4575; padding-bottom: 10px;">
      Nowe zgłoszenie z formularza
    </h2>
    <p><strong>Imię i Nazwisko:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Telefon:</strong> ${phone}</p>
    
    <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; margin-top: 20px; 
                word-break: break-word; overflow-wrap: break-word; white-space: pre-wrap;">
      <strong>Wiadomość:</strong><br/>
      ${message}
    </div>
    
    <footer style="margin-top: 20px; font-size: 0.8rem; color: #777;">
      Wysłano z formularza kontaktowego strony uszynskiconsulting.pl
    </footer>
  </div>
    `,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Błąd wysyłki:", error);
      return res.status(500).json({ status: "error", message: error.message });
    }
    res.status(200).json({ status: "success", message: "Wiadomość wysłana!" });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server działa na porcie ${PORT}`));
