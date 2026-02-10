import './Footer.css';

export default function Footer() {
  return (
    <footer className="booknow-footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} RT Cleaning Service. All rights reserved.</span>
        <span style={{ marginLeft: 12, color: '#fff', fontWeight: 500 }}>
          glossycleanerspro@gmail.com
        </span>
      </div>
      <div className="footer-socials">
        {/* Aquí puedes agregar íconos sociales si lo deseas */}
      </div>
    </footer>
  );
}
