import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    username: string;
    password: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName, username, password
}) => (
    <div>
        <h1>Welcome, {firstName}!</h1>
        <p>Username : {username}</p>
        <p>Password : {password}</p>
    </div>
);
