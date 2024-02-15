import React from "react";
import { Outlet } from "react-router-dom";
import CategoriesHeader from "../Components/CategoriesHeader";


function Categories() {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
    </>
  );
}

export default Categories;
