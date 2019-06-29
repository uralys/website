import React from 'react';
import style from './hero.module.css';
import Image from './image';
import SocialLinks from './social-links';

const Hero = () => (
  <div className={style.hero}>
    <Image wrapperClassName={style.image} projectId="global" assetId="hero" />
    <div className={style.heroOverlay} />
    <div className={style.content}>
      <h1 className={style.title}>Indie game studio.</h1>
      <p className={style.punchLine}>
        Let's build the perfect game for your customers.
      </p>
      <SocialLinks className={style.links} />
    </div>
  </div>
);

export default Hero;
