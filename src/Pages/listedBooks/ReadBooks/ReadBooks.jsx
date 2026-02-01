import React, { } from 'react';
import ReadBook from './ReadBook';

const ReadBooks = ({ readBooksData }) => {
  return (
    <div className="flex flex-col gap-4">
      {readBooksData.map((book) => (
        <ReadBook key={book.bookId} book={book}></ReadBook>
      ))}
    </div>
  );
};

export default ReadBooks;