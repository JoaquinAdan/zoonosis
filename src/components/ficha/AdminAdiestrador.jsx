import React from "react";
import { Box } from "@mui/material";
import AdminDatum from "./components/AdminDatum";

const grid = {
  display: "grid",
  gridTemplateColumns: "50% 50%",
  gap: "5px",
  alignItems: "start",
  mb: 20,
  width: "95%",
};

const AdminAdiestrador = ({ dataDog, isLoading }) => {
  return (
    <div className="data-dog">
      <h3
        style={{
          textTransform: "uppercase",
          color: "#4428a2",
          alignSelf: "flex-start",
          paddingLeft: "2.5%",
        }}
      >
        Adiestrador:
      </h3>
      <Box sx={grid}>
        <AdminDatum
          title="Nombre::"
          text={
            dataDog?.adiestrador?.nombres +
            " " +
            dataDog?.adiestrador?.apellidos
          }
          isLoading={isLoading}
        />
        <AdminDatum
          title="Fecha:"
          text={dataDog?.adiestrador?.fecha.slice(0, 10)}
          isLoading={isLoading}
        />
        <AdminDatum
          title="Matricula:"
          text={dataDog?.adiestrador?.matricula}
          isLoading={isLoading}
        />
        <AdminDatum
          title="Tipo:"
          text={dataDog?.adiestrador?.tipo}
          isLoading={isLoading}
        />
      </Box>
    </div>
  );
};

export default AdminAdiestrador;
