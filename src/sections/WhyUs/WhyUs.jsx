import './whyus.css';

const cards = [
  {
    icon: '💬',
    title: "24/7 days 'flexible scheduling'",
    color: 'var(--primary)'
  },
  {
    icon: '⚙️',
    title: 'High-end equipment and brand supplies.',
    color: 'var(--accent)'
  },
  {
    icon: '🛡️',
    title: 'Our cleaners are vetted & insured.',
    color: 'var(--primary)'
  },
  {
    icon: '💵',
    title: 'Rates: $50 per hour per cleaner',
    color: 'var(--accent)'
  }
];

export default function WhyUs() {
  const cardInfo = [
    {
      info: 'Book your cleaning at any time, any day. Flexible scheduling for your convenience.',
      button: 'Book Now',
      link: '#book-now',
    },
    {
      info: 'We use only the best equipment and supplies for a spotless clean.',
      button: 'Book Now',
      link: '#book-now',
    },
    {
      info: 'All our cleaners are background-checked and fully insured for your peace of mind.',
      button: 'Book Now',
      link: '#book-now',
    },
    {
      info: 'Transparent pricing. No hidden fees. Pay only for what you need.',
      button: 'Book Now',
      link: '#book-now',
    },
  ];
  return (
    <section className="whyus-section">
      <h2 className="whyus-title fade-in">Why GlossyaPro Cleaners?</h2>
      <p className="whyus-desc fade-in">
        <span style={{color: 'var(--primary)', fontWeight: 'bold'}}>GlossyaPro Cleaners</span> is a leading provider of cleaning services with an outstanding reputation for quality and integrity throughout the GTA and surrounding area. For over 8 years, we provide high-quality residential home cleaning, commercial cleaning, carpet cleaning, window cleaning, Pre/Post Renovation Cleaning, Move In/Move Out Cleaning and Carpets/Furniture Cleaning.
      </p>
      <div className="whyus-cards">
        {cards.map((card, i) => (
          <div
            className={`whyus-card card-animate${i === 0 ? ' whyus-card-highlight' : ''}`}
            key={i}
            style={{animationDelay: `${0.2 + i * 0.15}s`}}
          >
            <div className="whyus-icon" style={{color: card.color}}>{card.icon}</div>
            <div className="whyus-card-title">{card.title}</div>
            <div className="whyus-card-hover">
              <div className="whyus-card-info">{cardInfo[i].info}</div>
              <a href={cardInfo[i].link} className="whyus-card-btn">{cardInfo[i].button}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
