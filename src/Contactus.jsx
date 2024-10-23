import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file
import Navbar from './Navbar';
import Final from './Final';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        message: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure that form data is correctly formatted
        if (!formData.name || !formData.number || !formData.message) {
            setErrorMessage('All fields are required.');
            return;
        }

        try {
            const response = await fetch('https://formspree.io/f/xnnarvnp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage('Message sent successfully!');
                setFormData({ name: '', number: '', message: '' });
            } else {
                const errorResponse = await response.json();
                setErrorMessage(`Failed to send message: ${errorResponse.error || 'Unknown error'}`);
            }
        } catch (error) {
            setErrorMessage(`An error occurred: ${error.message}`);
        }
    };

    return (
        <div style={{backgroundColor:"whitesmoke"}}>
            <Navbar/>
        <div className="container1"  >
            <button className="headingbtn">Contact Us</button>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-field">
                    <input
                        required
                        autoComplete="off"
                        type="text"
                        name="name"
                        placeholder='Name'
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                </div>
                <div className="input-field">
                    <input
                        required
                        autoComplete="off"
                        type="number"
                        name="number"
                        placeholder='Phone number'
                        id="number"
                        value={formData.number}
                        onChange={handleChange}
                    />
                  
                </div>
                <div className="input-field">
                    <textarea
                        required
                        autoComplete="off"
                        name="message"
                        id="message"
                        placeholder='message'
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                    />
                   
                </div>

                <div className="btn-container">
                    <button className="btn-3" type="submit">Send</button>
                </div>
                {successMessage && <p className="success">{successMessage}</p>}
                {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
        </div>
        <Final/>
        </div>
    );
};

export default ContactForm;
