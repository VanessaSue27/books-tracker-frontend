import React from 'react';
import moment from 'moment';

export const BookCard = ({ name, author, imageUrl, dateRead, index }) => {
  return (
    <div>
      <h3>{`Book number: ${index + 1}`}</h3>
      <h3>{name}</h3>
      <h3>{author}</h3>
      <img src={imageUrl} alt="book cover" />
      <h3>{`Finished Reading on: ${moment(dateRead).format('MMMM DD, YYYY')}`}</h3>
    </div>
  );
};
