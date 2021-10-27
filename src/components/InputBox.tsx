import React, { useState } from 'react';
import { Input } from './Input';
import { Rating } from 'react-simple-star-rating';

interface Props {
  title: string;
  setTitle: (title: string) => void;
  author: string;
  setAuthor: (author: string) => void;
  toRead: boolean;
  setToRead: (isRead: boolean) => void;
  edit: boolean;
  addBook: (id: number, title: string, author: string, rating: number, isRead: boolean) => void;
  updateBook: (id: number, title: string, author: string, rating: number, isRead: boolean) => void;
}

export const InputBox: React.FC<Props> = ({ title, setTitle, author, setAuthor, toRead, setToRead, edit, addBook, updateBook }) => {

  const [errorMessage, setErrorMessage] = useState<string>('');
  const [rating, setRating] = useState(0);

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!title || !author) {
      setErrorMessage('Pleae fill in title and author');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000)
    } else {
      let randomId: number = Math.floor(Math.random() * 1000);

      addBook(randomId, title, author, rating, toRead);
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

      updateBook(randomId, title, author, rating, toRead);
    }
  }

  const handleRating = (rate: number) => {
    setRating(rate);
  }

  return (
    <form className='input-box'>
      <Input placeholder='Title...' value={title} setValue={setTitle} />
      <Input placeholder='Author...' value={author} setValue={setAuthor} />
      <div className='error-message'>{errorMessage}</div>
      <Rating onClick={handleRating} fillColor="#0000FF" ratingValue={rating} />
      <div className="checkbox-container"><span>To Read</span><input type="checkbox" name="read" id="read" checked={toRead} onChange={() => setToRead(!toRead)} /><span>Read</span></div>
      {edit ? <button type="submit" onClick={handleEdit}>Confirm Edits</button> : <button type="submit" onClick={handleAdd}>Add Book</button>}
    </form>
  )
}
