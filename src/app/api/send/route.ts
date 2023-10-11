import { EmailTemplate } from '../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
        from: 'Jesús Milano <jesusmilano96@gmail.com>',
        to: ['jesusmilano96@gmail.com'],
        subject: 'Hello world',
        react: EmailTemplate({ firstName: 'John' }) as React.ReactElement,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
