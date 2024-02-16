import React from "react";
import { Outlet } from "react-router-dom";
import CategoriesHeader from "../Components/CategoriesHeader";
import All from "../Components/Categorirs-pages/All";


function Categories() {
  return (
    <>
      <CategoriesHeader />
      <br />
      <hr />
      <Outlet />
      <br /><br /><hr />
      <All />
    </>
  );
}

export default Categories;
