const { onDocumentCreated } = require("firebase-functions/firestore");
const nodemailer = require("nodemailer");

// Your Email & App Password
const GMAIL_USER = "infoyashonand@gmail.com";  
const GMAIL_PASS = "wrjh avbp yrje ovkq";      

// Notification receiver email
const RECEIVER_EMAIL = "gaikwadisha48@gmail.com";  

// Email Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
});

// Cloud Function (v2 syntax)
exports.sendNotificationEmail = onDocumentCreated(
  "{formType}/{docId}",
  async (event) => {
    const data = event.data.data();
    const formType = event.params.formType;

    const mailOptions = {
      from: GMAIL_USER,
      to: RECEIVER_EMAIL,
      subject: `New ${formType} Form Submitted`,
      text: `
A new ${formType} form was submitted:

Name: ${data.name || "N/A"}
Email: ${data.email || "N/A"}
Phone: ${data.phone || "N/A"}
Message: ${data.message || "N/A"}
Resume: ${data.resume || "N/A"}

Full Data:
${JSON.stringify(data, null, 2)}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }
);
