import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const BookSuggestions = () => {
  const {items: books, loading } = useSelector((store) => store.book);

  if (loading) {
    return (
      <Shimmer />
    );
  }

  if (books === null) {
    return (
      <div className="py-6 text-center font-bold w-full">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6 ">
          📚{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Discover Your Next Favorite Book
          </span>
        </h2>
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <p className="py-4 px-2 text-gray-500 text-sm md:text-lg italic text-center">
        Oops 😅 No matches found. Try searching again!
      </p>
    );
  }

  return (
    <div className="py-6 flex flex-col gap-6 px-4 max-w-3xl mx-auto w-full text-center">
      {books.slice(0, 19).map((book) => {
        const coverUrl = book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "https://via.placeholder.com/100x150?text=No+Cover";

        return (
          <Link to={`/book${book.key.replace("/works/", "/")}`} key={book.key}>
            <div className="flex bg-orange-50 bg-opacity-80 shadow-lg rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-200">
              {/* Left: Cover */}
              <img
                src={coverUrl}
                alt={book.title}
                className="p-6 w-40 h-48 object-cover"
              />

              {/* Right: Details */}
              <div className="p-4 flex flex-col justify-center text-left w-full">
                <h3 className="font-semibold text-lg">{book.title}</h3>
                <p className="text-sm text-gray-700">
                  {book.author_name ? book.author_name.join(", ") : "Unknown"}
                </p>
                <p className="text-xs text-gray-500">
                  First published: {book.first_publish_year || "N/A"}
                </p>
                <span className="mt-2 text-blue-600 text-sm font-medium">
                  View Details →
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BookSuggestions;
