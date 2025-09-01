import Header from "./Header";
import bgImg from "../images/ChatGPT Image Sep 1, 2025, 04_41_02 PM.png";
import BookSearch from "./BookSearch";

const Browse = () => {
  return (
    <div className="relative w-screen">
      <img
        className="fixed h-screen object-cover md:h-auto"
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
