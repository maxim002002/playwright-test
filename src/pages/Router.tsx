//@ts-ignore
import { useSelector } from "react-redux";
import { getLoginUser } from "../redux/slices/UserState";
import { Routes, Route, Navigate } from "react-router-dom";
import DashBoard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";

export default function AppRouter() {
  const isLogin = useSelector(getLoginUser);
  return (
    <Routes>
      {location.pathname === "/" ? (
        <Route
          index
          element={isLogin ? <Navigate to="/dashboard" /> : <Home />}
        />
      ) : (
        <Route path="/dashboard" element={<DashBoard />} />
      )}
    </Routes>
  );
}
