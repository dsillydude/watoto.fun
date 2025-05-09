import React from 'react';
import './KidCampStyles.css';

const KidCampHeader = () => {
  return (
    <header className="kidcamp-header">
      <i className="fas fa-cloud cloud" style={{ top: '20%', left: '10%' }}></i>
      <i className="fas fa-cloud cloud" style={{ top: '15%', right: '15%', animationDuration: '18s', animationDirection: 'reverse' }}></i>
      
      <h1 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '3.5rem', margin: '10px 0' }}>Watoto Fun</h1>
      
      <div className="logo-circle">
        <div style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 800, fontSize: '2rem', color: 'var(--accent-red)' }}>PLAY</div>
      </div>
    </header>
  );
};

export default KidCampHeader;
