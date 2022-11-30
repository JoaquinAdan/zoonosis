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

const AdminPropietario = ({ dataDog, isLoading }) => {
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
        Propietario:
      </h3>
      <Box sx={grid}>
        <AdminDatum
          title="Nombre:"
          text={
            dataDog?.propietario?.nombres +
            " " +
            dataDog?.propietario?.apellidos
          }
          isLoading={isLoading}
        />
        <AdminDatum
          title="Domicilio:"
          text={dataDog?.propietario?.domicilio}
          isLoading={isLoading}
        />
        <AdminDatum
          title="Email:"
          text={dataDog?.propietario?.email}
          isLoading={isLoading}
        />
        <AdminDatum
          title="Fecha de nacimiento:"
          text={dataDog?.propietario?.fechaDeNacimiento.slice(0, 10)}
          isLoading={isLoading}
        />
        <AdminDatum
          title="Telefono:"
          text={dataDog?.propietario?.telefono}
          isLoading={isLoading}
        />
        <AdminDatum
          title="Telefono alternativo:"
          text={dataDog?.propietario?.telefonoAlternativo}
          isLoading={isLoading}
        />
      </Box>
    </div>
  );
};

export default AdminPropietario;
