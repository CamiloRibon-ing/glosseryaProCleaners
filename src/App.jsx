
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import WhyUs from './sections/WhyUs/WhyUs';
import Services from './sections/Services/Services';
import Testimonials from './sections/Testimonials/Testimonials';
import FloatingSocials from './components/FloatingSocials';
import About from './pages/About';
import Contact from './pages/Contact';
import Employment from './pages/Employment';
import BookNow from './pages/BookNow';
import Footer from './components/Footer/Footer';
import './styles/global.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <WhyUs />
            <Services />
            <Testimonials />
            {/* Eliminar Footer duplicado aquí, solo dejar el del final */}
            <section className="map-section" style={{width:'100%',padding:'0',margin:'0',marginTop:'2.5rem',display:'flex',flexDirection:'column',alignItems:'center',background:'#f4f6fb'}}>
                {/* Map & CTA Section */}
                <section style={{
                  width: '100%',
                  background: 'linear-gradient(180deg, #e0f7fa 0%, #f5f5f5 100%)',
                  padding: '0',
                  minHeight: '480px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 32px rgba(0,0,0,0.07)'
                }}>
                  <div style={{
                    width: '100%',
                    maxWidth: '700px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '32px',
                    padding: '0',
                  }}>
                    {/* Map */}
                    <div style={{
                      width: '100%',
                      minHeight: '340px',
                      height: '340px',
                      borderRadius: '18px',
                      overflow: 'hidden',
                      background: '#fff',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                      marginBottom: '18px',
                    }}>
                      <iframe
                        title="RT Cleaning Service Location"
                        src="https://www.google.com/maps?q=100+Humber+College+Blvd,+Etobicoke,+ON+M9V+5G4,+Canada&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, width: '100%', height: '100%', minHeight: '340px', minWidth: '100%' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    {/* CTA & Info */}
                    <div style={{
                      width: '100%',
                      maxWidth: '480px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      background: '#fff',
                      borderRadius: '18px',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                      padding: '40px 32px',
                      gap: '18px',
                      position: 'relative',
                      zIndex: 2,
                    }}>
                      <h2 style={{ color: '#1e293b', fontSize: '2.1rem', fontWeight: '700', marginBottom: '8px' }}>Visit Us or Book Today!</h2>
                      <p style={{ color: '#475569', fontSize: '1.1rem', marginBottom: '8px' }}>
                        100 Humber College Blvd, Etobicoke, ON M9V 5G4, Canada
                      </p>
                      <p style={{ color: '#009688', fontSize: '1.15rem', fontWeight: '500', marginBottom: '8px' }}>
                        Looking for professional and reliable cleaning? Contact us for a free quote!
                      </p>
                      <ul style={{ color: '#475569', fontSize: '1rem', marginBottom: '8px', paddingLeft: '18px' }}>
                        <li>✔️ Trusted and qualified staff</li>
                        <li>✔️ Fast and flexible service</li>
                        <li>✔️ Satisfaction guaranteed</li>
                      </ul>
                      <a href="tel:+16475551234" style={{
                        display: 'inline-block',
                        background: 'linear-gradient(90deg, #009688 0%, #00bcd4 100%)',
                        color: '#fff',
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        padding: '14px 32px',
                        borderRadius: '32px',
                        textDecoration: 'none',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                        marginTop: '12px',
                        transition: 'background 0.2s',
                      }}
                        onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #00bcd4 0%, #009688 100%)'}
                        onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #009688 0%, #00bcd4 100%)'}
                      >
                        Call Us Now!
                      </a>
                      <span style={{ color: '#475569', fontSize: '0.98rem', marginTop: '8px' }}>
                        Or <a href="#contact" style={{ color: '#009688', textDecoration: 'underline', fontWeight: '500' }}>send your request online</a>
                      </span>
                    </div>
                  </div>
                  {/* Responsive: stack on mobile */}
                  <style>{`
                    @media (max-width: 900px) {
                      .map-section > section > div {
                        flex-direction: column !important;
                        min-height: 0 !important;
                      }
                      .map-section > section > div > div:first-child {
                        min-height: 320px !important;
                        height: 320px !important;
                        border-radius: 18px 18px 0 0 !important;
                      }
                      .map-section > section > div > div:last-child {
                        border-radius: 0 0 18px 18px !important;
                        max-width: 100vw !important;
                        margin-left: 0 !important;
                      }
                    }
                  `}</style>
                </section>
            </section>
            {/* Footer al final de la Home */}
            <Footer />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/book" element={<BookNow />} />
      </Routes>
      <FloatingSocials />
    </>
  );
}

export default App;
