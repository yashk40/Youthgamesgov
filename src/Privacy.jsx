import React from 'react';
import Navbar from './Navbar';
import Final from './Final';
import './Privacy.css';  // Import the CSS file for styles

export default function Privacy() {
  return (
    <div><Navbar />
    <div className="privacy-container">
      
      <div className="privacy-content">
        <h1 className="privacy-title" style={{marginBottom:'20px'}}>Privacy Policy</h1>
        <div className="privacy-section">
          <h2 className="privacy-section-title">SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</h2>
          <p className="privacy-section-content">
            When you register on our site, we collect mandatory information to process the registration. We use your provided info for registration process only.
          </p>
        </div>
        <div className="privacy-section">
          <h2 className="privacy-section-title">SECTION 2 - DISCLOSURE</h2>
          <p className="privacy-section-content">
            We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.
          </p>
        </div>
        <div className="privacy-section">
          <h2 className="privacy-section-title">SECTION 3 - PAYMENT</h2>
          <p className="privacy-section-content">
            [Details about payment processing, if applicable]
          </p>
        </div>
        <div className="privacy-section">
          <h2 className="privacy-section-title">SECTION 4 - THIRD-PARTY SERVICES</h2>
          <p className="privacy-section-content">
            In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us. However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions. For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers. In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located. Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service. Links When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.
          </p>
        </div>
        <div className="privacy-section">
          <h2 className="privacy-section-title">SECTION 5 - SECURITY</h2>
          <p className="privacy-section-content">
            To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
          </p>
        </div>
        <div className="privacy-section">
          <h2 className="privacy-section-title">SECTION 6 - COOKIES</h2>
          <p className="privacy-section-content">
            We use cookies to maintain session of your user. It is not used to personally identify you on other websites.
          </p>
        </div>
        <div className="privacy-section">
          <h2 className="privacy-section-title">SECTION 7 - AGE OF CONSENT</h2>
          <p className="privacy-section-content">
            By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
          </p>
        </div>
        <div className="privacy-section">
          <h2 className="privacy-section-title">SECTION 8 - CHANGES TO THIS PRIVACY POLICY</h2>
          <p className="privacy-section-content">
            We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it. If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
          </p>
        </div>
        <div className="privacy-section">
          <h2 className="privacy-section-title">QUESTIONS AND CONTACT INFORMATION</h2>
          <p className="privacy-section-content">
            If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at <a style={{color:'blue'}} href="mailto:youthgamesandsportsfederation@gmail.com">Our Gmail</a> or go to the contact us section of our home page.
          </p>
        </div>
      </div>
      </div>
      <Final />
    </div>
  );
}
