/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';

import { BookCard } from './BookCard';

const API_URL = 'https://vane-books-tracker.herokuapp.com/books';

export const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setBooks(json);
      })
  }, []);

  return (
    <section>
      {books.map((book, index) => (
        <BookCard key={book._id} index={index} {...book} />
      ))}
    </section>
  );
};
