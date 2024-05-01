import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import the CSS file
import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <div className="root"> {/* Use className instead of style */}
    <App />
  </div>
);
