import React from 'react';
import Logo from '../../components/logo/Logo';
import './Header.scss';

const Header = () => {
  return (
    <header className="header" data-test="header">
      <Logo />
    </header>
  );
};

export default Header;
