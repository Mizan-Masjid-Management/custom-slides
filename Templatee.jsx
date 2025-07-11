import React from 'react';

function Template({ masjid }) {
  const slides = [];
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#FFFFFF',
      color: '#333',
      fontFamily: 'Arial, sans-serif',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: "100%"
    }}>
      <h2 style={{ color: '#550C18', borderBottom: '2px solid #550C18', paddingBottom: '10px' }}>
        Custom Component for {masjid?.name || 'Your Masjid'}
      </h2>
      <p style={{ marginTop: '15px' }}>This is an example of a dynamically loaded React component.</p>

      <div style={{ marginTop: '20px', textAlign: 'left', width: '80%' }}>
        <h3 style={{ color: '#78001A' }}>Signage Details:</h3>
        <p><strong>Total Slides:</strong> {slides.length}</p>
        <p>Here are the types of slides currently in your signage:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {slides.map((slide, index) => (
            <li key={slide.id || index}>{slide.type}</li>
          ))}
        </ul>
      </div>

      <p style={{ marginTop: 'auto', fontSize: '12px', color: '#666' }}>
        Modify this component to create your own custom signage screen!
      </p>
    </div>
  );
};

export default Template;
