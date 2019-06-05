import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as AndroidIcon } from '../icons/android.svg';
import { ReactComponent as AppleIcon } from '../icons/apple.svg';
import { ReactComponent as LDIcon } from '../icons/ld.svg';
import { ReactComponent as GithubIcon } from '../icons/github.svg';
import { ReactComponent as PlayIcon } from '../icons/play.svg';
import { ReactComponent as SchoolIcon } from '../icons/school.svg';
import { ReactComponent as GamepadIcon } from '../icons/gamepad.svg';
import { ReactComponent as InternshipIcon } from '../icons/internship.svg';

const propTypes = {
  category: PropTypes.oneOf([
    'android',
    'apple',
    'freelance',
    'games',
    'github',
    'internship',
    'job',
    'ld',
    'partnership',
    'play',
    'school'
  ])
};

const Svg = ({ className, category, fill }) => {
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
          className={className}
          style={{
            width: '100%',
            height: '100%',
            fill,
            margin: 'auto',
            top: '10px',
            left: '10px'
          }}
        />
      );

    case 'internship':
      return (
        <InternshipIcon
          className={className}
          style={{
            width: '100%',
            height: '100%',
            fill,
            margin: 'auto',
            top: '10px',
            left: '10px'
          }}
        />
      );

    case 'apple':
      return (
        <AppleIcon
          style={{
            fill
          }}
        />
      );

    case 'ld':
      return (
        <LDIcon
          style={{
            fill
          }}
        />
      );

    case 'github':
      return (
        <GithubIcon
          style={{
            fill
          }}
        />
      );

    case 'android':
      return (
        <AndroidIcon
          style={{
            fill
          }}
        />
      );

    case 'play':
      return (
        <PlayIcon
          style={{
            fill
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
  <div className={className} style={style}>
    <Svg category={category} fill={fill} />
  </div>
);

Icon.propTypes = propTypes;
export default Icon;
