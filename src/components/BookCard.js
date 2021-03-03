import React from 'react';
import moment from 'moment';

import { BookContainer, BookImage, BookDetailsContainer, BookName, Author, Number, FinishedText } from '../styles/book-card-styles';

export const BookCard = ({ name, author, imageUrl, dateRead, index }) => {
  return (
    <BookContainer>
      <BookDetailsContainer>
        <div style={{ width: 200 }}>
          <BookName>{name}</BookName>
          <Author>{author}</Author>
        </div>
        <Number>{index + 1}</Number>
      </BookDetailsContainer>
      <FinishedText>{`Finished Reading on: ${moment(dateRead).format('MMMM DD, YYYY')}`}</FinishedText>
      <BookImage src={imageUrl} alt="book cover" />
    </BookContainer>
  );
};
