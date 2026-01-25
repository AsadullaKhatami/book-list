import React from "react";
import { createBrowserRouter } from "react-router";
import Roots from "../Components/Roots/Roots";
import Home from "../Pages/Home/Home";
import NotFound from "../Components/NotFound/NotFound";
import ListedBooks from "../Pages/listedBooks/ListedBooks";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";
import BookDetails from "../Pages/Home/BookDetails/BookDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        loader: () => fetch("booksData.json"),
        Component: Home,
      },
      {
        path: "listedBooks",
        Component: ListedBooks,
      },
      {
        path: "pagesToRead",
        Component: PagesToRead,
      },
      {
        path: "BookDetails/:bookId",
        loader: () => fetch("booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);

export { router };
