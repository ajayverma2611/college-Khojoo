const nodemailer = require('nodemailer');

// Set up the transporter with Brevo SMTP details
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',   // Brevo SMTP host
  port: 587,                      // Use port 587 for non-SSL/TLS connections
  secure: false,                  // Set to false because we are using port 587 (non-secure)
  auth: {
    user: '85a5f5001@smtp-brevo.com',  // Your SMTP login (Email)
    pass: '4sWFjk7b82X9ptxf',          // Your SMTP master password
  },
});

// Set up email data
const mailOptions = {
  from: '04sudharsan25@gmail.com', // Replace with your "from" email address
  to: 'shivasaikuncharapu@gmail.com', // Replace with recipient email address
  subject: 'Test Email', // Subject of the email
  text: 'This is a test email sent via Brevo SMTP server using Nodemailer.',
  html: '<html><body><h1>This is a test email sent via Brevo SMTP server using Nodemailer.</h1></body></html>', // Optional: HTML content
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error sending email:', error);
  }
  console.log('Email sent successfully:', info.response);
});