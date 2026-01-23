import React from 'react';

const Book = ({book}) => {
    const { bookName, image, category, author, tags, rating } = book;
    return (
      <div className="p-4 border border-oklch(55.1% 0.027 264.364) rounded-xl h-[482px]">
        <div className="h-[50%] bg-[rgba(243, 243, 243, 1)] rounded-xl">
          <img className="h-full mx-auto" src={image} alt="book image" />
        </div>
        <div className="my-6">
          <div className="flex gap-3">
            {tags.map((tag) => {
              return (
                <p className="py-[7px] px-[16px] rounded-4xl text-[#23BE0A] bg-[#23BE0A0D]">
                  {tag}
                </p>
              );
            })}
          </div>
          <div className="my-4">
            <h3 className="text-2xl mb-2">{bookName}</h3>
            <p>
              By: <span>{author}</span>
            </p>
          </div>
          <div className="h-[50px] border-t-1 border-oklch(55.1% 0.027 264.364) flex items-center justify-between">
            <p>{category}</p>
            <div>
              <p>{rating}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Book;