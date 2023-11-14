import React from 'react';
import '../Footer/footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src="../public/images/footer.png" alt="Logo" />
        </div>
        <div className="footer-links">
          <li><a href="/registro">Registrate</a></li>
          <li><a href="/about">Cambia tu informacion</a></li>
        </div>
      </div>
      <p> Clínica CES Copyright © 2023</p>
    </footer>
  );
}

export default Footer;
