import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router";

const ReadBook = ({ book }) => {
  const {
    bookName,
    image,
    category,
    author,
    tags,
    rating,
    yearOfPublishing,
    publisher,
    totalPages,
  } = book;
  return (
    <div className="flex gap-5">
      <div className="h-[100%] w-[30%] bg-gray-100 rounded-xl">
        <img className="w-[40%] mx-auto py-5" src={image} alt="book image" />
      </div>
      {/* medal part */}
      <div className="w-[70%]">
        <div className="my-1">
          <h3 className="text-5xl mb-2 playfair-display">{bookName}</h3>
          <p className="font-medium text-gray-600 my-2">
            By: <span>{author}</span>
          </p>
        </div>
        <div className="flex gap-4">
          <h4>Tag: </h4>
          <div className="flex gap-3">
            {tags.map((tag, i) => {
              return (
                <p key={i} className="py-[7px] px-[16px] rounded-4xl text-[#23BE0A] bg-[#23BE0A0D]">
                  {tag}
                </p>
              );
            })}
          </div>
          <p className="flex gap-3 justify-center items-center text-gray-600">
            <CiLocationOn />
            Year of public: {yearOfPublishing}
          </p>
        </div>
        <div className="flex gap-4 text-gray-600 mt-2">
          <p className="flex gap-2 justify-center items-center">
            <MdOutlineSupervisorAccount />
            publisher: {publisher}
          </p>
          <p className="flex gap-3 justify-center items-center">
            <MdOutlineContactPage />
            page {totalPages}
          </p>
        </div>
        {/* last parts */}
        <div className="flex border-t-1 border-dashed mt-4 pt-4 border-gray-400 gap-4">
          <p className="py-[7px] px-[16px] rounded-4xl text-[#328EFF] bg-[#BAD6F7] ">
            Category: {category}
          </p>
          <p className="py-[7px] px-[16px] rounded-4xl text-[#FFAC33] bg-[#FFEED6]">
            Rating: {rating}
          </p>
          <Link
            to={''}
            className="mr-3 btn bg-[#23BE0A] text-white rounded-4xl"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
