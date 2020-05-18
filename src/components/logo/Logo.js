import React from 'react';
import logo from '../../img/sprite.svg';
import './Logo.scss';

const Logo = () => {
  return (
    <svg className="logo" data-test="logo">
      <use xlinkHref={`${logo}#logo`} />
    </svg>
  );
};

export default Logo;
