import nodemailer from "nodemailer"

export async function sendMail({replyTo, subject, text}: {
    replyTo: string
    subject: string
    text: string
}) {
    const {SMTP_EMAIL, SMTP_PASSWORD} = process.env

    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
        throw new Error("SMTP email configuration is missing.")
    }

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD
        },
    });
    return transport.sendMail({
        from: SMTP_EMAIL,
        to: SMTP_EMAIL,
        replyTo,
        subject,
        text,
    })
}