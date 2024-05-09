import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="row">
          <div className="footer-img">
            <img className="logo-footer" src="assets/logos/logo riverstory sem fundo.png" alt="logo-footer" />
          </div>

          <div className="footer-col">
            <h4>Recursos</h4>
            <ul className="recursos">
              <li><a href="#">Idiomas</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Central de Ajuda</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Siga-nos</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <hr />
            <div className="footerBottom">
              <p>Copyright &copy;2024 <span className="designer">RIVERSTORY</span></p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;