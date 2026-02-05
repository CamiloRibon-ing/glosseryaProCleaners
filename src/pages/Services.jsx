// Este archivo ha sido eliminado. Usar src/sections/Services/Services.jsx como principal.
import '../sections/Services/services.css';
import { useEffect } from 'react';
import commercialImg from '../assets/images/commercial-cleaning-supplies.jpeg';
import residentialImg from '../assets/images/residencialcleaning.jpg';
import moveImg from '../assets/images/moveoutcleaning.jpg';
import furnitureImg from '../assets/images/furniturecleaning.jpg';
import renovationImg from '../assets/images/postrenovationcleaning.jpg';
import { useNavigate } from 'react-router-dom';

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
	const navigate = useNavigate();
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
		<>
			<section className="services-section" id="services">
				<h2 className="services-title fade-in" style={{color: '#fff'}}>Our Services</h2>
				<div className="services-cards">
					{services.map((service, i) => (
						<div
							className="service-card card-animate"
							key={i}
							style={{ animationDelay: `${0.2 + i * 0.15}s` }}
						>
							<div className="service-img-placeholder">
								{service.img && (
									<img
										src={service.img}
										alt={service.title}
										className="service-img"
									/>
								)}
							</div>
							<div className="service-card-title">{service.title}</div>
							<div className="service-card-desc">{service.desc}</div>
						</div>
					))}
				</div>
				<div className="services-important-info">
					<h3>Why Choose Us?</h3>
					<ul>
						<li>
							Eco-friendly cleaning products for your safety and the environment.
						</li>
						<li>
							Flexible scheduling and personalized service for every client.
						</li>
						<li>Experienced, trustworthy, and detail-oriented staff.</li>
						<li>Transparent pricing and satisfaction guarantee.</li>
					</ul>
				</div>
				<div className="services-contact-cta">
					<h3>Ready for a cleaner space?</h3>
					<button
						className="services-contact-btn"
						onClick={() => navigate('/contact')}
					>
						Contact Us
					</button>
				</div>
			</section>
			{/* Footer importado de BookNow.jsx */}
			<footer className="booknow-footer">
				<div className="footer-content">
					<span>© {new Date().getFullYear()} RT Cleaning Service. All rights reserved.</span>
					<span style={{marginLeft:12, color:'#009688', fontWeight:500}}>glossycleanerspro@gmail.com</span>
				</div>
				<div className="footer-socials">
					{/* Aquí puedes agregar íconos sociales si lo deseas */}
				</div>
			</footer>
		</>
	);
}
