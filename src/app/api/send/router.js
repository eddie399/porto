//import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST( req, res) {
    const { body } = await req.json;
    const { email, subject, message } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['eddiendamera1@gmail.com', email],
      subject: 'Hello world',
      react: (
        <>
            <h1>{subject}</h1>
            <p>{message}</p>
            <p>Thank you!, </p>
        </>
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
