// Verificarion.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Navbar from './Navbar';
import './Verify.css';
import { firestore } from './firebase'; // Import Firestore
import { collection, query, where, getDocs } from 'firebase/firestore'; // Firestore methods
import Final from './Final';

const Verificarion = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [result, setResult] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle registration number input change
  const handleChange = (e) => {
    setRegistrationNumber(e.target.value);
  };

  // Handle file verification
  const handleVerify = async () => {
    try {
      // Create a query to find the document with the given registration number
      const q = query(collection(firestore, 'registrations'), where('registrationNo', '==', registrationNumber));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0].data(); // Get the first matching document
        setResult({
          ...doc,
          message: 'Record found!',
        });
        navigate('/result', { state: { result: doc } }); // Navigate to ResultPage with result data
      } else {
        setResult({
          message: 'No record found for this registration number.',
        });
      }
    } catch (error) {
      console.error("Error verifying record: ", error);
      setResult({
        message: 'Error retrieving record.',
      });
    }
  };

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Navbar />

      <div className="container60">
        <div className="header60">
          <h1>Enter your Registration No</h1>
        </div>
        <div className="form-group60">
          <label htmlFor="registrationNumber" className="label60">Enter Registration Number:</label>
          <input
            type="text"
            id="registrationNumber60"
            value={registrationNumber}
            onChange={handleChange}
            className="input-text60"
          />
          <button type="button" onClick={handleVerify} className="verify-button60">Verify</button>
        </div>

        {result && (
          <div className="verification-result60">
            <h2 >Verification Result</h2>
            {result.message && <p>{result.message}</p>}
          </div>
        )}
      </div>
      <Final/>
    </div>
  );
};

export default Verificarion;
