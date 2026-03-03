import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getItems } from "../../Utility/addToDB";
import Chart from "./Chart";

const PagesToRead = () => {
  const booksData = useLoaderData();
  const [readBooksData, setReadBooksData] = useState([]);

  useEffect(() => {
    const allReadyRead = getItems();
    const readBooks = allReadyRead.map((id) => parseInt(id));
    const readBookData = booksData.filter((book) =>
      readBooks.includes(book.bookId),
    );
    setReadBooksData(readBookData);
  }, []);

  // console.log(readBooksData);

  return (
    <div className="container w-screen h-screen bg-[#13131308] rounded-2xl">
      <Chart readBooksData={readBooksData}></Chart>
    </div>
  );
};

export default PagesToRead;
