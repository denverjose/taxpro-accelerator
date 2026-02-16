
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';
import fs from 'fs';
import config from "@/env-config";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, name, product_name, documentUploadUrl, serviceAgreementUrl } = req.body;

    // Load and render the HTML template
    const templatePath = path.resolve(process.cwd(), 'public', 'templates', 'welcome-email-template.html');
   
    try {
      const template = fs.readFileSync(templatePath, 'utf-8');
      const htmlContent = ejs.render(template, { 
        name: name, 
        product_name: product_name,
        documentUploadUrl: documentUploadUrl, 
        serviceAgreementUrl: serviceAgreementUrl
        
      });
      
      // Configure your SMTP transport
      const transporter = nodemailer.createTransport({
        host: config.SMTP_HOST, // Your SMTP server host
        port: parseInt(config.SMTP_PORT, 465), // Your SMTP server port (usually 587 for TLS, 465 for SSL)
        secure: config.SMTP_SECURE === 'true', // Use true for SSL, false for TLS
        auth: {
          user: config.SMTP_USER, // Your SMTP server username
          pass: config.SMTP_PASS, // Your SMTP server password
        },
      });

      const imagePath = path.join(process.cwd(), 'public', 'images', 'tpx-logo.png');


      const mailOptions = {
        from: config.SMTP_USER,
        to: email,
        subject: 'Welcome to Your Accelerated Business Growth',
        html: htmlContent,
        attachments: [
            {
                filename: 'tpx-logo.png',
                path: imagePath,
                cid: 'logo', // This CID should match the src in your HTML
            },
        ],
      };

      
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
