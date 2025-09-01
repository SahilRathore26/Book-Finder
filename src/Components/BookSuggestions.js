import { useSelector } from "react-redux";

const BookSuggestions = () => {
  const books = useSelector((store) => store.book.items);

  return (
    <div className="py-6 text-center font-bold text-black w-full">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6 ">
        📚 <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Discover Your Next Favorite Book</span>
      </h2>

      <div className="flex flex-col gap-6 px-4 max-w-3xl mx-auto w-full">
        {books && books.length > 0 ? (
          books.slice(0, 19).map((book, index) => {
            const coverUrl = book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : "https://via.placeholder.com/100x150?text=No+Cover";

            return (
              <div
                key={index}
                className="flex bg-orange-50 bg-opacity-50 shadow-lg rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-200"
              >
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
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-lg italic">
            Oops 😅 No matches found. Try searching again!
          </p>
        ) }
      </div>
    </div>
  );
};

export default BookSuggestions;
