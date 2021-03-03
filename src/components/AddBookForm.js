/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { FormContainer, AddBookTitle, SmallText, Input, DateLabel, Button, Label } from '../styles/book-form-styles';

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
    <section>
      <AddBookTitle>Add Book</AddBookTitle>
      <SmallText>Yay! For finishing another book!~~</SmallText>
      <FormContainer onSubmit={handleSubmit}>
        <Label htmlFor="book-name">
          Book&apos;s Name
          <Input type="text" value={name} onChange={(event) => setName(event.target.value)} id="book-name" required />
        </Label>

        <Label htmlFor="book-author">
          Author
          <Input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} id="book-author" required />
        </Label>

        <Label htmlFor="book-image">
          Book&apos;s Cover Image
          <Input type="file" ref={fileInput} id="book-image" required />
        </Label>

        <DateLabel>Date Finished</DateLabel>
        <DatePicker selected={dateRead} onChange={(date) => setDateRead(date)} required />

        <Button type="submit">ADD BOOK</Button>
      </FormContainer>
    </section>
  );
};
