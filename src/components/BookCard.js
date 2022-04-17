import React from 'react';
import moment from 'moment';
import '../styles/BookCard.css';

export const BookCard = ({ name, author, imageUrl, dateRead, index }) => {
  return (
    <div>
      <div>
        <div style={{ width: 200 }}>
          <h3>{name}</h3>
          <h4>{author}</h4>
        </div>
        <h3>{index + 1}</h3>
      </div>
      <h4>{`Finished Reading on: ${moment(dateRead).format('MMMM DD, YYYY')}`}</h4>
      <img className="bookCoverImage" src={imageUrl} alt="book cover" />
    </div>
  );
};
