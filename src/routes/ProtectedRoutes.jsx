import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./Auth";
import toast from "react-hot-toast";

export const ProtectedRoutes = ({ element }) => {
  const auth = { token: isAuthenticated() };
  const localStorageToken = localStorage.getItem("authToken");

  if (!localStorageToken && !auth.token) {
    toast.error("Please, Signin to Continue");
    return <Navigate to="/Signin" replace />;
  }

  return element;
};


