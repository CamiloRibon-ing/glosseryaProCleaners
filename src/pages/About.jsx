import './about.css';
import aboutBg from '../assets/images/fondo.jpg';
import { FaLeaf, FaStar, FaHeart } from 'react-icons/fa';
import { useEffect } from 'react';
import Footer from '../components/Footer/Footer';

const testimonials = [
  {
    name: 'Christy Xie',
    rating: 5,
    text: 'I needed a last minute house cleaning for the same day. Tania and Mona showed up right on time despite my last minute booking and did a fantastic job!! They are professional and very detailed and thorough. The house is sparkling clean and I’m extremely happy with their Excellent service. The house feels noticeably better after they finished! I will definitely be a returning customer. Highly recommended!'
  },
  {
    name: 'Sandra Pichardo',
    rating: 5,
    text: 'We have been using GlossyaPro Cleaners weekly since October 2019. We are very happy with Mona! She is very professional, super hard working, reliable and super on time! She is easy to talk to and will make sure you are satisfied with the service. We love her! We totally recommend her!!'
  },
  {
    name: 'Olena Veloumian',
    rating: 5,
    text: "I've been using GlossyaPro Cleaners for a few years now. Very happy with this service - always on time, job is done in the time frame discussed, very detailed, and they always do even a little bit more than expected and discussed which is unusual and adds to a great experience. I've booked regular house cleaning from them and some specific cleaning projects, always satisfied and will continue using them and recommending them."
  },
  {
    name: 'Vivian W',
    rating: 5,
    text: 'They arrive on time, very hard-working and fast, careful with your staff, easygoing and nice to talk to, very fair price, I would definitely recommend them to my friends.'
  },
  {
    name: 'David C',
    rating: 5,
    text: "I've hired GlossyaPro Cleaners many times in the past, always very happy with the completed work. Mona and Chantel are very hard working, thanks guys as always."
  },
  {
    name: 'Chan Tv',
    rating: 5,
    text: 'I have been using GlossyaPro Cleaners for over 4 years now. We have a lovely cleaners who do are carpet cleaning , house cleaning and our windows. We are happy with the services that they provide and we highly reccomend them to everyone.'
  }
];

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[1,2,3,4,5].map((star) => (
        <span key={star} className={star <= rating ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  );
}

export default function About() {
  useEffect(() => {
    const revealCards = () => {
      const cards = document.querySelectorAll('.about-info-card');
      const windowHeight = window.innerHeight;
      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {
          card.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealCards);
    revealCards();
    return () => window.removeEventListener('scroll', revealCards);
  }, []);

  return (
    <>
      <div className="about-page">
        <div className="about-hero" style={{ backgroundImage: `url(${aboutBg})` }}>
          <div className="about-hero-overlay">
            <h1 className="about-title">About Us</h1>
          </div>
        </div>
        <div className="about-content">
          <div className="about-icons-row">
            <div className="about-icon-card"><FaLeaf size={32} color="#43a047" /><span>Eco-Friendly</span></div>
            <div className="about-icon-card"><FaStar size={32} color="#ffd700" /><span>5-Star Service</span></div>
            <div className="about-icon-card"><FaHeart size={32} color="#e53935" /><span>Family Values</span></div>
          </div>
          <div className="about-info-cards">
            <div className="about-info-card">
              <h3>Our Philosophy</h3>
              <p>At <b>GlossyaPro Cleaners</b>, we believe in quality over quantity. Our philosophy is to work until the job is truly done, not just by the hour. We treat your property with the utmost care, as if it were our own, and welcome you as part of our family.</p>
            </div>
            <div className="about-info-card">
              <h3>Green Commitment</h3>
              <p><b>Established in 2025</b>, we are committed to protecting the environment and your health. That's why we use only eco-friendly, non-toxic cleaning products and proven green cleaning methods for your home and business. Our green approach is at the heart of everything we do.</p>
            </div>
            <div className="about-info-card">
              <h3>Client Satisfaction</h3>
              <p><b>Your satisfaction is our mission.</b> We don't consider a job finished until you are 100% satisfied. Our team is dedicated to creating a welcoming atmosphere and delivering a 5-star experience for every client. We strive to exceed expectations, fulfill your unspoken wishes, and provide a level of service that inspires trust and loyalty.</p>
            </div>
            <div className="about-info-card">
              <h3>Why Choose Us?</h3>
              <p>Choose GlossyaPro Cleaners for a cleaner, healthier, and happier space—where you are always treated like family.</p>
            </div>
          </div>
          <div className="about-testimonials">
            <h2 className="testimonials-title">Testimonials</h2>
            <div className="testimonials-cards">
              {testimonials.map((t, i) => (
                <div className="testimonial-card card-animate" key={i} style={{animationDelay: `${0.2 + i * 0.12}s`}}>
                  <div className="testimonial-header">
                    <span className="testimonial-user-icon" aria-label="user" role="img">👤</span>
                    <span className="testimonial-name">{t.name}</span>
                  </div>
                  <StarRating rating={t.rating} />
                  <div className="testimonial-text">{t.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
