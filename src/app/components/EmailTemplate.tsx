import * as React from "react";

interface EmailTemplateProps {
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email, subject, message
}) => (
  <div>
    <h1>Hello, {email}!</h1>
    <p>Subject: {subject}</p>
    <p>Message: {message}</p>
  </div>
);

export default EmailTemplate;