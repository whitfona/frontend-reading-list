import React from 'react'
import { ListItem } from './ListItem'

interface Books {
  id: number;
  title: string;
  author: string;
  isRead: boolean;
}

interface Props {
  booksArray: Books[];
  removeBook: (bookID: number) => void;
  editBook: (bookID: number) => void;
}

export const TableList: React.FC<Props> = ({ booksArray, removeBook, editBook }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {[...booksArray].reverse().map((book) => (
          <ListItem key={book.id} book={book} removeBook={removeBook} editBook={editBook} />
        ))}
      </tbody>
    </table>
  )
}
