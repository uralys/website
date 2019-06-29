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
  <ul className={classnames([className, style.links])}>
    {socials.map(social => (
      <li className={style.link}>
        <Icon className={style.icon} category={social.icon} />
      </li>
    ))}
  </ul>
);

export default SocialLinks;
