import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ element }) => {
  const userInfoString = localStorage.getItem("2gedaUserInfo");
  const localStorageToken = localStorage.getItem("authToken");

  if (!localStorageToken && !userInfoString) {
    return <Navigate to="/" replace />;
  }

  return element;
};
