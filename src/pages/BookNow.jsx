// BookNow.jsx


import './BookNow.css';
import { useState } from 'react';
import fondoImg from '../assets/images/fondo.jpg';
import Footer from '../components/Footer/Footer';
// Si tienes un logo, puedes importarlo aquí
// import logo from '../assets/images/TGcleaningservicelogo.jpeg';

export default function BookNow() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    sqft: '',
    address1: '',
    address2: '',
    city: '',
    postal: '',
    date: '',
    instructions: '',
    confirm: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Aquí puedes manejar el envío real
  };

  return (
    <div className="booknow-bg">
      <div className="booknow-header" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.45)), url(${fondoImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        minHeight: '260px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0 0 32px 32px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)'
      }}>
        {/* <img src={logo} alt="Logo" style={{width: 80, marginBottom: 12, borderRadius: 12}} /> */}
        <h1 style={{fontSize: '2.8rem', fontWeight: 800, letterSpacing: 1, margin: 0}}>Book Now</h1>
        <p style={{fontSize: '1.2rem', marginTop: 12, maxWidth: 520, textShadow: '0 2px 8px rgba(0,0,0,0.18)'}}>Schedule your professional cleaning service with us. Fast, reliable, and satisfaction guaranteed!</p>
      </div>
      <form className="booknow-form" onSubmit={handleSubmit}>
        {/* ...existing code... */}
        <div className="form-row">
          <div className="form-group">
            <label>Name *</label>
            <div className="form-inline">
              <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First" required />
              <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last" required />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email *</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone Number *</label>
            <input name="phone" type="tel" value={form.phone} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Estimated Square Feet *</label>
            <input name="sqft" type="number" min="0" value={form.sqft} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Address *</label>
            <input name="address1" value={form.address1} onChange={handleChange} placeholder="Address Line 1" required />
            <input name="address2" value={form.address2} onChange={handleChange} placeholder="Address Line 2" />
            <input name="city" value={form.city} onChange={handleChange} placeholder="City" required />
            <input name="postal" value={form.postal} onChange={handleChange} placeholder="Postal Code" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Preferred Date(s) *</label>
            <input name="date" type="date" value={form.date} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Special Instructions</label>
            <textarea name="instructions" value={form.instructions} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group confirm">
            <input name="confirm" type="checkbox" checked={form.confirm} onChange={handleChange} required />
            <span>I acknowledge that I have read and agree to abide by the Terms and Conditions & Cancellation Policy</span>
          </div>
        </div>
        <button className="booknow-btn" type="submit">Book</button>
        {submitted && <div className="form-success">Thank you for your booking!</div>}
      </form>

      {/* Mapa de ubicación */}
      <div className="booknow-map-section">
        <h2 style={{color:'#009688', fontWeight:700, fontSize:'1.4rem', marginBottom:8}}>Our Location</h2>
        <div className="booknow-map-iframe-wrapper">
          <iframe
            title="RT Cleaning Service Location"
            src="https://www.google.com/maps?q=100+Humber+College+Blvd,+Etobicoke,+ON+M9V+5G4,+Canada&output=embed"
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: '18px', width: '100%', minHeight: '320px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}
