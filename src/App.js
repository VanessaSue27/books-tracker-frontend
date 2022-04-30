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
            <div className="passwordFormWrapper">
              <h3 className="passwordInputLabel">Enter password to add a book:</h3>
              <input className="passwordInput" type="text" onChange={(event) => setPassword(event.target.value)} required />
              <button className="submitPasswordButton" type="button" onClick={submitPassword}>Submit password</button>
            </div>
          </>
          :
          <AddBookForm />
      }
      <BooksList />
    </>
  );
};
