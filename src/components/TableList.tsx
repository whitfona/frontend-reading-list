import React from 'react'
import { ListItemRead } from './ListItemRead'
import { ListItemToRead } from './ListItemToRead'

interface Books {
  id: number;
  title: string;
  author: string;
  rating: number;
  isRead: boolean;
}

interface Props {
  booksArray: Books[];
  colOneName: string;
  removeBook: (bookID: number) => void;
  editBook: (bookID: number) => void;
}

export const TableList: React.FC<Props> = ({ booksArray, colOneName, removeBook, editBook }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>{colOneName}</th>
          <th>Title</th>
          <th>Author</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {[...booksArray].reverse().map((book) => (
          book.isRead ?
            <ListItemRead key={book.id} book={book} removeBook={removeBook} editBook={editBook} />
            :
            <ListItemToRead key={book.id} book={book} removeBook={removeBook} editBook={editBook} />
        ))}
      </tbody>
    </table>
  )
}
