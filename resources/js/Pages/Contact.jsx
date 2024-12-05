import React, { useState } from 'react';
import { Page, Form, FormLayout, TextField, Button, Banner } from '@shopify/polaris';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !email || !message) {
            setError('All fields are required.');
            setSuccess(false);
            setTimeout(() => setError(null), 5000); 
        }

        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document
                        .querySelector('meta[name="csrf-token"]')
                        .getAttribute('content'),
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (!response.ok) throw new Error('Failed to send message.');

            setSuccess(true);
            setError(null);
            setName('');
            setEmail('');
            setMessage('');
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            setError(err.message);
            setSuccess(false);
            setTimeout(() => setError(null), 5000); 
        }
    };

    return (
        <Page title="Contact Us">
            {error && <Banner status="critical">{error}</Banner>}
            {success && <Banner status="success">Your message has been sent successfully!</Banner>}
            <Form onSubmit={handleSubmit}>
                <FormLayout>
                    <TextField label="Name" value={name} onChange={setName} />
                    <TextField label="Email" type="email" value={email} onChange={setEmail} />
                    <TextField label="Message" multiline value={message} onChange={setMessage} />
                    <Button primary submit>
                        Send
                    </Button>
                </FormLayout>
            </Form>
        </Page>
        
    );
};

export default Contact;

