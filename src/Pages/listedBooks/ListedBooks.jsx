import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ReadBooks from "./ReadBooks/ReadBooks";
import { useLoaderData } from "react-router";
import { getItems } from "../../Utility/addToDB";

const ListedBooks = () => {
  const booksData = useLoaderData();
  const [short, setShort] = useState("");
  const [readBooksData, setReadBooksData] = useState([]);

  const handelShort = (type) => {
    setShort(type);
    if (type === "Rating") {
      const shortByRating = [...readBooksData].sort((a, b) => a.rating - b.rating);
      setReadBooksData(shortByRating);
    }
    
    if(type === "Number of Pages"){
      const shortByNumber = [...readBooksData].sort((a, b) => a.totalPages - b.totalPages);
      setReadBooksData(shortByNumber);
    }

    if (type === "publisher year"){
      const shortByPublish = [...readBooksData].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setReadBooksData(shortByPublish);
    }
  };

  useEffect(() => {
    const allReadyRead = getItems();
    const readBooks = allReadyRead.map((id) => parseInt(id));
    const readBookData = booksData.filter((book) =>
      readBooks.includes(book.bookId),
    );
    setReadBooksData(readBookData);
  }, []);

  return (
    <div className="flex justify-center flex-col items-center container w-screen ">
      <div className="flex justify-center items-center h-[100px] w-full bg-gray-100 rounded-2xl my-8">
        <h1 className="text-5xl">Books</h1>
      </div>
      <div>
        <details className="dropdown">
          <summary className="btn m-1 flex gap-3 mr-3 btn bg-[#23BE0A] text-white">
            Short by {short ? short : <IoIosArrowDown />}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handelShort("Rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handelShort("Number of Pages")}>
                Number of Pages
              </a>
            </li>
            <li>
              <a onClick={() => handelShort("publisher year")}>
                publisher year
              </a>
            </li>
          </ul>
        </details>
      </div>
      <div className="w-full">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Read Books"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <ReadBooks readBooksData={readBooksData}></ReadBooks>
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Wishlist Books"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
