import React from "react";
import AdminNavBarContainer from "../components/AdminNavBarContainer";
import AdminGridDataDogs from "../components/AdminGridDataDogs";
import AdminStatus from "../features/AdminStatus";
import useBreakpoint from "../hooks/useBreakpoint";
import useMyQuery from "../hooks/useMyQuery";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { fetchDataDog } from "../services/api";

const AdminDataDogs = () => {
  const matches = useBreakpoint("sm");
  const { auth } = useAuth();
  const { id } = useParams();

  const payload = { dogId: id, token: auth.token };
  const { data: dataDog, isLoading } = useMyQuery(["getAllDataDog", payload], () =>
    fetchDataDog(payload)
  );


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
            <h2 style={{ margin: 0, color: "#4428a2"  }}>Datos del perro:</h2>
            <AdminStatus id={id} token={auth.token} />
          </>
        ) : (
          <>
            <AdminStatus id={id} token={auth.token} />
            <h2 style={{ margin: 0, color: "#4428a2"  }}>Datos del perro:</h2>
          </>
        )}
      </div>

      <div style={matches ? { padding: "0 25px" } : { padding: "0 16px" }}>
        <AdminGridDataDogs dataDog={dataDog} isLoading={isLoading} />
      </div>
    </AdminNavBarContainer>
  );
};

export default AdminDataDogs;
