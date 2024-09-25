import React from 'react';
import { useSelector } from 'react-redux';
import { selectBooks } from '../store/bookSlice';

const BookList = () => {
  const books = useSelector(selectBooks);

  return (
    <div className="p-4 bg-gray-50 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Book List</h2>
      <ul className="space-y-2">
        {books.map(book => (
          <li key={book.id} className="p-2 bg-white border border-gray-300 rounded hover:bg-gray-100 transition">
            {book.title} - <span className="font-semibold">{book.author.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
