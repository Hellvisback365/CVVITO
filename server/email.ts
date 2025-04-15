
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: data.email,
    subject: `Nuovo messaggio da ${data.name}: ${data.subject}`,
    text: `
Nome: ${data.name}
Email: ${data.email}
Oggetto: ${data.subject}

Messaggio:
${data.message}
    `,
    html: `
<h3>Nuovo messaggio dal form di contatto</h3>
<p><strong>Nome:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Oggetto:</strong> ${data.subject}</p>
<p><strong>Messaggio:</strong></p>
<p>${data.message}</p>
    `
  };

  return transporter.sendMail(mailOptions);
}
