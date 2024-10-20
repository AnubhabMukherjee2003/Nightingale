"use server"
import nodemailer from 'nodemailer';
export const handleIt = async (e) => {
    
    console.log(e.name)
    
    const name = e.name;
    const email = e.email;
    const phone = e.phone;
    const message = e.message;
    const preferredMethod = e['Preferred-method'];
    
    
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or another email provider
      auth: {
        user: process.env.NEXT_PUBLIC_SENDER_EMAIL, // email address
        pass: process.env.NEXT_PUBLIC_SENDER_EMAIL_PASS, // password
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_SENDER_EMAIL,
      to: process.env.NEXT_PUBLIC_RECIEVER_EMAIL , // Company's email address
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\nPreferred Method: ${preferredMethod}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return ("success")
    } catch (error) {
      return ('error', error);
    }
  }
