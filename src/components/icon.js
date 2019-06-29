import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as AndroidIcon } from '../icons/android.svg';
import { ReactComponent as AppleIcon } from '../icons/apple.svg';
import { ReactComponent as FacebookIcon } from '../icons/facebook.svg';
import { ReactComponent as GamepadIcon } from '../icons/gamepad.svg';
import { ReactComponent as GithubIcon } from '../icons/github.svg';
import { ReactComponent as InternshipIcon } from '../icons/internship.svg';
import { ReactComponent as LDIcon } from '../icons/ld.svg';
import { ReactComponent as PlayIcon } from '../icons/play.svg';
import { ReactComponent as SchoolIcon } from '../icons/school.svg';
import { ReactComponent as TwitterIcon } from '../icons/twitter.svg';

const propTypes = {
  category: PropTypes.oneOf([
    'android',
    'apple',
    'facebook',
    'freelance',
    'games',
    'github',
    'internship',
    'job',
    'ld',
    'partnership',
    'play',
    'school',
    'twitter'
  ])
};

const Svg = ({ className, style, category, fill }) => {
  switch (category) {
    case 'school':
      return (
        <SchoolIcon
          style={{
            fill
          }}
        />
      );

    case 'games':
      return (
        <GamepadIcon
          style={{
            ...style,
            width: '90%'
          }}
        />
      );

    case 'internship':
      return <InternshipIcon style={style} />;

    case 'apple':
      return <AppleIcon style={style} />;

    case 'facebook':
      return (
        <FacebookIcon
          style={{
            ...style,
            width: '30%'
          }}
        />
      );

    case 'ld':
      return <LDIcon style={style} />;

    case 'github':
      return (
        <GithubIcon
          style={{
            ...style,
            width: '90%'
          }}
        />
      );

    case 'android':
      return <AndroidIcon style={style} />;

    case 'play':
      return <PlayIcon style={style} />;

    case 'twitter':
      return (
        <TwitterIcon
          style={{
            ...style,
            width: '70%'
          }}
        />
      );

    case 'partnership':
    case 'job':
    default:
      return null;
  }
};

const Icon = ({ style, className, category, fill }) => (
  <Svg
    category={category}
    fill={fill}
    style={{
      width: '100%',
      top: '50%',
      left: '50%',
      position: 'absolute',
      transform: 'translate(-50%, -50%)'
    }}
  />
);

Icon.propTypes = propTypes;
export default Icon;
