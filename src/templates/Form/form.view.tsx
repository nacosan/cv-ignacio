import React, { useState } from 'react';
import { FormContainer, FormField, FormLabel, FormInput, FormTextarea, FormButton, Layout } from './form.styles';

export const ContactFormTemplate: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Layout>
        <FormContainer onSubmit={handleSubmit}>
            <FormField>
                <FormLabel htmlFor="name">Nombre y Apellidos</FormLabel>
                <FormInput type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </FormField>
            <FormField>
                <FormLabel htmlFor="email">Correo</FormLabel>
                <FormInput type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </FormField>
            <FormField>
                <FormLabel htmlFor="subject">Asunto</FormLabel>
                <FormInput type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </FormField>
            <FormField>
                <FormLabel htmlFor="message">Mensaje</FormLabel>
                <FormTextarea id="message" name="message" value={formData.message} onChange={handleChange} required />
            </FormField>
            <FormButton type="submit">Enviar</FormButton>
        </FormContainer>
        </Layout>
    );
};

