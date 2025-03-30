import { useState } from 'react';
import './App.css';

function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="app">

      <nav className="navbar">
        <div className="logo">MindCare</div>
       
      </nav>

     
      <section className="hero">
        <div className="hero-content">
          <h1>Your Mental Health Matters</h1>
          <p>24/7 AI-powered support when you need it most</p>
          <div className="hero-buttons">
            <button className="primary-btn">Try Our Self-Care Tools</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://illustrations.popsy.co/amber/digital-nomad.svg" alt="Mental health illustration" />
        </div>
      </section>

     
      <section id="features" className="features">
        <h2>How We Can Help</h2>
        <div className="feature-cards">
          <div className="card">
            <div className="card-icon">💬</div>
            <h3>Instant Support</h3>
            <p>Get compassionate responses anytime, anywhere</p>
          </div>
          <div className="card">
            <div className="card-icon">⚠️</div>
            <h3>Crisis Detection</h3>
            <p>Immediate help when you need it most</p>
          </div>
          <div className="card">
            <div className="card-icon">📱</div>
            <h3>Always Available</h3>
            <p>24/7 support with no wait times</p>
          </div>
        </div>
      </section>

     
   

     
      <footer>
        <div className="footer-content">
          <div className="footer-logo">MindCare</div>
         
        </div>
 
      </footer>
    </div>
  );
}

export default App;