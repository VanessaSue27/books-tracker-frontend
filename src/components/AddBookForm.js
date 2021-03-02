import React, { useState, useRef } from 'react';

const API_URL = 'https://vane-books-tracker.herokuapp.com/books';

export const AddBookForm = () => {
  const fileInput = useRef();
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', fileInput.current.files[0]);
    formData.append('name', name);
    formData.append('author', author);

    fetch(API_URL, { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="book-image">
        Book Image
        <input type="file" ref={fileInput} id="book-image" />
      </label>

      <label htmlFor="book-name">
        Book Name
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} id="book-name" />
      </label>

      <label htmlFor="book-author">
        Book Author
        <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} id="book-author" />
      </label>

      <button type="submit">ADD BOOK</button>
    </form>
  );
};
