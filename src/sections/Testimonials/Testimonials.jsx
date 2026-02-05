
import './testimonials.css';

const testimonials = [
  {
    name: 'Christy Xie',
    rating: 5,
    text: 'I needed a last minute house cleaning for the same day. Tania and Mona showed up right on time despite my last minute booking and did a fantastic job!! They are professional and very detailed and thorough. The house is sparkling clean and I’m extremely happy with their Excellent service. The house feels noticeably better after they finished! I will definitely be a returning customer. Highly recommended!'
  },
  {
    name: 'Sandra Pichardo',
    rating: 5,
    text: 'We have been using Right Now Cleaners weekly since October 2019. We are very happy with Mona! She is very professional, super hard working, reliable and super on time! She is easy to talk to and will make sure you are satisfied with the service. We love her! We totally recommend her!!'
  },
  {
    name: 'Olena Veloumian',
    rating: 5,
    text: "I've been using Right Now Cleaners for a few years now. Very happy with this service - always on time, job is done in the time frame discussed, very detailed, and they always do even a little bit more than expected and discussed which is unusual and adds to a great experience. I've booked regular house cleaning from them and some specific cleaning projects, always satisfied and will continue using them and recommending them."
  },
  {
    name: 'Vivian W',
    rating: 5,
    text: 'They arrive on time, very hard-working and fast, careful with your staff, easygoing and nice to talk to, very fair price, I would definitely recommend them to my friends.'
  },
  {
    name: 'David C',
    rating: 5,
    text: "I've hired Right Now Cleaners many times in the past, always very happy with the completed work. Mona and Chantel are very hard working, thanks guys as always."
  },
  {
    name: 'Chan Tv',
    rating: 5,
    text: 'I have been using Right Now Cleaners for over 4 years now. We have a lovely cleaners who do are carpet cleaning , house cleaning and our windows. We are happy with the services that they provide and we highly reccomend them to everyone.'
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

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title fade-in">Testimonials</h2>
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
    </section>
  );
}
