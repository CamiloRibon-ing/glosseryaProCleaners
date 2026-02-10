


import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

export default function Hero() {
  const navigate = useNavigate();
  const handleGoToBookNow = useCallback((e) => {
    e.preventDefault();
    navigate('/book');
  }, [navigate]);
  return (
    <section className="hero hero-landing">
      <div className="hero-bg" />
      <svg className="hero-curve-svg" viewBox="0 0 1600 180" width="100%" height="180" style={{position:'absolute',top:0,left:0,width:'100%',height:'180px',zIndex:2}}>
        <path d="M0,0 C500,60 1100,20 1600,100 L1600,0 L0,0 Z" fill="#fff" />
        <path d="M0,40 C600,120 1000,0 1600,140 L1600,0 L0,0 Z" fill="#f5f7fa" opacity="0.7" />
      </svg>
      <div className="hero-content fade-in">
        <div className="hero-header-block" style={{textAlign:'center',margin:'0 auto',maxWidth:'700px'}}>
          <span className="hero-brand">GlossyaPro Cleaners</span>
          <h1 className="hero-title">DON'T TRY TO BE ORIGINAL</h1>
          <span className="hero-sub" style={{display:'block',marginTop:'-0.7rem',marginBottom:'1.2rem'}}>JUST TRY TO BE GOOD</span>
          <p className="hero-desc">Book a trusted Cleaning Company in GTA &amp; surrounding areas now!</p>
          <a href="/book" className="hero-btn" onClick={handleGoToBookNow}>Learn More</a>
        </div>
        <div className="hero-info-row" style={{justifyContent:'center',marginTop:'2.5rem'}}>
          <div className="hero-info-block">
            <span className="hero-info-icon" style={{color:'#ffd700'}}>💡</span>
            <div className="hero-info-title">Big Idea</div>
            <div className="hero-info-desc">Eco-friendly cleaning, trusted staff, flexible scheduling.</div>
          </div>
          <div className="hero-info-block">
            <span className="hero-info-icon" style={{color:'#2196f3'}}>📊</span>
            <div className="hero-info-title">Monitoring</div>
            <div className="hero-info-desc">Quality control and satisfaction guaranteed for every service.</div>
          </div>
          <div className="hero-info-block">
            <span className="hero-info-icon" style={{color:'#e53935'}}>📞</span>
            <div className="hero-info-title">Communication</div>
            <div className="hero-info-desc">Contact us for a free quote or book online instantly.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
