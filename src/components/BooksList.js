import React, { useEffect, useState } from 'react';
import { BookCard } from './BookCard';
import '../styles/BooksList.css';

// const SORTED_BOOKS = 'https://vane-books-tracker.herokuapp.com/sortedBooks';
const SORTED_BOOKS = 'http://localhost:8080/sortedBooks';

export const BooksList = () => {
  const [sortedBooks, setsortedBooks] = useState([]);

  useEffect(() => {
    fetch(SORTED_BOOKS)
      .then((res) => res.json())
      .then((json) => {
        setsortedBooks(json);
      })
  }, []);

  return (
    <>
      {
        sortedBooks.year2021 &&
        <section className="booksListYearlySection">
          <h2 className="booksListYearlySectionTitle">2021</h2>
          <h4 className="booksListYearlySectionSubText">{`${sortedBooks.year2021.length} books read`}</h4>
          <div className="booksListBooksCardsWrapper">
            {sortedBooks.year2021.map((book, index) => (
              <BookCard key={book._id} index={index} {...book} />
            ))}
          </div>
        </section>
      }
      {
        sortedBooks.year2022 &&
        <section className="booksListYearlySection">
          <h2 className="booksListYearlySectionTitle">2022</h2>
          <h4 className="booksListYearlySectionSubText">{`${sortedBooks.year2022.length} books read`}</h4>
          <div className="booksListBooksCardsWrapper">
            {sortedBooks.year2022.map((book, index) => (
              <BookCard key={book._id} index={index} {...book} />
            ))}
          </div>
        </section>
      }
    </>
  );
};
