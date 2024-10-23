import React, { useState } from 'react';
import './Preg.css';
import Navbar from './Navbar';
import Final from './Final'; // Assuming Final is another component you'll use

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    dateOfBirth: '',
    email: '',
    mobileNum: '',
    adharNum: '',
    fullAddress: '',
    state: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const [registrationType, setRegistrationType] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleRegistrationTypeChange = (e) => {
    setRegistrationType(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.fatherName) newErrors.fatherName = 'Father\'s name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.mobileNum) newErrors.mobileNum = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.mobileNum)) newErrors.mobileNum = 'Mobile number should be 10 digits';
    if (!formData.adharNum) newErrors.adharNum = 'Aadhaar number is required';
    else if (!/^\d{12}$/.test(formData.adharNum)) newErrors.adharNum = 'Aadhaar number should be 12 digits';
    if (!formData.fullAddress) newErrors.fullAddress = 'Full address is required';
    if (!formData.state) newErrors.state = 'State is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('https://formspree.io/f/xnnarvnp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ...formData, registrationType })
        });
        if (response.ok) {
          console.log('Form submitted successfully!');
          setSuccessMessage('Form submitted successfully!'); // Set success message
          setFormData({
            name: '',
            fatherName: '',
            dateOfBirth: '',
            email: '',
            mobileNum: '',
            adharNum: '',
            fullAddress: '',
            state: ''
          });
          setErrors({});
          setRegistrationType('');
        } else {
          console.error('Error submitting form:', response.status);
          setSuccessMessage(''); // Clear success message if submission fails
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSuccessMessage(''); // Clear success message if there's an error
      }
    }
  };

  return (
    <div style={{backgroundColor: "rgb(248, 239, 223)"}}>
      <Navbar/>
      <div className="form-container" style={{ padding: "20px", maxWidth: "600px", margin: "20px auto" }}>
        <h1>Registration Form</h1>
        {successMessage && <p className="success">{successMessage}</p>} {/* Display success message */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name-input"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="fatherName">Father's Name:</label>
            <input
              type="text"
              id="fatherName-input"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
            />
            {errors.fatherName && <p className="error">{errors.fatherName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth-input"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="mobileNum">Mobile Number:</label>
            <input
              type="text"
              id="mobileNum-input"
              name="mobileNum"
              value={formData.mobileNum}
              onChange={handleChange}
            />
            {errors.mobileNum && <p className="error">{errors.mobileNum}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="adharNum">Aadhaar Number:</label>
            <input
              type="text"
              id="adharNum-input"
              name="adharNum"
              value={formData.adharNum}
              onChange={handleChange}
            />
            {errors.adharNum && <p className="error">{errors.adharNum}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="fullAddress">Full Address:</label>
            <textarea
              id="fullAddress-input"
              name="fullAddress"
              value={formData.fullAddress}
              onChange={handleChange}
            />
            {errors.fullAddress && <p className="error">{errors.fullAddress}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state-input"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
            {errors.state && <p className="error">{errors.state}</p>}
          </div>

          <fieldset style={{ border: 'none', marginTop: '20px' }}>
            <legend>Registration Type:</legend>
            <div>
              <input
                type="radio"
                id="player-registration"
                name="registrationType"
                value="Player"
                checked={registrationType === 'Player'}
                onChange={handleRegistrationTypeChange}
              />
              <label htmlFor="player-registration">Player Registration</label>
            </div>
            <div style={{ marginTop: '10px' }}>
              <input
                type="radio"
                id="affiliate-registration"
                name="registrationType"
                value="Affiliate"
                checked={registrationType === 'Affiliate'}
                onChange={handleRegistrationTypeChange}
              />
              <label htmlFor="affiliate-registration">Affiliate Registration</label>
            </div>
          </fieldset>

          <div className="form-group">
            <button type="submit" className="btn45" style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <Final/>
    </div>
  );
};

export default Form;
