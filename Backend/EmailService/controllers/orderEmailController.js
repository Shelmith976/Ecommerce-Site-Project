const nodemailer = require( 'nodemailer' );
require('dotenv').config()
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

        let message = {
            from:' "Fast Services" <process.env.EMAIL_USERNAME> ',
            to:'muthonirachael50@gmail.com',
            subject: "Always a pleasure to serve you as fast as possible!",
            text: "Thankyou for your interest in our services.", 
            
        }

        transporter.sendMail( message, ( error, info ) =>
        {
            if ( error )
                console.log( error )
            res.send(info)
        });

    } catch (error) {
        console.log(error)
    }
}
