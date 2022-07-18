const nodemailer = require( 'nodemailer' );
require('dotenv').config()
const user = require("../config/config");
exports.sendEmail = async ( req, res ) =>
{
    try {
        let transporter = nodemailer.createTransport( {
            service:"outlook",
            auth: {
                user: process.env.EMAIL_USERNAME, // generated ethereal user
                pass: process.env.EMAIL_PASSWORD, // generated ethereal password
        },
        } );

        var mailOptions = {
            from:' "Confirm your email" <process.env.EMAIL_USERNAME> ',
            to:'muthonirachael50@gmail.com',
            subject: 'Confirm your email',
            html:`<h2>Thanks for registering with us</h2>
            <h4>Kindly verify your email to continue...</h4>
            <a href="http://${req.headers.host}/user/verify-email?token=${user.emailtoken}">Confirm your email</a>`
        }

        transporter.sendMail( mailOptions, ( error, info ) =>
        {
            if ( error )
                console.log( error )
            res.send(info)
        });

    } catch (error) {
        console.log(error)
    }
}
