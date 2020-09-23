const { Router } = require('express');
const nodemailer = require('nodemailer');
//const { Transform } = require('nodemailer/lib/xoauth2');
const router = Router();


router.post('/send-mail', async (req, res) => {
    const { firstname, lastname, email, phone, message } = req.body;

    contentHtml= `
        <h1>User Information</h1>
        <ul>
            <li>First name: ${firstname}</li>
            <li>Last name: ${lastname}</li>
            <li>User email: ${email}</li>
            <li>Phone: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;

    const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false, // en false lo envia sin SSL
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD 
        },
        tls:{
            rejectUnauthorized: false
        }
    });
    transporter.verify(function(error) {
        if (error) {
          console.log(error);
        } else {
          console.log("Server is ready to take our messages");
        }
      });

    const info= await transporter.sendMail({
        from: "'Neldis server' <neldis12@hotmail.com>",
        to: 'neldis.dj56@gmail.com',
        subject: 'Website contact form',
        html: contentHtml
    });

    
    console.log('Message sent',info.messageId);
    res.redirect('/');
});



module.exports = router;