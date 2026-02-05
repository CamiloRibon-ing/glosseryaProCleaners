import './Contact.css';
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import aboutBg from '../assets/images/TGcleaningservicelogo.jpeg';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer/Footer';

function Notification({ message, type, onClose }) {
  if (!message) return null;
  return (
    <div className={`notification ${type}`}>
      <span>{message}</span>
      <button className="notification-close" onClick={onClose}>&times;</button>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setNotification({ message: 'Enviando mensaje...', type: 'info' });
    emailjs.send(
      'service_t6ltd7g',
      'template_lfe6cwb',
      {
        name: form.firstName + ' ' + form.lastName,
        email: form.email,
        title: form.subject,
        message: form.message,
      },
      'pottjLgBxgFrjaR1Y'
    )
      .then(() => {
        setNotification({ message: '¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.', type: 'success' });
        setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      })
      .catch(() => {
        setNotification({ message: 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.', type: 'error' });
      });
  };

  return (
    <div className="contact-page">
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: '', type: '' })}
      />
      <div className="contact-hero" style={{ backgroundImage: `url(${aboutBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', position: 'relative' }}>
        <div className="contact-hero-overlay">
          <h1 className="contact-title">Contact Us</h1>
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="contact-company">GLOSSY CLEANERS PRO</div>
          <div className="contact-details">
            <div><FaMapMarkerAlt /> Toronto, ON</div>
            <div><FaPhoneAlt /> <a href="tel:+4374412055">+43 744 12055</a></div>
            <div><FaEnvelope /> <a href="mailto:glossycleanerspro@gmail.co">glossycleanerspro@gmail.co</a></div>
          </div>
          <div className="contact-hours">By Appointment Only</div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="form-row">
            <div className="form-group">
              <label>First Name <span>*</span></label>
              <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Last Name <span>*</span></label>
              <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email <span>*</span></label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Subject <span>*</span></label>
              <input type="text" name="subject" value={form.subject} onChange={handleChange} required />
            </div>
            <div className="form-group" style={{flex:2}}>
              <label>Message <span>*</span></label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={4} />
            </div>
          </div>
          <div style={{display:'flex',justifyContent:'center',marginTop:'1.2rem'}}>
            <button className="contact-btn" type="submit">Send Message</button>
          </div>
        </form>
      </div>
        <Footer />
    </div>
  );
}
