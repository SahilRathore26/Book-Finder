import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setBooks } from "../utils/bookSlice";

const BookSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleSearchClick = async () => {
    const data = await fetch("https://openlibrary.org/search.json?title="+ searchText.current.value);
    const json = await data.json();
    dispatch(setBooks(json.docs));

  }
  return (
    <div className="pt-28 md:pt-28 flex justify-center">
      <form
        className="w-full mx-5 flex md:w-1/3"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="w-3/4 p-2 px-4 m-2 h-10 border-none rounded-sm text-sm"
          type="text"
          placeholder="Enter Book Name"
        ></input>
        <button
          className="m-2 p-2 px-6 h-10 bg-red-700 text-sm text-white ml-2 rounded-sm"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default BookSearchBar;
