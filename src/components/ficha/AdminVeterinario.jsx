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

const AdminVeterinario = ({ dataDog, isLoading }) => {
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
        Veterinario:
      </h3>
      <Box sx={grid}>
        <AdminDatum
          title="Agente productor:"
          text={dataDog?.veterinario?.nombres + " " + dataDog?.veterinario?.apellidos}
          isLoading={isLoading}
        />
        <AdminDatum
          title="Aseguradora:"
          text={dataDog?.veterinario?.domicilioLaboral}
          isLoading={isLoading}
        />
        <AdminDatum
          title="Aseguradora:"
          text={dataDog?.veterinario?.telefono}
          isLoading={isLoading}
        />
      </Box>
    </div>
  );
};

export default AdminVeterinario;
