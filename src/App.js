import React, { useState } from 'react';
import { AddBookForm } from './components/AddBookForm';
import { BooksList } from './components/BooksList';
import { Header } from './components/Header';

export const App = () => {
  const protectedWord = process.env.REACT_APP_FORM_PROTECTION;
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
        !passwordCorrect ?
          <>
            <label htmlFor="password">
              Enter password to add new book:
              <input type="text" onChange={(event) => setPassword(event.target.value)} id="password" required />
            </label>
            <button type="button" onClick={submitPassword}>Submit password</button>
          </>
          :
          <AddBookForm />
      }
      <BooksList />
    </>
  );
};
