import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/AddBookForm.css';

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
    <section className="addBookFormWrapper">
      <h2 className="addBookFormTitle">Finished another book?</h2>
      <h4 className="addBookFormSubText">Register it and keep reading on!~~</h4>
      <form className="addBookFormComponents" onSubmit={handleSubmit}>
        <h3 className="addBookFormFieldName">Book&apos;s Name</h3>
        <input
          className="addBookFormTextInput"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          minLength={2}
          maxLength={20}
          required />

        <h3 className="addBookFormFieldName">Author</h3>
        <input
          className="addBookFormTextInput"
          type="text"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          minLength={2}
          maxLength={20}
          required />

        <h3 className="addBookFormFieldName">Cover Image</h3>
        <input className="addBookFormImageInput" type="file" ref={fileInput} required />

        <h3 className="addBookFormFieldName">Date Finished</h3>
        <DatePicker selected={dateRead} onChange={(date) => setDateRead(date)} required />

        <button className="addBookButton" type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};
