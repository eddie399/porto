import nodemailer from "nodemailer"

export async function  sendMail({to,name,subject,body}:{
    to:string 
    name:string 
    subject:string 
    body:string
}){
    const {SMTP_EMAIL, SMTP_PASSWORD} = process.env

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD
        },
    });
    try{
        const testResault = await transport.verify();
        console.log(testResault);
    }
    catch(error){
        console.log(error)
    }

    try{
        const sendResault = await transport.sendMail({
            from: SMTP_EMAIL, to, subject, html:body
        })
        console.log(sendResault);
    }
    catch(error){
        console.log(error)
    }
}