import React from "react";
import { Box } from "@mui/material";
import AdminDatum from "./components/AdminDatum";

const grid = {
  display: "grid",
  gridTemplateColumns: "50% 50%",
  gap: "20px",
  alignItems: "start",
  mb: 5,
  width: "95%",
};

const AdminCriador = ({ dataDog, isLoading }) => {
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
        Criador:
      </h3>
      <Box sx={grid}>
        <AdminDatum
          title="Nombre:"
          text={dataDog?.criador?.nombre}
          isLoading={isLoading}
        />
        <AdminDatum
          title="Numero de registro:"
          text={dataDog?.criador?.numeroRegistro}
          isLoading={isLoading}
        />
        <AdminDatum
          title="Organizacion:"
          text={dataDog?.criador?.organizacionRegistro}
          isLoading={isLoading}
        />
        <AdminDatum
          title="Razas registradas:"
          text={dataDog?.criador?.razasRegistradas}
          isLoading={isLoading}
        />
      </Box>
    </div>
  );
};

export default AdminCriador;
