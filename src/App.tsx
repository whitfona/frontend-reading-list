import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { InputBox } from './components/InputBox'
import { OutputBox } from './components/OutputBox';

function App() {
  interface Books {
    id: number;
    title: string;
    author: string;
    rating: number;
    isRead: boolean;
  }

  const [books, setBooks] = useState<Books[]>([
    { id: 1, title: 'Into Thin Air', author: 'Jon Krakauer', rating: 5, isRead: true },
    { id: 2, title: 'A Gentleman in Moscow', author: 'Amor Towles', rating: 5, isRead: true },
    { id: 3, title: 'The Hitchhikers Guide to the Galaxy', author: 'Douglas Adams', rating: 4, isRead: true },
    { id: 4, title: 'Running To The Edge', author: 'Matthew Futterman', rating: 4, isRead: true },
    { id: 5, title: 'Just Mercy', author: 'Bryan Stevenson', rating: 5, isRead: true },
    { id: 6, title: 'Where Men Win Glory', author: 'Jon Krakauer', rating: 4, isRead: false },
    { id: 7, title: 'Dune', author: 'Frank Herbret', rating: 1, isRead: false },
    { id: 8, title: 'The Fifth Risk', author: 'Michael Lewis', rating: 1, isRead: false }
  ])

  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [toRead, setToRead] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);

  const removeBook = (index: number): void => {
    setBooks(books.filter((book) => book.id !== index));
  }

  const addBook = (id: number, title: string, author: string, rating: number, isRead: boolean): void => {
    let newBook = { id, title, author, rating, isRead }

    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
  }

  const editBook = (index: number): void => {
    books.forEach(((book) => {
      if (book.id === index) {
        setTitle(book.title);
        setAuthor(book.author);
        setEdit(true);
        removeBook(book.id);
      }
    }))
  }

  const updateBook = (id: number, title: string, author: string, rating: number, isRead: boolean): void => {
    addBook(id, title, author, rating, isRead)
    setEdit(false);
  }

  return (
    <>
      <div className="container">
        <Header title="Nick's Books" />
        <InputBox updateBook={updateBook} addBook={addBook} edit={edit} title={title} setTitle={setTitle} author={author} setAuthor={setAuthor} toRead={toRead} setToRead={setToRead} />
        <OutputBox removeBook={removeBook} books={books} editBook={editBook} />
        <Footer />
      </div>
    </>
  );
}

export default App;
