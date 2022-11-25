import React from "react";
import AdminNavBarContainer from "../components/AdminNavBarContainer";
import AdminGridDataDogs from "../components/AdminGridDataDogs";
import AdminStatus from "../features/AdminStatus";
import useBreakpoint from "../hooks/useBreakpoint";

const AdminDataDogs = () => {
  const matches = useBreakpoint("sm");
  return (
    <AdminNavBarContainer>
      <div
        style={
          matches
            ? {
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 25px 0 25px",
              }
            : {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "10px 16px 0 16px",
              }
        }
      >
        {matches ? (
          <>
            <h2 style={{ margin: 0 }}>Datos del perro:</h2>
            <AdminStatus />
          </>
        ) : (
          <>
            <AdminStatus />
            <h2 style={{ margin: 0 }}>Datos del perro:</h2>
          </>
        )}
      </div>

      <div style={matches ? { padding: "0 25px" } : { padding: "0 16px" }}>
        <AdminGridDataDogs />
      </div>
    </AdminNavBarContainer>
  );
};

export default AdminDataDogs;
