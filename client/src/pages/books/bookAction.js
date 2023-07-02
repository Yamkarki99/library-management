import { toast } from "react-toastify";
import { fetchBooks, postBook } from "../../helper/axios";
import { setBooks } from "./bookSlice";

export const postBookAction = (bookObj) => async (dispatch) => {
  const dataPending = postBook(bookObj);

  toast.promise(dataPending, {
    pending: "Please wait...",
  });

  const { status, message } = await dataPending;

  toast[status](message);
  if (status === "success") {
    // need to fetch all books
    dispatch(fetchBookAction());
  }
};
export const fetchBookAction = () => async (dispatch) => {
  const { status, books } = await fetchBooks();

  if (status === "success") {
    dispatch(setBooks(books));
  }
};
