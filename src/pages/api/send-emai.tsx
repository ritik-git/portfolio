// pages/api/send-email.ts

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      // Set up Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail', // You can use other email services like SMTP or SendGrid
        auth: {
          user: 'your-email@gmail.com', // Replace with your email
          pass: 'your-app-password', // Use App Passwords for security
        },
      });

      // Send email
      const mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // Replace with your email
        subject: 'Contact Us - Portfolio Message',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      await transporter.sendMail(mailOptions);

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
