import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./Auth";
import toast from "react-hot-toast";

export const ProtectedRoutes = ({ element }) => {
  const userInfoString = localStorage.getItem("2gedaUserInfo");
  const auth = { token: isAuthenticated() };
  const localStorageToken = localStorage.getItem("authToken");

  if (!localStorageToken && !userInfoString) {
    toast.error("Please, Sign in to Continue");
    return <Navigate to="/" replace />;
  } 

  return element;
};