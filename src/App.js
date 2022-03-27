import React, { useState } from 'react';
import protectedWord from './protected.js';
import { AddBookForm } from './components/AddBookForm';
import { BooksList } from './components/BooksList';
import { Header } from './components/Header';
import { Input, Label } from './styles/book-form-styles';

export const App = () => {
  const [password, setPassword] = useState('');
  const [passwordCorrect, setPasswordCorrect] = useState(false);

  const submitPassword = () => {
    if (password === protectedWord) {
      setPasswordCorrect(true);
    }
  };

  return (
    <>
      <Header />
      {
        // eslint-disable-next-line operator-linebreak
        !passwordCorrect ?
          <>
            <Label htmlFor="password">
              Enter password to add new book:
              <Input type="text" onChange={(event) => setPassword(event.target.value)} id="password" required />
            </Label>
            <button type="button" onClick={submitPassword}>Submit password</button>
          </>
          // eslint-disable-next-line operator-linebreak
          :
          <AddBookForm />
      }
      <BooksList />
    </>
  );
};
