import React from 'react';

const TermsAndConditions = () => {
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1 style={{borderBottom: '2px solid black', fontSize: '25px', textAlign: 'left', width:'fit-content' }}>Terms and Conditions for ApnaGhar - Real Estate Platform</h1>

      <p style={{ marginBottom:'25px'}}>*- Welcome to ApnaGhar, a leading real estate platform leveraging innovative blockchain technology to facilitate the seamless buying and renting of properties tailored to your preferences. By engaging with our platform, you agree to the following terms and conditions:</p>

      <h2 style={{borderBottom: '2px solid black', fontSize: '20px', textAlign: 'left' , width:'fit-content'}}>User Responsibility:</h2>
      <p style={{ marginBottom:'25px'}}>You are responsible for the accuracy and completeness of the information provided during your interactions with ApnaGhar. This includes personal details, property requirements, and any other data essential for the transaction process.</p>

      {/* Repeat similar structure for other sections... */}

      <h2 style={{ borderBottom: '2px solid black', fontSize: '20px', textAlign: 'left', width:'fit-content' }}>Modifications to Terms:</h2>
      <p style={{ marginBottom:'25px'}}>ApnaGhar reserves the right to modify these terms and conditions at any time. Users will be notified of changes, and continued use of the platform constitutes acceptance of the updated terms.</p>
      <hr />
      
      <p>By using ApnaGhar, you acknowledge that you have read, understood, and agreed to these terms and conditions. For any questions or clarifications, please contact our customer support team. Thank you for choosing ApnaGhar for your real estate needs.</p>
    </div>
  );
};

export default TermsAndConditions;
