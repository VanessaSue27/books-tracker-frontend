import React, { useEffect, useState } from 'react';
import { BookCard } from './BookCard';

// const API_URL = 'https://vane-books-tracker.herokuapp.com/books';
const API_URL = 'http://localhost:8080/books';
// const SORTED_BOOKS_ENDPOINT = 'http://localhost:8080/sortedBooks';

export const BooksList = () => {
  const [books, setBooks] = useState([]);
  // const [sortedBooks, setsortedBooks] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((json) => {
        setBooks(json);
      })
  }, []);

  /* useEffect(() => {
    fetch(SORTED_BOOKS_ENDPOINT)
      .then((res) => res.json())
      .then((json) => {
        setsortedBooks(json);
      })
  }, []); */

  // console.log('sortedBooks', sortedBooks);

  return (
    <>
      <h2>Books read so far this year...</h2>
      <section>
        {books.map((book, index) => (
          <BookCard key={book._id} index={index} {...book} />
        ))}
      </section>
    </>
  );
};
