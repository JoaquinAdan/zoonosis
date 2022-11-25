import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
// import ProtectedRoute 

const MainForm = lazy(() => import('../layouts/Form'))
const AdminLogin = lazy(() => import("../layouts/AdminLogin/"));
const AdminDashboard = lazy(() => import("../layouts/AdminDashboard/"));
const AdminDataDogs = lazy(() => import("../layouts/AdminDataDogs/"));

const DefRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainForm />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/zoonosis" element={<AdminDashboard />} />
        <Route path="/admin/zoonosis/id" element={<AdminDataDogs />} />
      </Routes>
    </>
  );
};

export default DefRoutes;
