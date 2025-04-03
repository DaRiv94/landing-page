import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing-page">
      <header className="header">
        Landing Page Header
      </header>
      <div className="video-container">
        <div className="iframe-wrapper">
        <iframe type="text/html" frameborder="0" width="1920" height="1080" src="https://www.youtube.com/embed/tvyTtYWaumY" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;