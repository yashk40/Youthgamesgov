import React, { useState } from 'react';
import './Updoc.css'; // Import the CSS file for styling
import { storage, firestore } from './firebase'; // Import Firebase storage and firestore
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Import getDownloadURL
import { collection, addDoc } from 'firebase/firestore';
import Navbar from './Navbar';
import Final from './Final';

const RegistrationForm = () => {
  const [isPlayer, setIsPlayer] = useState(true);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    registrationNo: '',
    name: '',
    fathersName: '',
    state: '',
    event: '',
    award: '',
    ageCategory: '',
  });
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleRegistrationChange = (event) => {
    const { value } = event.target;
    setIsPlayer(value === 'player');
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if the password is correct
    if (password !== 'GlIsEHPXArxz') {
      setPasswordError('Incorrect password. Please try again.');
      return;
    }

    // Reset password error if password is correct
    setPasswordError('');

    // Initialize imageUrl as empty string
    let imageUrl = '';

    // Upload image to Firebase Storage if an image is selected
    if (image) {
      const imageRef = ref(storage, `images/${image.name + v4()}`);
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef); // Get the download URL
    }

    // Save form data to Firestore
    await addDoc(collection(firestore, 'registrations'), {
      ...formData,
      imageUrl,
      registrationType: isPlayer ? 'Player' : 'Affiliate'
    });

    alert('Form submitted successfully!');

    // Reset form and image
    setFormData({
      registrationNo: '',
      name: '',
      fathersName: '',
      state: '',
      event: '',
      award: '',
      ageCategory: '',
    });
    setImage(null);
    setPassword('');
  };

  return (
    <div><Navbar/>
    <div className="form-container">
      <h1>Updating Form  <span style={{fontSize:'15px'}} >(not for users)</span> </h1>


      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="registration-no">Registration No.</label>
          <input
            type="text"
            id="registration-no"
            name="registrationNo"
            className="form-control"
            value={formData.registrationNo}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="full-name">Name</label>
          <input
            type="text"
            id="full-name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fathers-name">Father's Name</label>
          <input
            type="text"
            id="fathers-name"
            name="fathersName"
            className="form-control"
            value={formData.fathersName}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            className="form-control"
            value={formData.state}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="event">Event</label>
          <input
            type="text"
            id="event"
            name="event"
            className="form-control"
            value={formData.event}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="award">Award</label>
          <input
            type="text"
            id="award"
            name="award"
            className="form-control"
            value={formData.award}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age-category">Age Category</label>
          <input
            type="text"
            id="age-category"
            name="ageCategory"
            className="form-control"
            value={formData.ageCategory}
            onChange={handleFormChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image-upload">Upload Image</label>
          <input
            type="file"
            id="image-upload"
            name="imageUpload"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
          />
          {image && (
            <div className="image-preview" style={{width:'50%'}}>
              <img src={URL.createObjectURL(image)} alt="Preview" className="preview-img" />
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && <p className="error-text">{passwordError}</p>}
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    <Final/>
    </div>
  );
};

export default RegistrationForm;
