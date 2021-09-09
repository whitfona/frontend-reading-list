import React from 'react'
import closedBin from '../images/closed-bin.png';
import openBin from '../images/open-bin.png';
import closedPen from '../images/pen.png';
import openPen from '../images/pen-and-paper.png';

interface Props {
  book: { id: number, title: string, author: string };
  removeBook: (bookID: number) => void;
  editBook: (bookID: number) => void;
}

export const ListItem: React.FC<Props> = ({ book, removeBook, editBook }) => {
  return (
    <tr key={book.id}>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td onClick={() => editBook(book.id)}>
        <img className='icon'
          src={closedPen} alt='Delete Trash Bin'
          onMouseOver={(e) => (e.currentTarget.src = openPen)}
          onMouseLeave={(e) => (e.currentTarget.src = closedPen)}
        />
      </td>
      <td onClick={() => removeBook(book.id)}>
        <img className='icon'
          src={closedBin} alt='Delete Trash Bin'
          onMouseOver={(e) => (e.currentTarget.src = openBin)}
          onMouseLeave={(e) => (e.currentTarget.src = closedBin)}
        />
      </td>
    </tr>
  )
}
