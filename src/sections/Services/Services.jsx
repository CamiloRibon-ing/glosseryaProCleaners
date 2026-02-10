

import './services.css';
import Footer from '../../components/Footer/Footer';
import { useEffect } from 'react';
import commercialImg from '../../assets/images/commercial-cleaning-supplies.jpeg';
import residentialImg from '../../assets/images/residencialcleaning.jpg';
import moveImg from '../../assets/images/moveoutcleaning.jpg';
import furnitureImg from '../../assets/images/furniturecleaning.jpg';
import renovationImg from '../../assets/images/postrenovationcleaning.jpg';
import fondoImg from '../../assets/images/fondo.jpg';


const services = [
  {
    title: 'Commercial Cleaning',
    desc: 'All businesses need a clean working environment to provide positive client experiences. Let us deal with the hassles of cleaning, while you focus on what you do best.',
    img: commercialImg,
  },
  {
    title: 'Residential Cleaning',
    desc: 'Whether you find yourself too busy to give your home the love and attention it deserves or simply groan at the thought of taking on cleaning projects yourself, RightNow Cleaners residential services is right for you.',
    img: residentialImg,
  },
  {
    title: 'Move In/ Move Out Cleaning',
    desc: 'Moving into a new home? Let our team welcome you into your new house with a professional cleaning that will make you feel at home. We also give your space that spotless look before you handover the keys.',
    img: moveImg,
  },
  {
    title: 'Carpets/Furniture Cleaning',
    desc: 'When it comes to having clean carpet or furniture, you can trust us to get the job done professionally and to a high quality! We know that cleaning carpets or furniture can be a delicate process, so we put in the necessary effort and eco-friendly equipment to ensure it looks like new after we clean it.',
    img: furnitureImg,
  },
  {
    title: 'Pre/Post Renovation Cleaning',
    desc: 'Cleaning of after the renovation has its own subtleties. There are stains which only professional equipment and special detergents can combat with. The high quality of work & years of experience promotes the fact that we have one of the most loyal costs of post renovation cleaning in the GTA area.',
    img: renovationImg,
  },
];

export default function Services() {
  useEffect(() => {
    const cards = document.querySelectorAll('.service-card');
    const revealOnScroll = () => {
      const trigger = window.innerHeight * 0.92;
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < trigger) {
          card.classList.add('in-view');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <section className="services-section" id="services">
      <div className="services-bg-curve">
        <svg viewBox="0 0 1440 220" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="servicesCurveGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.685 0.169 237.323)" />
              <stop offset="100%" stopColor="oklch(0.685 0.169 237.323)" />
            </linearGradient>
          </defs>
          <path d="M0,0 C400,120 1040,0 1440,180 L1440,0 L0,0 Z" fill="url(#servicesCurveGrad)" fillOpacity="0.85" />
        </svg>
      </div>
      <h2 className="services-title fade-in">Our Services</h2>
      <div className="services-cards">
        {services.map((service, i) => (
          <div
            className="service-card card-animate"
            key={i}
            style={{animationDelay: `${0.2 + i * 0.15}s`} }
          >
            <div className="service-img-placeholder">
              {service.img && (
                <img src={service.img} alt={service.title} className="service-img" />
              )}
            </div>
            <div className="service-card-title">{service.title}</div>
            <div className="service-card-desc">{service.desc}</div>
            <a href="/services" className="service-card-btn">Learn More</a>
          </div>
        ))}
      </div>
      <div className="services-bg-curve-bottom">
        <svg viewBox="0 0 1440 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <linearGradient id="servicesCurveGradBottom" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.685 0.169 237.323)" />
              <stop offset="100%" stopColor="oklch(0.685 0.169 237.323)" />
            </linearGradient>
          </defs>
          <path d="M0,120 C400,0 1040,120 1440,0 L1440,120 L0,120 Z" fill="url(#servicesCurveGradBottom)" fillOpacity="0.85" />
        </svg>
      </div>
    </section>
  );
}
