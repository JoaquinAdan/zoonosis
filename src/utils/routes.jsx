import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AdminAuthProvider from "../context/auth/AdminAuthProvider";
// import ProtectedRoute
import AdminUnloggedRoute from "../components/auth/AdminUnloggedRoute";
import AdminProtectedRoute from "../components/auth/AdminProtectedRoute";

const MainForm = lazy(() => import("../layouts/Form"));
const AdminLogin = lazy(() => import("../layouts/AdminLogin/"));
const AdminDashboard = lazy(() => import("../layouts/AdminDashboard/"));
const AdminDataDogs = lazy(() => import("../layouts/AdminDataDogs/"));

const DefRoutes = () => {
  return (
    <AdminAuthProvider>
      <Routes>
        <Route path="/" element={<MainForm />} />

        <Route
          path="/admin"
          element={
            <AdminUnloggedRoute>
              <AdminLogin />
            </AdminUnloggedRoute>
          }
        />
        <Route
          path="/admin/zoonosis"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />
        <Route
          path="/admin/zoonosis/:id"
          element={
            <AdminProtectedRoute>
              <AdminDataDogs />
            </AdminProtectedRoute>
          }
        />
      </Routes>
    </AdminAuthProvider>
  );
};

export default DefRoutes;
