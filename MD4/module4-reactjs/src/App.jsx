import * as React from "react";
import { useRoutes } from "react-router";
import MainLayout from "./layouts/MainLayout/MainLayout";
import HomePage from "./page/HomePage";
import MenuPage from "./page/MenuPage";
import RecipesDetail from "./page/RecipesDetail";
import ScrollToTop from "./components/ScrollToTop";
import BookingForm from "./page/BookingForm";
import ModalBanner from "./components/ModalBanner";
import FilterByTag from "./components/MenuPage/FilterByTag";

//children:[ {path: "tag" , element: <FilterByTag />}] },
function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "menu", element: <MenuPage /> },
        { path: "recipes/:id", element: <RecipesDetail />},
        { path: "booking-form", element: <BookingForm /> },
        {path: "tag" , element: <FilterByTag />}
      ],
    },
  ]);

  return (
    <>
      <ScrollToTop />
      <ModalBanner />
      {element}
    </>
  );
}

export default App;
