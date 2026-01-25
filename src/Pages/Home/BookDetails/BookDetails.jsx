import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const id = useParams();
    const bookId = parseInt(id.bookId);
    const data = useLoaderData();
    const Book = data.find(book => book.bookId === bookId);
    console.log(bookId, Book);
  const {
    bookName,
    image,
    category,
    author,
    tags,
    rating,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = Book;

  const handdelMarkAsRead = () => {
    // where to store 
    // 
  }

    return (
      <div className="flex justify-between container pt-10 pb-20 gap-11">
        <div className="w-[50%] h-full bg-gray-100 rounded-xl">
          <img
            className="h-screen mx-auto py-10"
            src={image}
            alt="book image"
          />
        </div>
        <div className="w-[50%]">
          <h1 className="playfair-display text-5xl mb-4 font-bold">
            {bookName}
          </h1>
          <p className="text-xl pb-5">By: {author}</p>
          <p className="border-y-1 border-dashed border-gray-400 py-4">
            {category}
          </p>
          <p className="py-6">
            <span className="font-medium">Review: </span>
            <span className="text-gray-600">{review}</span>
          </p>
          <div className="flex gap-3 items-center pb-6">
            <h3>Tags: </h3>
            {tags.map((tag) => {
              return (
                <p className="py-[7px] px-[16px] rounded-4xl text-[#23BE0A] bg-[#23BE0A0D]">
                  {tag}
                </p>
              );
            })}
          </div>
          <div className="grid grid-cols-3 border-t-1 border-dashed border-gray-400 py-4">
            <div className="text-gray-600">
              <p>Number of Pages: </p>
              <p>Publisher: </p>
              <p>Year of Publisher: </p>
              <p>Rating: </p>
            </div>
            <div className="font-medium">
              <p>{totalPages}</p>
              <p>{publisher}</p>
              <p>{yearOfPublishing}</p>
              <p>{rating}</p>
            </div>
          </div>
          <div>
            <button className="mr-3 btn bg-white text-black py-[18px] px-[28px]">
              Mark as Read
            </button>
            <button className="mr-3 btn bg-[#23BE0A] text-white py-[18px] px-[28px]">
              Add to wishlist
            </button>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;