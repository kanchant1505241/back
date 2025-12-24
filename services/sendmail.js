import nodemailer from 'nodemailer'

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  service:'gmail',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "magarmamata563@gmail.com",
    pass: "ghtgdaiwimcmapge",
  },
});

// Wrap in an async IIFE so we can use await.
 export const sendMail= async ( otp,email) => {
  const info = await transporter.sendMail({
    from: '"from me"Maddison Foo Koch" <maddison53@ethereal.email>',
    to:email,
    // to: "indubudhathoki25@gmail.com, raiuddhab69@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?", // plain‑text body
    html: `'<b>your otp is : ${otp} ?</b>'`, // HTML body
  });

  console.log("Message sent:", info.messageId);
};