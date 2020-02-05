import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Button, Form, FormControl } from 'react-bootstrap';

import Axios from 'axios';

interface ContactProps {}

const EMAIL_KEY = 'emailAddress';
const MESSAGE_KEY = 'entry.801447595';
const ACTION_URL =
    'https://docs.google.com/forms/u/1/d/e/1FAIpQLSfb3J5JA0uMqTidve2urcPt5jWiX5S6N6HCiRdMQ9X4Z8HcnA/formResponse';
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

export const Contact: React.FC<ContactProps> = props => {
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        sendMessage();
    }

    const sendMessage = () => {
        const formData = new FormData();
        formData.append(EMAIL_KEY, emailAddress);
        formData.append(MESSAGE_KEY, message);
        Axios.post(CORS_PROXY + ACTION_URL, formData).then(() => {
            setEmailAddress('');
            setMessage('');
        });
    }

    return (
        <div>
            <div
                className="cover"
                css={{
                    alignItems: 'center',
                    display: 'flex',
                    overflow: 'hidden'
                }}
            >
                <div
                    className="w-100 text-center"
                    css={{
                        zIndex: 1100
                    }}
                >
                    <div className="display-3 font-bold mt-5 text-white">Contact.</div>
                </div>
            </div>
            <section className="section--padded">
                <div className="container">
                    <p className="responsive-lead">👋 Got a question or improvement? Feel free to drop us a line.</p>
                    <form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email <span css={{
                                color: '#ff1616'
                            }}>*</span></Form.Label>
                            <FormControl
                                type="email"
                                name="email"
                                value={emailAddress}
                                onChange={(e: any) => setEmailAddress(e.target.value)}
                                placeholder={'email@example.com'}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Message <span css={{
                                color: '#ff1616'
                            }}>*</span></Form.Label>
                            <FormControl
                                as="textarea"
                                name="message"
                                value={message}
                                onChange={(e: any) => setMessage(e.target.value)}
                                placeholder={'Enter your feedback here'}
                                css={{
                                    minHeight: '150px'
                                }}
                                required
                            />
                        </Form.Group>
                        <div className="text-right">
                            <Button type="submit" variant="info">
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};
