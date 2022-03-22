/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';

import { BookCard } from './BookCard';
import { BookListContainer } from '../styles/book-list-styles';
import { AddBookTitle } from '../styles/book-form-styles';

const API_URL = 'https://vane-books-tracker.herokuapp.com/books';

export const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        // Next step is to get the books sorted by year and create different sections per year
        // And also show the total per year
        // Update styling of the whole app: form, sections of books read per year, etc.
        console.log(json);
        setBooks(json);
      })
  }, []);

  return (
    <>
      <AddBookTitle>Books read so far this year...</AddBookTitle>
      <BookListContainer>
        {books.map((book, index) => (
          <BookCard key={book._id} index={index} {...book} />
        ))}
      </BookListContainer>
    </>
  );
};
