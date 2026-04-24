import { Navigate, Outlet } from "react-router";

export const PrivateRouter = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};
