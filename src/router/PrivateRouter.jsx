import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
//import { RecipeContext } from "../App";

const PrivateRouter = () => {
  //const { name, pass } = useContext(RecipeContext);

   return localStorage.getItem("username")==="murat" && localStorage.getItem("password")==="1234" ? <Outlet /> : <Navigate to="/" />;
  //return name === "Murat" && pass === "1234" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
