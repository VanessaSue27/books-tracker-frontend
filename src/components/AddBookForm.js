/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const API_URL = 'https://vane-books-tracker.herokuapp.com/books';

export const AddBookForm = () => {
  const fileInput = useRef();
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [dateRead, setDateRead] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', fileInput.current.files[0]);
    formData.append('name', name);
    formData.append('author', author);
    formData.append('dateRead', dateRead);

    fetch(API_URL, { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((json) => {
        window.location.reload();
      })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="book-image">
        Book Image
        <input type="file" ref={fileInput} id="book-image" required />
      </label>

      <label htmlFor="book-name">
        Book Name
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} id="book-name" required />
      </label>

      <label htmlFor="book-author">
        Book Author
        <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} id="book-author" required />
      </label>

      <label>Date Read</label>
      <DatePicker selected={dateRead} onChange={(date) => setDateRead(date)} required />

      <button type="submit">ADD BOOK</button>
    </form>
  );
};
