import React from 'react';
import style from './footer.module.css';
import SocialLinks from './social-links';

const Footer = ({ siteTitle }) => (
  <footer className={style.footer}>
    © 2010-{new Date().getFullYear()}, Christophe Dugne-Esquevin, Uralys
    <SocialLinks className={style.links} />
  </footer>
);

export default Footer;
