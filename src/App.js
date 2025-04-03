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
        <video controls className="video" width="100%" height="auto">
        <source src="/videos/AzureOpenAIIn1Minute.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
      </div>
    </div>
  );
}

export default App;