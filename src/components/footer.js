import React from 'react';
import style from './footer.module.css';
import Image from './image';
import SocialLinks from './social-links';

const Footer = ({siteTitle}) => (
  <footer className={style.footer}>
    <div className={style.brand}>
      <Image wrapperClassName={style.logo} projectId="global" assetId="logo-square" /> Uralys ©
      2010-{new Date().getFullYear()}
    </div>
    <SocialLinks className={style.links} />
  </footer>
);

export default Footer;
