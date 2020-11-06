import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import style from './header.module.css';
import Image from './image';

const Header = ({siteTitle}) => (
  <header className={style.header}>
    <Image wrapperClassName={style.logo} projectId="global" assetId="logo-square" />
    <Link className={style.link} to="/">
      {siteTitle}
    </Link>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
