import { TableList } from './TableList';

interface Books {
  id: number;
  title: string;
  author: string;
  isRead: boolean;
}

interface Props {
  books: Books[];
  removeBook: (index: number) => void;
  editBook: (index: number) => void;
}

export const OutputBox: React.FC<Props> = ({ books, removeBook, editBook }) => {

  return (
    <div className='output-box'>
      <h2 className='text-center'>Books to Read:</h2>
      <TableList booksArray={books.filter(book => !book.isRead)} removeBook={removeBook} editBook={editBook} />
      <h2 className='text-center'>Books Read:</h2>
      <TableList booksArray={books.filter(book => book.isRead)} removeBook={removeBook} editBook={editBook} />
    </div>
  )
}