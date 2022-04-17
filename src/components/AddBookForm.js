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
        // Is there a better way to update page with new results after adding a new book,
        // instead of reloading the page?
        window.location.reload();
      })
  };

  return (
    <section>
      <h2>Finished another book?</h2>
      <h4>Yay! Keep reading on!~~</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="book-name">
          Book&apos;s Name
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} id="book-name" required />
        </label>

        <label htmlFor="book-author">
          Author
          <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} id="book-author" required />
        </label>

        <label htmlFor="book-image">
          Book&apos;s Cover Image
          <input type="file" ref={fileInput} id="book-image" required />
        </label>

        <h5>Date Finished</h5>
        <DatePicker selected={dateRead} onChange={(date) => setDateRead(date)} required />

        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};
