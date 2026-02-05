import './Employment.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import employmentBg from '../assets/images/fondo.jpg';
import Footer from '../components/Footer/Footer';

export default function Employment() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    province: 'Ontario',
    postalCode: '',
    phone: '',
    email: '',
    shifts: [],
    areas: [],
    transportation: '',
    experience: '',
    employer1: '',
    position1: '',
    dates1: '',
    employer2: '',
    position2: '',
    dates2: '',
    reasonLeaving: '',
    references: '',
    ref1: '',
    ref1Phone: '',
    ref1Relation: '',
    ref2: '',
    ref2Phone: '',
    ref2Relation: '',
    comments: ''
  });
  const [status, setStatus] = useState('');
  const formRef = useRef();

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm(prev => ({
        ...prev,
        [name]: checked
          ? [...(prev[name] || []), value]
          : prev[name].filter(v => v !== value)
      }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleRadio = (name, value) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Enviando solicitud...');
    try {
      await emailjs.send(
        'service_t6ltd7g', // Service ID
        'template_k4a81ng', // Template ID
        {
          ...form,
          shifts: form.shifts.join(', '),
          areas: form.areas.join(', ')
        },
        'pottjLgBxgFrjaR1Y' // Public Key
      );
      setStatus('¡Solicitud enviada! Nos pondremos en contacto contigo.');
      setForm({
        firstName: '', lastName: '', address: '', city: '', province: 'Ontario', postalCode: '', phone: '', email: '', shifts: [], areas: [], transportation: '', experience: '', employer1: '', position1: '', dates1: '', employer2: '', position2: '', dates2: '', reasonLeaving: '', references: '', ref1: '', ref1Phone: '', ref1Relation: '', ref2: '', ref2Phone: '', ref2Relation: '', comments: ''
      });
      if (formRef.current) formRef.current.reset();
    } catch (error) {
      setStatus('Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="employment-page">
      <div className="employment-hero" style={{ backgroundImage: `url(${employmentBg})` }}>
        <div className="employment-hero-overlay">
          <h1 className="employment-title">Partnership Inquiry / Employment Application</h1>
        </div>
      </div>
      <form className="employment-form" ref={formRef} onSubmit={handleSubmit} autoComplete="off">
        <div style={{
          background: '#f5f7fa',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '18px',
          color: '#1a237e',
          fontWeight: 500
        }}>
          <span style={{color: '#c00', fontWeight: 700}}>*</span> Please send your resume to <b>glossycleanerspro@gmail.com</b> after submitting this form.<br />
          <span style={{fontSize: '0.95em', color: '#444'}}>Only the form data will be sent through this form.</span>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>First Name *</label>
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Address *</label>
            <input type="text" name="address" value={form.address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>City *</label>
            <input type="text" name="city" value={form.city} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Province *</label>
            <select name="province" value={form.province} onChange={handleChange} required>
              <option value="Ontario">Ontario</option>
              <option value="Quebec">Quebec</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Postal Code *</label>
            <input type="text" name="postalCode" value={form.postalCode} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Contact Phone *</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>E-mail Address *</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Shifts available to work *</label>
            <div className="checkbox-group">
              <label><input type="checkbox" name="shifts" value="Day" checked={form.shifts.includes('Day')} onChange={handleChange} /> Day</label>
              <label><input type="checkbox" name="shifts" value="Evening" checked={form.shifts.includes('Evening')} onChange={handleChange} /> Evening</label>
              <label><input type="checkbox" name="shifts" value="Weekend" checked={form.shifts.includes('Weekend')} onChange={handleChange} /> Weekend</label>
              <label><input type="checkbox" name="shifts" value="Holidays" checked={form.shifts.includes('Holidays')} onChange={handleChange} /> Holidays</label>
            </div>
          </div>
          <div className="form-group">
            <label>Areas of interest *</label>
            <div className="checkbox-group">
              <label><input type="checkbox" name="areas" value="Residential" checked={form.areas.includes('Residential')} onChange={handleChange} /> Residential</label>
              <label><input type="checkbox" name="areas" value="Commercial" checked={form.areas.includes('Commercial')} onChange={handleChange} /> Commercial</label>
              <label><input type="checkbox" name="areas" value="Post-Construction" checked={form.areas.includes('Post-Construction')} onChange={handleChange} /> Post-Construction</label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Do you have own transportation? *</label>
            <div className="radio-group">
              <label><input type="radio" name="transportation" value="Yes" checked={form.transportation === 'Yes'} onChange={e => handleRadio('transportation', 'Yes')} /> Yes</label>
              <label><input type="radio" name="transportation" value="No" checked={form.transportation === 'No'} onChange={e => handleRadio('transportation', 'No')} /> No</label>
            </div>
          </div>
          <div className="form-group">
            <label>Have you ever worked in professional cleaning? *</label>
            <div className="radio-group">
              <label><input type="radio" name="experience" value="Yes" checked={form.experience === 'Yes'} onChange={e => handleRadio('experience', 'Yes')} /> Yes</label>
              <label><input type="radio" name="experience" value="No" checked={form.experience === 'No'} onChange={e => handleRadio('experience', 'No')} /> No</label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Employer 1</label>
            <input type="text" name="employer1" value={form.employer1} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Position</label>
            <input type="text" name="position1" value={form.position1} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Employment dates</label>
            <input type="text" name="dates1" value={form.dates1} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Employer 2</label>
            <input type="text" name="employer2" value={form.employer2} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Position</label>
            <input type="text" name="position2" value={form.position2} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Employment dates</label>
            <input type="text" name="dates2" value={form.dates2} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Reason for leaving</label>
            <input type="text" name="reasonLeaving" value={form.reasonLeaving} onChange={handleChange} />
          </div>
          {/* No se incluye campo de archivo, solo datos */}
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>References (other than relatives)? *</label>
            <div className="radio-group">
              <label><input type="radio" name="references" value="Yes" checked={form.references === 'Yes'} onChange={e => handleRadio('references', 'Yes')} /> Yes</label>
              <label><input type="radio" name="references" value="No" checked={form.references === 'No'} onChange={e => handleRadio('references', 'No')} /> No</label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Reference 1</label>
            <input type="text" name="ref1" value={form.ref1} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" name="ref1Phone" value={form.ref1Phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Relation</label>
            <input type="text" name="ref1Relation" value={form.ref1Relation} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Reference 2</label>
            <input type="text" name="ref2" value={form.ref2} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" name="ref2Phone" value={form.ref2Phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Relation</label>
            <input type="text" name="ref2Relation" value={form.ref2Relation} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group" style={{width: '100%'}}>
            <label>Comments</label>
            <textarea name="comments" value={form.comments} onChange={handleChange} rows={3} />
          </div>
        </div>
        <button className="employment-btn" type="submit">Send</button>
        {status && (
          <div
            className="form-status"
            style={{
              marginTop: '18px',
              padding: '14px 18px',
              borderRadius: '8px',
              background: status.startsWith('¡') ? '#e8f5e9' : '#ffebee',
              color: status.startsWith('¡') ? '#2e7d32' : '#c62828',
              fontWeight: 500,
              fontSize: '1.08em',
              boxShadow: '0 2px 8px #e0e0e0'
            }}
          >
            {status.startsWith('¡')
              ? '✅ ¡Tu solicitud fue enviada correctamente! Pronto nos pondremos en contacto contigo.'
              : '❌ Ocurrió un error al enviar tu solicitud. Por favor, revisa los datos e inténtalo nuevamente.'}
          </div>
        )}
      </form>
      <Footer />
    </div>
  );
}
