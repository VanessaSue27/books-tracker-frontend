import React from 'react';

import { AddBookForm } from './components/AddBookForm';
import { BooksList } from './components/BooksList';

export const App = () => {
  return (
    <>
      <AddBookForm />
      <BooksList />
    </>
  );
};
