import React from 'react';
import style from './footer.module.css';
import SocialLinks from './social-links';

const Footer = ({ siteTitle }) => (
  <footer className={style.footer}>
    <p className={style.texts}>
      <span>© 2010-{new Date().getFullYear()}</span>
      <span>Uralys</span>
      <span>Christophe Dugne-Esquevin</span>
    </p>
    <SocialLinks className={style.links} />
  </footer>
);

export default Footer;
