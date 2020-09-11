import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';

import { HeaderContainer } from './style';

interface HeaderProps {
  linkBack?: string;
}

const Header: React.FC<HeaderProps> = ({ linkBack }) => {
  return (
    <HeaderContainer>
    <Link to="/" className="logo">
      <img src={logoImg} alt="Github Explorer" />
    </Link>

    {linkBack && (
      <Link to={linkBack} className="button-back">
        <FiChevronLeft size={20} color="#fbfbfb" />
        <span>Voltar</span>
      </Link>
    )}
  </HeaderContainer>
  );
};

export default Header;
