import React from 'react';
import classnames from 'classnames';
import style from './social-links.module.css';
import Icon from './icon';

const socials = [
  {
    icon: 'github',
    link: 'https://github.com/chrisdugne'
  },
  {
    icon: 'twitter',
    link: 'https://twitter.com/chrisdugne'
  },
  {
    icon: 'facebook',
    link: 'https://facebook.com/uralys'
  }
];

const SocialLinks = ({ className }) => (
  <div className={classnames([className, style.links])}>
    {socials.map(social => (
      <a
        className={style.link}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className={style.icon} category={social.icon} />
      </a>
    ))}
  </div>
);

export default SocialLinks;
