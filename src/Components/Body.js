import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import BookDetail from "./BookDetail";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/book/:id",
      element: <BookDetail />,
    },
  ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;