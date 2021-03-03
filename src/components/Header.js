import React from 'react';

import { HeaderContainer, HeaderImage, Title, BookIcon, TitleIconContainer } from '../styles/header-styles';
import readingWoman from '../assets/reading-woman.jpg';
import bookIcon from '../assets/book-icon.png';

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="curvy-div">
        <TitleIconContainer>
          <Title>Vane&apos;s Books Tracker</Title>
          <BookIcon src={bookIcon} alt="book icon" />
        </TitleIconContainer>
      </div>
      <HeaderImage src={readingWoman} alt="reading woman cartoon" />
    </HeaderContainer>
  )
};
