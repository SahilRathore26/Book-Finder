import Header from "./Header";
import bgImg from "../images/Book Finder Bg Image.png";
import BookSearch from "./BookSearch";

const Browse = () => {
  return (
    <div className="relative w-screen">
      <img
        className="fixed w-screen object-cover h-screen md:h-auto"
        alt="bg-img"
        src={bgImg}
      ></img>
      <Header />
      <div className="relative">
        <BookSearch />
      </div>
    </div>
  );
};

export default Browse;
