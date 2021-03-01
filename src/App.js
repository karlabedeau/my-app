import React from 'react';
import "./styles.css";
import Weather from "./Weather"


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Montreal" />
        <div className="footer">
          This{" "}
          <a
            className="open"
            href="https://github.com/karlabedeau/my-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          and{" "}
          <a
            href="https://practical-allen-6acde0.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hosted on Netlify
          </a>{" "}
          weather report was build by Karla Bedeau
        </div>
      </div>

    </div>
  );
}
    
