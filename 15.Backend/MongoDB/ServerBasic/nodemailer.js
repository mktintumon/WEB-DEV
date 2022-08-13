const nodemailer = require("nodemailer");
const secrets = require('../secrets')

async function mailSender() {

    // input through which mechanism send your email
    //  -> port, facilitator (technical details) 
    let transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            user: secrets.APP_EMAIL,
            pass: secrets.APP_PASS
        }
    });

    let token = "pd";
    // send mail with defined transporter object
    let info = await transporter.sendMail({
        from: '"Mktintumon👻" <mktintumon@gmail.com>', // sender address
        to: "mktintumon2@gmail.com", // list of receivers
        subject: "Hello ✔ My first testing ", // Subject line
        html: `<b>Mail sent from nodemailer -> Testing phase with nodemailer -> ${token}</b>`,
    });
}

mailSender()
    .then(function () {
        console.log("mail send successfully")
    })
    .catch(console.error);