
import * as SibApiV3Sdk from '@getbrevo/brevo';

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
const apiKey = process.env.BREVO_API_KEY;

if (!apiKey) {
  throw new Error('BREVO_API_KEY environment variable is not set');
}

apiInstance.setApiKey(SibApiV3Sdk.AccountApiApiKeys.apiKey, apiKey);

export async function sendContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const sendSmtpEmail = {
    sender: { 
      email: data.email,
      name: data.name 
    },
    to: [{ email: process.env.RECIPIENT_EMAIL }],
    replyTo: { email: data.email, name: data.name },
    subject: `Nuovo messaggio da ${data.name}: ${data.subject}`,
    htmlContent: `
      <h3>Nuovo messaggio dal form di contatto</h3>
      <p><strong>Nome:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Oggetto:</strong> ${data.subject}</p>
      <p><strong>Messaggio:</strong></p>
      <p>${data.message}</p>
    `
  };

  try {
    await apiInstance.sendTransacEmail(sendSmtpEmail);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Errore nell\'invio dell\'email');
  }
}
