import React from 'react';
import moment from 'moment';
import '../styles/BookCard.css';

export const BookCard = ({ name, author, imageUrl, dateRead }) => {
  return (
    <div className="bookCard">
      <img className="bookCoverImage" src={imageUrl} alt="book cover" />
      <div>
        <div>
          <h3 className="bookCardTitle">{name}</h3>
          <h4 className="bookCardAuthor">{author}</h4>
        </div>
      </div>
      <p className="bookCardFinishedDate">{`Finished Reading on: ${moment(dateRead).format('MMMM DD, YYYY')}`}</p>
    </div>
  );
};
