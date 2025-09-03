import Header from "./Header";
import bgImg from "../images/Book Finder Bg Image.png";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();
  const books = useSelector((store) => store.book.items);

  const book = books.find((b) => b.key === `/works/${id}`);
  if (!book) return <p className="text-center mt-20 text-gray-600">Book not found</p>;

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/200x300?text=No+Cover";

  return (
    <div className="relative w-screen">
      <img
        className="fixed w-screen object-cover h-screen md:h-auto"
        alt="bg-img"
        src={bgImg}
      ></img>
      <Header />

      <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-14 px-6 md:px-48 py-36 md:py-40">
        {/* Cover */}
        <img
          className="w-44 md:w-64 h-auto object-cover shadow-xl rounded-lg"
          alt={book.title}
          src={coverUrl}
        />

        {/* Book Details */}
        <div className="w-full md:w-2/5 px-6 py:4 md:px-10 md:py-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{book.title}</h1>
          {book.subtitle && (
            <h2 className="text-lg md:text-xl text-gray-600 mb-4 italic">
              {book.subtitle}
            </h2>
          )}

          <p className="text-gray-800 mb-2">
            <span className="font-semibold">Author(s):</span>{" "}
            {book.author_name ? book.author_name.join(", ") : "Unknown"}
          </p>

          <p className="text-gray-800 mb-2">
            <span className="font-semibold">First Published:</span>{" "}
            {book.first_publish_year || "N/A"}
          </p>

          <p className="text-gray-800 mb-2">
            <span className="font-semibold">Edition Count:</span>{" "}
            {book.edition_count}
          </p>

          <p className="text-gray-800 mb-2">
            <span className="font-semibold">Languages Available:</span>{" "}
            {book.language ? book.language.join(", ") : "N/A"}
          </p>

          <p className="text-gray-800 mb-2">
            <span className="font-semibold">Ebook Access:</span>{" "}
            {book.ebook_access === "printdisabled"
              ? "Not available online"
              : "Available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
