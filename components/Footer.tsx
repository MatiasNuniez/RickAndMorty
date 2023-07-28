import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="https://instagram.com/matias.nuniez"><i className="fab fa-instagram"></i> Instagram</a>
        </li>
        <li>
          <a href="https://twitter.com/matiasnuniez"><i className="fab fa-twitter"></i> Twitter</a>
        </li>
        <li>
          <a> <i className="far fa-envelope"></i> Gmail (matiasnuniez192@gmail.com)</a>
        </li>
      </ul>
      <p className="hecho">
        © Sitio creado por
        <a href="https://instagram.com/matias.nuniez"> Matias Nuñez</a>
      </p>
    </div>
  );
};

export default Footer;
