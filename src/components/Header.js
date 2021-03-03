import React from 'react';

import { HeaderContainer, HeaderImage } from '../styles/header-styles';
import readingWoman from '../assets/reading-woman.jpg';

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>Vane&apos;s Books Tracker</h1>
      <HeaderImage src={readingWoman} alt="reading woman cartoon" />
    </HeaderContainer>
  )
};
