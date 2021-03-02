import React from 'react';

export const BookCard = ({ name, author, imageUrl }) => {
  return (
    <div>
      <h3>{name}</h3>
      <h3>{author}</h3>
      <img src={imageUrl} alt="book cover" />
    </div>
  );
};
