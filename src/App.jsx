import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import CartProvider from "./context/CartProvider";

// import pages

import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Error from "./Pages/Error";
import ProductPage from "./Pages/ProductPage";
import Root from "./Pages/Root";
import Furnitures from "./Components/Categorirs-pages/Furnitures";
import Electronics from "./Components/Categorirs-pages/Electronics";
import Kitchen from "./Components/Categorirs-pages/Kitchen";
import Lamps from "./Components/Categorirs-pages/Lamps";
import Skincare from "./Components/Categorirs-pages/Skincare";
import All from "./Components/Categorirs-pages/All";
import Chairs from "./Components/Categorirs-pages/Chairs";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="categories" element={<Categories />}>
        <Route path="all" element={<All />} />
        <Route path="furnitures" element={<Furnitures />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="lamps" element={<Lamps />} />
        <Route path="kitchen" element={<Kitchen />} />
        <Route path="chairs" element={<Chairs />} />
        <Route path="skincare" element={<Skincare />} />
      </Route>
      <Route path="categories/productpage/:id" element={<ProductPage />} />
      <Route path="*" element={<Error />} />
    </Route>
  ])
);

function App() {
  return (
     <RouterProvider router={router} />
  )
 ;
}

export default App;
