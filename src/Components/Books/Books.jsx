import React from "react";
import Book from "../Book/Book";

const Books = ({data}) => {
//   const [allBooks, setAllBooks] = useState([]);

//   useEffect(() => {
//     fetch("booksData.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setAllBooks(data);
//       });
//   }, []);
//   console.log(allBooks);

    //  const data = use(bookPromise);
    //  console.log(data);

  return (
    <div className="container pb-15">
      <h1 className="text-3xl text-center">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
        {
            data.map(book => <Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;
