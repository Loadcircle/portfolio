import { EmailTemplate } from '../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req:any, res:any) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  try {
    const data = await resend.emails.send({
        from: 'Jesús Milano <jesusmilano96@gmail.com>',
        to: ['jesusmilano96@gmail.com'],
        subject: 'Hello world',
        react: EmailTemplate({email, subject, message }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
