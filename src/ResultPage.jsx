// ResultPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './ResultPage.css'; // Ensure this CSS file is created and applied
import Final from './Final';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook for programmatic navigation
  const { state } = location;
  const result = state?.result;

  if (!result) {
    return <p>No result data found.</p>;
  }

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = result.imageUrl;
    link.download = 'image.jpg'; // Set the file name here
    link.click();
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <>
      <Navbar />
      <div className="result-container">
        <h1 className="result-header" >Verification Result</h1>
        <div className="result-content">
          <div className="result-info">
            <table className="result-table">
              <tbody>
                <tr>
                  <th>Registration Number:</th>
                  <td>{result.registrationNo}</td>
                </tr>
                <tr>
                  <th>Name:</th>
                  <td>{result.name}</td>
                </tr>
                <tr>
                  <th>Father's Name:</th>
                  <td>{result.fathersName}</td>
                </tr>
                <tr>
                  <th>State:</th>
                  <td>{result.state}</td>
                </tr>
                <tr>
                  <th>Event:</th>
                  <td>{result.event}</td>
                </tr>
                <tr>
                  <th>Award:</th>
                  <td>{result.award}</td>
                </tr>
                <tr>
                  <th>Age Category:</th>
                  <td>{result.ageCategory}</td>
                </tr>
              </tbody>
            </table>
            <button className="back-button" onClick={handleBack}>
              Back
            </button>
          </div>
          {result.imageUrl && (
            <div className="result-image">
              <img src={result.imageUrl} alt="Stored" />
              <button className="download-button" onClick={handleDownload}>
                Download Image
              </button>
            </div>
          )}
        </div>
      </div>
      <Final />
    </>
  );
};

export default ResultPage;
