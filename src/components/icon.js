import React from 'react';
import { ReactComponent as SchoolIcon } from '../icons/school.svg';
import { ReactComponent as GamepadIcon } from '../icons/gamepad.svg';
import { ReactComponent as InternshipIcon } from '../icons/internship.svg';

const propTypes = {
  category: 'school' | 'games' | 'internship' | 'partnership' | 'job'
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

    case 'partnership':
    case 'job':
    default:
      return null;
  }
};

const Icon = ({ className, category, fill }) => (
  <div className={className}>
    <Svg category={category} fill={fill} />
  </div>
);

Icon.propTypes = propTypes;
export default Icon;
