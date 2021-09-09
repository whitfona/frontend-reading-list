import React, { useState } from 'react'
import { Input } from './Input';

interface Props {
  title: string;
  setTitle: (title: string) => void;
  author: string;
  setAuthor: (author: string) => void;
  toRead: boolean;
  setToRead: (isRead: boolean) => void;
  edit: boolean;
  addBook: (id: number, title: string, author: string, isRead: boolean) => void;
  updateBook: (id: number, title: string, author: string, isRead: boolean) => void;
}

export const InputBox: React.FC<Props> = ({ title, setTitle, author, setAuthor, toRead, setToRead, edit, addBook, updateBook }) => {

  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!title || !author) {
      setErrorMessage('Pleae fill in title and author');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000)
    } else {
      let randomId: number = Math.floor(Math.random() * 1000);

      addBook(randomId, title, author, toRead);
    }
  }

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!title || !author) {
      setErrorMessage('Pleae fill in title and author');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000)
    } else {
      let randomId: number = Math.floor(Math.random() * 1000);

      updateBook(randomId, title, author, toRead);
    }
  }

  return (
    <form className='input-box'>
      <Input placeholder='Title...' value={title} setValue={setTitle} />
      <Input placeholder='Author...' value={author} setValue={setAuthor} />
      <div className='error-message'>{errorMessage}</div>
      <div className="checkbox-container"><span>To Read</span><input type="checkbox" name="read" id="read" checked={toRead} onChange={() => setToRead(!toRead)} /><span>Read</span></div>
      {edit ? <button type="submit" onClick={handleEdit}>Confirm Edits</button> : <button type="submit" onClick={handleAdd}>Add Book</button>}
    </form>
  )
}
