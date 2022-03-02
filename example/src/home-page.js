import React from 'react';

function HomePage() {
  return (
    <div className="container">
      <div className="home-text">
        <div>Hi !</div>
        <div>
          I'm <strong>React Cache Buster</strong>
        </div>
      </div>
      <div className="footer">
        <a
          href="https://github.com/jagadeep-mahendran/react-cache-buster"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon"
        >
          <img alt="logo" src="/github.png" />
        </a>
      </div>
    </div>
  );
}

export default HomePage;
